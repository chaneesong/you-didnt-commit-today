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
  try {
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: process.env.SUBJECT,
      html: mailBody,
    };
    const mailInfo = await transporter.sendMail(mailOptions);

    return mailInfo;
  } catch (error) {
    console.error(error);
  }
};
