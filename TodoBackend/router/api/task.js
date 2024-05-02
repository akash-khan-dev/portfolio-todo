const router = require("express").Router();
const createTaskController = require("../../controller/createTaskController");
const showTasksController = require("../../controller/showTasksController");

router.post("/create", createTaskController);
router.get("/showtasks", showTasksController);

module.exports = router;
