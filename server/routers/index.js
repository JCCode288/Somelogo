const Controller = require("../controllers");
const authentication = require("../middlewares/authentication");

const router = require("express").Router();

router.post("/login", Controller.login);

router.use(authentication);

router.post("/register", Controller.register);
router.get("/", Controller.home);

module.exports = router;
