"use strict";

const Hash = require("../helpers/Hash");

/** @type {import('sequelize-cli').Migration} */
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
    const db = require("../../data/data.json");
    const users = db.users.map((el) => {
      el.password = Hash.create(el.password);
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });
    const categories = db.categories.map((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });
    const products = db.products.map((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });

    await queryInterface.bulkInsert("Users", users);
    await queryInterface.bulkInsert("Categories", categories);
    await queryInterface.bulkInsert("Products", products);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null);
    await queryInterface.bulkDelete("Categories", null);
    await queryInterface.bulkDelete("Products", null);
  },
};
