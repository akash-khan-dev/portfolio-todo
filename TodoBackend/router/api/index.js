const router = require("express").Router();
const authRoute = require("./auth");
const taskRoute = require("./task");
const userRoute = require("./user");

router.use("/auth", authRoute);
router.use("/task", taskRoute);
router.use("/user", userRoute);

module.exports = router;
