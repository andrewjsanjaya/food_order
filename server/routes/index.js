const express = require("express");
const router = express.Router();
const User = require("./userRoute");
const Company = require("./companyRoute");
const Item = require("./itemRoute");
const Transaction = require("./transactionRoute");
const Report = require("./reportRoute");

router.use("/users", User);

router.use("/companies", Company);

router.use("/items", Item);

router.use("/transactions", Transaction);

router.use("/reports", Report);

module.exports = router;
