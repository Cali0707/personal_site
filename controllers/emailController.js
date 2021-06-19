const nodeoutlook = require('nodejs-nodemailer-outlook');
const emailConfig = require('../config/email.config.json')

const sendEmail = async (email, subject, text) => {
    nodeoutlook.sendEmail({
        auth: {
            user: emailConfig.email,
            pass: emailConfig.pass,
        },
        from: emailConfig.email,
        to: 'calumramurray@gmail.com',
        subject: subject,
        text: text,
        replyTo: email,

        onError: (e) => (e),
        onSuccess: (i) => (i)
    })

}

exports.sendEmail = sendEmail;
