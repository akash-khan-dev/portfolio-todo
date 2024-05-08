const router = require("express").Router();
const uploadProfile = require("../../controller/uploadProfileController");
const showProfile = require("../../controller/showProfileController");

router.post("/upload", uploadProfile);
router.get("/show", showProfile);

module.exports = router;
