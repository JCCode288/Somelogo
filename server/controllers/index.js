const Errors = require("../helpers/Errors");
const Hash = require("../helpers/Hash");
const Token = require("../helpers/Token");
const { User, Product, Category, Image } = require("../models");

module.exports = class Controller {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new Errors(400, "email/password must be filled");
      }

      let user = User.findOne({ where: { email } });

      if (!user) {
        throw new Errors(401, "Invalid email/password");
      }

      let valid = Hash.verify(password, user.password);

      if (!valid) {
        throw new Errors(401, "Invalid email/password");
      }

      let access_token = Token.create({ id: user.id, email: user.email });

      res.status(200).json({ access_token, username: user.username });
    } catch (err) {
      next(err);
    }
  }

  static async register(req, res, next) {
    try {
      let { email, password, username, phoneNumber, address } = req.body;

      if (!email || !password) {
        throw new Errors(400, "email/password must be filled");
      }
      let [user, created] = User.findOrCreate({
        where: { email },
        defaults: {
          email,
          password,
          username,
          phoneNumber,
          address,
        },
      });

      if (!created) {
        throw new Errors(400, "you are already registered");
      }

      let access_token = Token.create({ id: user.id, email: user.email });

      res.status(201).json({ access_token, username: user.username });
    } catch (err) {
      next(err);
    }
  }

  static async googleLogin(req, res, next) {
    try {
      //google login here
    } catch (err) {
      next(err);
    }
  }

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
