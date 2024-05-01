const mongoose = require("mongoose");

const mongoDb = () => {
  const db = process.env.DATABASE;
  mongoose
    .connect(db)
    .then(() => {
      console.log("database connection successful");
    })
    .catch((err) => console.log("database Error"));
};
module.exports = mongoDb;
