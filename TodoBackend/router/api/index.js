const router = require("express").Router();
const authRoute = require("./auth");
const taskRoute = require(".//task");

router.use("/auth", authRoute);
router.use("/task", taskRoute);

module.exports = router;
