const router = require("express").Router();
const apiRoute = require("./api");
const API = process.env.API;

router.use(API, apiRoute);

module.exports = router;
