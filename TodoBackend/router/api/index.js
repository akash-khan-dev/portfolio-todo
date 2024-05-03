const router = require("express").Router();
const authRoute = require("./auth");
const taskRoute = require("./task");
const userRoute = require("./user");
const profileRoute = require("./profile");

router.use("/auth", authRoute);
router.use("/task", taskRoute);
router.use("/user", userRoute);
router.use("/profile", profileRoute);

module.exports = router;
