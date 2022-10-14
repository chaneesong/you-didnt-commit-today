const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.HOST,
    pass: process.env.PASSWORD,
  },
});

module.exports = async (mailBody) => {
  const mailOptions = {
    from: process.env.HOST,
    to: process.env.HOST,
    subject: '오늘을 되돌아보시길 바랍니다.',
    html: mailBody,
  };
  const mailInfo = await transporter.sendMail(mailOptions);

  return mailInfo;
};
