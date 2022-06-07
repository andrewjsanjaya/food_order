"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let data = [
      {
        name: "ahmad",
        email: "ahmad@email.com",
        password: "12345",
      },
      {
        name: "dewi",
        email: "dewi@email.com",
        password: "12345",
      },
    ];

    data.forEach((el) => {
      el.password = bcrypt.hashSync(el.password, 5);
      el.createdAt = el.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Users", data);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Users", null);
  },
};
