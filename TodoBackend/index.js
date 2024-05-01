require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router/index");
const app = express();

//  middleware
app.use(express.json());
app.use(cors());
// respond with "hello world" when a GET request is made to the homepage
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
