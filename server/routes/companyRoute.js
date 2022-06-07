const express = require("express");
const router = express.Router();
const Controller = require("../controllers/companyController");

router.get("/", Controller.fetchCompanies);

router.post("/", Controller.createCompany);

router.get("/:id", Controller.fetchCompany);

router.put("/:id", Controller.updateCompany);

router.delete("/:id", Controller.deleteCompany);

module.exports = router;
