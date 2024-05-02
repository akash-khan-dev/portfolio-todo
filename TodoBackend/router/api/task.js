const router = require("express").Router();
const createTaskController = require("../../controller/createTaskController");
const completeTaskController = require("../../controller/completeTaskController");
const showTasksController = require("../../controller/showTasksController");
const showCompleteTasksController = require("../../controller/showCompleteTasksController");
const deleteTask = require("../../controller/deleteTask");
const completeTaskDelete = require("../../controller/completeTaskDelete");

router.post("/create", createTaskController);
router.post("/complete", completeTaskController);
router.get("/showtasks", showTasksController);
router.get("/showcompletetasks", showCompleteTasksController);
router.delete("/taskdelete/:id", deleteTask);
router.delete("/completetaskdelte/:id", completeTaskDelete);

module.exports = router;
