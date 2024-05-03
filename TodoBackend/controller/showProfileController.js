const Profile = require("../models/profileModel");
const showProfileController = async (req, res, next) => {
  try {
    const profile = await Profile.find();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
module.exports = showProfileController;
