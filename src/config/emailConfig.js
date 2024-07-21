const nodeMailer=require('nodemailer');
const {EMAIL_USER, EMAIL_PASS}= require('./serverConfig');

const sender = nodeMailer.createTransport({
    service:'Gmail',
    auth:{
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    }
});

module.exports=sender;