const { Item, Company } = require("../models");

class Controller {
  static async fetchItems(req, res, next) {
    try {
      const items = await Item.findAll({
        include: Company,
      });

      res.status(200).json({
        items,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  static async fetchReadyItems(req, res, next) {
    try {
      const items = await Item.findAll({ where: { status: "Ready" } });

      res.status(200).json({
        items,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  static async fetchItem(req, res, next) {
    try {
      const { id } = req.params;
      const item = await Item.findByPk(id);

      res.status(200).json({
        item,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  static async createItem(req, res, next) {
    try {
      const { name, status, CompanyId } = req.body;

      const data = { name, status, CompanyId };

      const item = await Item.create(data);

      res.status(201).json({
        id: item.id,
        name: item.name,
        status: item.status,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  static async updateItem(req, res, next) {
    try {
      const { name, status, CompanyId } = req.body;
      const { id } = req.params;

      const data = { name, status, CompanyId };

      await Item.update(data, { where: { id } });

      res.status(200).json({
        message: "item has been updated",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  static async deleteItem(req, res, next) {
    try {
      const { id } = req.params;

      await Item.destroy({ where: { id } });

      res.status(200).json({
        message: "Item has been deleted",
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
