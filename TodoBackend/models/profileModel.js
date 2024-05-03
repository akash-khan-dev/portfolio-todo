const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UploadProfile = new Schema({
  image: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Profile", UploadProfile);
