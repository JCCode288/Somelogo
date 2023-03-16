if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const router = require("./routers");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./"));
app.use("/adm", router);
app.use("/", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`listening to http://localhost:${PORT}`);
});

module.exports = app;
