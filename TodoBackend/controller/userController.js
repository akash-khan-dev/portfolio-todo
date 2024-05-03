const User = require("../models/userModel");
const userController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "user Not Found" });
    }
    return res.status(200).json({ status: "success", data: user });
  } catch (err) {
    return res.status(404).send({ status: "Not Found", message: err.message });
  }
};
module.exports = userController;
