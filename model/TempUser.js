const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const tempUserSchema= new Schema({
    //Basic properties
    userId: {type: String},
    fName:{ type: String},
    lName:{ type: String},
    balance: {type: Number},

    //Auth details
    accountNumber: {type: String},
    email:{ type: String},
    password:{ type: String},
    isBlocked: {type: Boolean, default: false},
    isApproved: {type: Boolean},
    timedOtp: {
        otp: {type: String},
        timeStamp: {type: String}
    }
    

    
})
const TempUser=mongoose.model('TempUser', tempUserSchema);
module.exports = TempUser;