const emailController = require('../controllers/emailController');

const emailRoute = (app) => {
    app.post('/email', emailController.sendEmail);
}

exports.emailRoute = emailRoute;
