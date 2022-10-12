const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

module.exports = async function sendMail() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.HOST,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.HOST,
    to: process.env.HOST,
    subject: '메일 테스트',
    text: '테스트 텍스트',
  };
  const info = await transporter.sendMail(mailOptions);
  console.log(info);
};
