const { Transaction, Report, Item, sequelize } = require("../models");
const { Op } = require("sequelize");

class Controller {
  static async fetchTransactions(req, res, next) {
    try {
      const transactions = await Transaction.findAll({
        include: Item,
        order: [["OrderId", "DESC"]],
      });

      res.status(200).json({
        transactions,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  static async fetchTransaction(req, res, next) {
    try {
      const { id } = req.params;
      const transaction = await Transaction.findByPk(id);

      res.status(200).json({
        transaction,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  static async createTransaction(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { ItemId, tableNumber } = req.body;

      const now = new Date();
      let date = now.getDate();
      let month = now.getMonth() + 1;
      const year = now.getFullYear();
      const today = new Date().setHours(0, 0, 0, 0);

      if (date < 10) {
        date = `0${date}`;
      }

      if (month < 10) {
        month = `0${month}`;
      }

      const latestTransaction = await Transaction.findAll({
        where: {
          createdAt: { [Op.gt]: today, [Op.lt]: now },
        },
      });

      let orderNumber = latestTransaction.length + 1;

      if (orderNumber < 10) {
        orderNumber = `00${orderNumber}`;
      } else if (orderNumber < 99) {
        orderNumber = `0${orderNumber}`;
      }

      let OrderId = `ABC${date}${month}${year}-${orderNumber}`;

      const data = { ItemId, OrderId, tableNumber };

      const transaction = await Transaction.create(data, { transaction: t });

      const dataReport = { UserId: req.user.id, TransactionId: transaction.id };

      await Report.create(dataReport, { transaction: t });

      await t.commit();

      res.status(201).json({
        latestTransaction,
        id: transaction.id,
        OrderId: transaction.name,
        tableName: transaction.status,
      });
    } catch (err) {
      await t.rollback();
      console.log(err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  static async updateTransaction(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { ItemId, OrderId, tableNumber } = req.body;
      const { id } = req.params;

      const data = { ItemId, OrderId, tableNumber };

      await Transaction.update(data, { where: { id } }, { transaction: t });

      await t.commit();

      res.status(200).json({
        message: "transaction has been updated",
      });
    } catch (err) {
      await t.rollback();
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  static async deleteTransaction(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { id } = req.params;

      await Transaction.destroy({ where: { id } }, { transaction: t });

      await t.commit();

      res.status(200).json({
        message: "Transaction has been deleted",
      });
    } catch (err) {
      console.log(err);
      await t.rollback();
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
}

module.exports = Controller;
