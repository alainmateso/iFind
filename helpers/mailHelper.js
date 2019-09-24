import nodemailer from 'nodemailer';

const base_url = process.env.HOST;

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

export default function (email, token) {
  const message = {
    from: 'account@ifind.org',
    to: email,
    subject: 'Account Verification',
    text: `Please verify your account by following the link ${base_url}/verify?token=${token}&email=${email}`,
  };

  transport.sendMail(message, (err, info) => {
    if (err) return false;
    return true;
  });
}
