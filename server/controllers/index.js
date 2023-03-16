const { User, Product, Category, Image } = require("../models");

module.exports = class Controller {
  static async home(req, res, next) {
    try {
      const products = await Product.findAll({
        include: [
          {
            model: Category,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: User,
            as: "Author",
            attributes: {
              exclude: ["password", "createdAt", "updatedAt"],
            },
          },
          {
            model: Image,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }
};
