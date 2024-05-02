const Task = require("../models/TaskModel");
const showTasksController = async (req, res, next) => {
  try {
    const allTask = await Task.find();
    return res.status(200).json({ status: "success", data: allTask });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
module.exports = showTasksController;
