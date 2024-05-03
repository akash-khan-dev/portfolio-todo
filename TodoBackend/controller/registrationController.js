const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendMail");
const saltRounds = 12;
const registrationController = async (req, res, next) => {
  try {
    const { name, email, password, verifyEmail } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        status: "error",
        message: "please full all the fields",
      });
    }
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "email already exists" });
    }
    bcrypt.hash(password, saltRounds, function (err, hash) {
      const userData = new User({
        name: name,
        email: email,
        password: hash,
        verifyEmail: verifyEmail,
      });
      userData.save();
      jwt.sign({ email: email }, "shhhhh", function (err, token) {
        sendEmail(email, "verify", token, "verified your email");
      });
      return res.status(200).json({
        status: "success",
        data: {
          userData: userData,
          message: "Registration successful check Your Email",
        },
      });
    });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
module.exports = registrationController;
