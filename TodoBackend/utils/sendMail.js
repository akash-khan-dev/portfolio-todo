const nodemailer = require("nodemailer");

const sendEmail = async (email, path, token, subject) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.SEND_MEAIL,
      pass: process.env.SEND_MEAIL_PASSWORD,
    },
  });
  const info = await transporter.sendMail({
    from: "akash910971@gmail.com", // sender address
    to: email, // list of receivers
    subject: `${subject}`, // Subject line
    html: `<a href="http://localhost:5173/${path}/${token}">Click Here</a>`, // html body
  });
};
module.exports = sendEmail;
