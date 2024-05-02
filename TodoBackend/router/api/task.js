const router = require("express").Router();
const createTaskController = require("../../controller/createTaskController");
const completeTaskController = require("../../controller/completeTaskController");
const showTasksController = require("../../controller/showTasksController");

router.post("/create", createTaskController);
router.post("/complete", completeTaskController);
router.get("/showtasks", showTasksController);

module.exports = router;
