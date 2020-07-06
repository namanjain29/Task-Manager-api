const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
    to: 'namanjain2912@gmail.com',
    from: 'namanjain2912@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
};

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'namanjain2912@gmail.com',
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'namanjain2912@gmail.com',
        subject: "Sorry to see you go",
        text: `Goodbye, ${name}. Hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
} 