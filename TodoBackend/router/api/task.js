const router = require("express").Router();
const createTaskController = require("../../controller/createTaskController");

router.post("/create", createTaskController);

module.exports = router;
