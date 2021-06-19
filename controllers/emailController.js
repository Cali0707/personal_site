const nodemailer = require('nodemailer')
const gmailConfigs = require('../config/gmail.config');
let gmailConfig;
if (process.env.MODE === 'production'){
    gmailConfig = gmailConfigs.production;
} else {
    gmailConfig = gmailConfigs.local
}

const sendEmail = (req, res) => {
    const {subject, message, email, name} = req.body;
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
        text: message + `\n\nFrom: ${name}`,
        replyTo: email,
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.status(500).send({
                message: 'There was an error'
            })
        }
        res.status(300).send({
            message: "Email sent successfully!"
        })
    })
}

exports.sendEmail = sendEmail;
