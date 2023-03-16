const Errors = require("../helpers/Errors");
const { User, Product, Category, Image, sequelize } = require("../models");

module.exports = class ProductController {
  static async allProducts(req, res, next) {
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

  static async getProduct(req, res, next) {
    try {
      let productId = req.params.id;

      const product = await Product.findByPk(productId, {
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

      if (!product) {
        throw new Errors(404, "Product not found!");
      }

      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  }

  static async createProduct(req, res, next) {
    const t = await sequelize.transaction();
    let transaction = t;
    try {
      let { name, description, price, mainImg, categoryId, images } = req.body;
      let authorId = req.user.id;
      console.log(req.user);

      if (!name || !description || !price || !mainImg || !categoryId) {
        throw new Errors(400, "Required fields must be filled");
      }

      let category = await Category.findByPk(categoryId, { transaction });

      if (!category) {
        throw new Errors(404, "Category is not found");
      }

      let [product, created] = await Product.findOrCreate({
        where: {
          name,
          description,
          price,
          mainImg,
          categoryId,
          authorId,
        },
        transaction,
      });

      if (!created) {
        throw new Errors("400", "you already put this item");
      }

      t.commit();
      res.status(201).json(product);
    } catch (err) {
      t.rollback();
      next(err);
    }
  }

  static async editProduct(req, res, next) {
    const t = await sequelize.transaction();
    let transaction = t;
    try {
      let { name, description, price, mainImg, categoryId, images } = req.body;
      let productId = req.params.id;

      if (!name || !description || !price || !mainImg || !categoryId) {
        throw new Errors(400, "Required fields must be filled");
      }

      let product = await Product.findByPk(productId, { transaction });

      if (!product) {
        throw new Errors(404, "Category is not found");
      }

      let category = await Category.findByPk(categoryId, { transaction });

      if (!category) {
        throw new Errors(404, "Category is not found");
      }

      let edited = await product.update(
        {
          name,
          description,
          price,
          mainImg,
          categoryId,
          images,
        },
        { transaction }
      );

      await t.commit();
      res.status(200).json(edited);
    } catch (err) {
      await t.rollback();
      next(err);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const productId = req.params.id;
      const result = await sequelize.transaction(async (t) => {
        const product = await Product.findByPk(productId);

        if (!product) {
          throw new Errors(404, "Product not found");
        }

        await product.destroy();

        return { message: `${product.name} has been deleted` };
      });

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
};
