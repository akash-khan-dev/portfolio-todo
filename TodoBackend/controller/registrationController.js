const registrationController = async (req, res, next) => {
  try {
    res.send("hello world");
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
module.exports = registrationController;
