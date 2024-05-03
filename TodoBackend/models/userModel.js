const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verifyEmail: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("User", userModel);
