const { Item } = require("../models");

class Controller {
  static async fetchReport(req, res, next) {
    try {
      const report = await Item.findAll({ where: { UserId: req.user.id } });

      res.status(200).json({
        report,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  static async fetchDailyReport(req, res, next) {
    try {
      const report = await Item.findAll({ where: { UserId: req.user.id } });

      res.status(200).json({
        report,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  static async fetchWeeklyReport(req, res, next) {
    try {
      const report = await Item.findAll({ where: { UserId: req.user.id } });

      res.status(200).json({
        report,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  static async fetchMonthlyReport(req, res, next) {
    try {
      const report = await Item.findAll({ where: { UserId: req.user.id } });

      res.status(200).json({
        report,
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
