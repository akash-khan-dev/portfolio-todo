const router = require("express").Router();

router.get("/registration", (req, res) => {
  res.send("hello world");
});

module.exports = router;
