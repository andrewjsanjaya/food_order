const express = require("express");
const router = express.Router();
const Controller = require("../controllers/reportController");
const authentication = require("../middlewares/authentication");

router.use(authentication);

router.get("/", Controller.fetchAllReport);

router.post("/user", Controller.fetchReport);

module.exports = router;
