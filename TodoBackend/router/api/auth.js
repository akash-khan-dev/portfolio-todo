const router = require("express").Router();
const registrationController = require("../../controller/registrationController");
const loginController = require("../../controller/loginController");
router.post("/registration", registrationController);
router.post("/login", loginController);

module.exports = router;
