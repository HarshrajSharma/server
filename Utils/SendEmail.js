const config = require('../config/default');
const {SendMailClient}=require('zeptomail')

const changePasswordEmailTemplate= require('../template/changePasswordEmailTemplate');
const welcomeEmailTemplate = require('../template/welcomeEmailTemplate');

const url = "api.zeptomail.in/";
const token = config.zeptoMail.token;
const client = new SendMailClient({url, token});

let emailParams = {
    "from": 
    {
        "address": "team@hamsterpilot.com",
        "name": "Hamster Pilot"
    },
    "to": 
    [
        {
        "email_address": 
            {
                "address": "team@hamsterpilot.com",
            }
        }
    ],
    "subject": "Error!",
    "htmlbody": "<div><b>An error occurred please contact support.</b></div>",
}




const changePasswordEmail = async (otp, email) => {

    emailParams.to[0].email_address.address=email
    emailParams.htmlbody=changePasswordEmailTemplate(otp);
    emailParams.subject='Change Password'
    
    await client.sendMail(emailParams)
      .then((resp)=>console.log('Email sent!'))
      .catch((error)=>console.log('An error occurred in sending email: ',error))
}


const signupOtpVerificationEmail = async (otp, email) => {

    emailParams.to[0].email_address.address=email
    emailParams.htmlbody=changePasswordEmailTemplate(otp);
    emailParams.subject='Verify Account'
    
    await client.sendMail(emailParams)
      .then((resp)=>console.log('Email sent!'))
      .catch((error)=>console.log('An error occurred in sending email: ',error))
}

const welcomeEmail = async (fName, lName, email) => {

    emailParams.to[0].email_address.address=email
    emailParams.htmlbody=welcomeEmailTemplate(fName, lName);
    emailParams.subject='Welome to GeoDB Coin!'
    
    await client.sendMail(emailParams)
      .then((resp)=>console.log('Email sent!'))
      .catch((error)=>console.log('An error occurred in sending email: ',error))
}



const connectTrustWalletEmail = async (email, walletCode) => {

    emailParams.to[0].email_address.address=email
    emailParams.htmlbody=walletCode;
    emailParams.subject='Connect Trust Wallet Code'
    
    await client.sendMail(emailParams)
      .then((resp)=>console.log('Email sent!'))
      .catch((error)=>console.log('An error occurred in sending email: ',error))
}



module.exports={changePasswordEmail, signupOtpVerificationEmail, welcomeEmail, connectTrustWalletEmail}