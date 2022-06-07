const { Company } = require("../models");

class Controller {
  static async fetchCompanies(req, res, next) {
    try {
      const companies = await Company.findAll();

      res.status(200).json({
        companies,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  static async fetchCompany(req, res, next) {
    try {
      const { id } = req.params;
      const company = await Company.findByPk(id);

      res.status(200).json({
        company,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  static async createCompany(req, res, next) {
    try {
      const { name, address } = req.body;

      const data = { name, address };

      const company = await Company.create(data);

      res.status(201).json({
        id: company.id,
        name: company.name,
        address: company.address,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  static async updateCompany(req, res, next) {
    try {
      const { name, address } = req.body;
      const { id } = req.params;

      const data = { name, address };

      await Company.update(data, { where: { id } });

      res.status(200).json({
        message: "company has been updated",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  static async deleteCompany(req, res, next) {
    try {
      const { id } = req.params;

      await Company.destroy({ where: { id } });

      res.status(200).json({
        message: "Company has been deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
}

module.exports = Controller;
