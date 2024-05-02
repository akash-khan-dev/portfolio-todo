const CompleteTask = require("../models/completeTaskModel");
const createTaskController = async (req, res, next) => {
  try {
    const { title, description, userId } = req.body;

    const task = new CompleteTask({
      title: title,
      description: description,
      userId: userId,
    });
    task.save();
    return res.status(200).json({ status: "success", data: { task } });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};
module.exports = createTaskController;
