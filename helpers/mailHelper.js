import nodemailer from 'nodemailer';

const base_url = process.env.HOST;

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '961c274bedc37b',
    pass: 'ed52754e0fc97b',
  },
});

export default async function (first_name, email, token) {
  
  const verificationUrl = `${base_url}/api/v1/verify?token=${token}&email=${email}`;
  
  const message = {
    from: 'account@ifind.org',
    to: email,
    subject: 'Welcome to iFind! Account Verification',
    html: `
        <h3>Dear ${first_name }</h3>
        <p>Please verify your account by following this <a href="${verificationUrl}">link</a>.
        <p>If you cannot access the link, copy & paste this ${verificationUrl} URL in your browser.</p>
        <p>Best regards, <br/><br/> The iFind team </p>
        `,
  };

  await transport.sendMail(message, (err, info) => {
    if (err) return false;
    return true;
  });
}
