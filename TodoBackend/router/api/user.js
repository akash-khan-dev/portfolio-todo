const router = require("express").Router();
const userController = require("../../controller/userController");

router.get("/:id", userController);

module.exports = router;
