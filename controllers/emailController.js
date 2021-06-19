const nodemailer = require('nodemailer')
const gmailConfig = require('../config/gmail.config').local;

const sendEmail = (email, subject, text) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: gmailConfig.email,
            pass: gmailConfig.password
        }
    });

    const mailOptions = {
        from: gmailConfig.email,
        to: 'calumramurray@gmail.com',
        subject: subject,
        text: text,
        replyTo: email,
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error)
        }
        console.log('Message sent: ' + info.response)
    })
}

exports.sendEmail = sendEmail;
