const { SendMailClient } = require("zeptomail");
const config=require('../config/default')

const url = "api.zeptomail.in/";
// const token = '';

let client = new SendMailClient({url, token});
const creditEmailTemplate= require('../template/creditEmailTemplate');


let emailParams={
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
    "subject": "Test Email",
    "htmlbody": "<div><b> Test email sent successfully.</b></div>",
}
const testEmail = async (coin, amount, coinAddress, transactionId, email) => {

    emailParams.to[0].email_address.address=email
    emailParams.htmlbody=await creditEmailTemplate(coin, amount, coinAddress, transactionId);
    emailParams.subject='Account Credit'
    
    console.log(emailParams.to)
    await client.sendMail(emailParams)
      .then((resp)=>console.log('Email sent!'))
      .catch((error)=>console.log('An error occurred in sending email: ',error))
}
testEmail('SAMPLE COIN', 101, 'SAMPLE ADDRESS', 'SAMPLE ID', 'androgkp@outlook.com')