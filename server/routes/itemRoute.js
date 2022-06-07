const express = require("express");
const router = express.Router();
const Controller = require("../controllers/ItemController");

router.get("/", Controller.fetchItems);

router.post("/", Controller.createItem);

router.get("/ready", Controller.fetchReadyItems);

router.get("/:id", Controller.fetchItem);

router.put("/:id", Controller.updateItem);

router.delete("/:id", Controller.deleteItem);

module.exports = router;
