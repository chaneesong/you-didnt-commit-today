const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.FROM_EMAIL_PASSWORD,
  },
});

module.exports = async (mailBody) => {
  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: '오늘을 되돌아보시길 바랍니다.',
    html: mailBody,
  };
  const mailInfo = await transporter.sendMail(mailOptions);

  return mailInfo;
};
