require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router/index");
const mongoDbConnection = require("./DbConnection/mongoConnect");
const app = express();

//  middleware
app.use(express.json());
app.use(cors());
// database
mongoDbConnection();

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
