const ProfilePic = require("../models/profileModel");
const multer = require("multer");
const uploadProfileController = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "images");
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "-" + file.originalname);
      },
    });

    const upload = multer({ storage: storage }).single("avatar");

    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res
          .status(500)
          .json({ message: "Multer error occurred", message: err });
      } else if (err) {
        return res
          .status(500)
          .json({ message: "Unknown error occurred", message: err });
      }
      const imageName = req.file.path;
      const profile = new ProfilePic({
        image: imageName,
        userId: userId,
      });

      profile.save();

      return res.status(200).json({ status: "success", data: imageName });
    });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
module.exports = uploadProfileController;
