const Task = require("../models/TaskModel");
const createTaskController = async (req, res, next) => {
  try {
    const { title, description, userId } = req.body;

    if (!title || !description) {
      return res.status(404).json({
        status: "error",
        message: "title and description are required",
      });
    }
    const task = new Task({
      title: title,
      description: description,
      userId: userId,
    });
    task.save();
    console.log(userId);
    return res.status(200).json({ status: "success", data: { task } });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};
module.exports = createTaskController;
