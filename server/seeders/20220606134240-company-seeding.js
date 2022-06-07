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
        name: "Company A",
        address: "Jl. Bunga Anggrek",
      },
      {
        name: "Company B",
        address: "Jl. Bunga Mawar",
      },
      {
        name: "Company C",
        address: "Jl. Bunga Melati",
      },
    ];

    data.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Companies", data);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Companies", null);
  },
};
