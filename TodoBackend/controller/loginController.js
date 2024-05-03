const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        status: "error",
        message: "Incorrect your email or password",
      });
    }
    if (user.verifyEmail == false) {
      return res
        .status(403)
        .json({ status: "error", message: "you are not verified user" });
    }
    await bcrypt.compare(password, user.password).then(function (result) {
      if (!result) {
        return res.status(400).json({
          status: "error",
          message: "Incorrect your email or password",
        });
      }
      return res.status(200).json({
        status: "success",
        message: "Login successful",
        user: user,
      });
    });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
module.exports = loginController;
