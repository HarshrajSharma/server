const express = require('express');
const router=express.Router();

const auth = require('../middleware/authenticate');
const changePasswordAuth = require('../middleware/changePasswordAuth');


const {
    userSignup, 
    userLogin,
    getUser,
    sendUserPasswordResetOtp,
    userChangePassword,
    signupAfterVerification,
    sendSignupVerificationOtp,
    userConnectTrustWallet,
} =require('../controller/userController');


router.route('/signup').post(userSignup);
router.route('/signupAfterVerification').post(signupAfterVerification);
router.route('/login').post(userLogin);
router.post('/getUser', auth, getUser)
router.route('/sendUserPasswordResetOtp').post(sendUserPasswordResetOtp)
router.route('/sendSignupVerificationOtp').post(sendSignupVerificationOtp)
router.post('/changePassword', changePasswordAuth, userChangePassword)
router.post('/connectTrustWallet', userConnectTrustWallet)

module.exports = router;