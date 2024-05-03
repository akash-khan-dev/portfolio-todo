const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const linkController = async (req, res, next) => {
  try {
    const { token } = req.body;
    const decoded = jwt.verify(token, "shhhhh");
    const findUser = await User.findOne({ email: decoded.email });
    console.log(findUser);

    if (!findUser.emailVerified) {
      await User.findOneAndUpdate(
        { email: decoded.email },
        { verifyEmail: true }
      );
      return res.status(200).json({
        status: "success",
        message: "Verified email",
      });
    } else {
      return res.status(400).json({
        status: "error",
        message: "please verify your email",
      });
    }
  } catch (e) {
    return res.status(400).json({
      status: "error",
      message: e.message,
    });
  }
};
module.exports = linkController;
