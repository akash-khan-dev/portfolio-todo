const router = require("express").Router();
const createTaskController = require("../../controller/createTaskController");
const completeTaskController = require("../../controller/completeTaskController");
const showTasksController = require("../../controller/showTasksController");
const showCompleteTasksController = require("../../controller/showCompleteTasksController");

router.post("/create", createTaskController);
router.post("/complete", completeTaskController);
router.get("/showtasks", showTasksController);
router.get("/showcompletetasks", showCompleteTasksController);

module.exports = router;
