const { Transaction, Report, sequelize } = require("../models");

class Controller {
  static async fetchTransactions(req, res, next) {
    try {
      const transactions = await Transaction.findAll();

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

      const OrderId = `ABC07062022-001`;

      const data = { ItemId, OrderId, tableNumber };

      const transaction = await Transaction.create(data, { transaction: t });

      const dataReport = { UserId: req.user.id, TransactionId: transaction.id };

      await Report.create(dataReport, { transaction: t });

      await t.commit();

      res.status(201).json({
        id: transaction.id,
        OrderId: transaction.name,
        tableName: transaction.status,
      });
    } catch (err) {
      await t.rollback();
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
