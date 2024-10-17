const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema= new Schema({
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
const User=mongoose.model('User', userSchema);
module.exports = User;