"use strict";

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
        name: "Kentang Goreng",
        status: "Ready",
        CompanyId: "1",
      },
      {
        name: "Roti Lapis",
        status: "Not Ready",
        CompanyId: "1",
      },
      {
        name: "Roti Bakar",
        status: "Ready",
        CompanyId: "2",
      },
      {
        name: "Donat",
        status: "Ready",
        CompanyId: "3",
      },
    ];

    data.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Items", data);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Items", null);
  },
};
