const router = require("express").Router();
const registrationController = require("../../controller/registrationController");
router.get("/registration", registrationController);

module.exports = router;
