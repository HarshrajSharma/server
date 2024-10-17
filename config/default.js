require('dotenv').config();


module.exports={
    'database':{
        'mongoURI':process.env.MONGOURI
    },
    'jwt':{
        'secret':process.env.SECRET,
        'adminSecret':process.env.ADMINSECRET
    },
    'zeptoMail':{
        'token': process.env.ZEPTO_TOKEN
    }
}