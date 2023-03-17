const CategoriesController = require("../controllers/CategoriesController");
const CustomersController = require("../controllers/CustomersController");
const ProductController = require("../controllers/ProductsController");

const customersRouter = require("express").Router();

customersRouter.get("/", ProductController.allProducts);
customersRouter.post("/login", CustomersController.login);
customersRouter.post("/register", CustomersController.register);
customersRouter.get("/categories", CategoriesController.getCategories);
customersRouter.get("/categories/:id", CategoriesController.getCategory);
customersRouter.get("/:id", ProductController.getProduct);

module.exports = customersRouter;
