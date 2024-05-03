const router = require("express").Router();
const registrationController = require("../../controller/registrationController");
const loginController = require("../../controller/loginController");
const verifiLinkController = require("../../controller/verifiLinkController");
router.post("/registration", registrationController);
router.post("/login", loginController);
router.post("/verification", verifiLinkController);

module.exports = router;
