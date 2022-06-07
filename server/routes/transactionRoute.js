const express = require("express");
const router = express.Router();
const Controller = require("../controllers/transactionController");
const authentication = require("../middlewares/authentication");

router.use(authentication);

router.get("/", Controller.fetchTransactions);

router.post("/", Controller.createTransaction);

router.get("/:id", Controller.fetchTransaction);

router.put("/:id", Controller.updateTransaction);

router.delete("/:id", Controller.deleteTransaction);

module.exports = router;
