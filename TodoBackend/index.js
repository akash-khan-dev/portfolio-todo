require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router/index");
const mongoConfig = require("./DbConnection/mongoConfig");
const path = require("path");
const app = express();

//  middleware
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "images")));
// database
mongoConfig();

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
