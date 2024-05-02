const CompleteTask = require("../models/completeTaskModel");
const showCompleteTasksController = async (req, res, next) => {
  try {
    const allCompleteTask = await CompleteTask.find();
    return res.status(200).json({ status: "success", data: allCompleteTask });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
module.exports = showCompleteTasksController;
