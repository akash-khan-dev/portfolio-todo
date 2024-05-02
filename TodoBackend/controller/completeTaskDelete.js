const CompleteTask = require("../models/completeTaskModel");
const completeTaskDelete = async (req, res, next) => {
  try {
    const id = req.params.id;

    await CompleteTask.findByIdAndDelete({ _id: id });
    return res.status(200).json({ status: "success", message: "data deleted" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
module.exports = completeTaskDelete;
