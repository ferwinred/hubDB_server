const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./lib/config");
const routes = require("./routes");
const error = require("./middlewares/handleError");
const notFound = require("./middlewares/notFound");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: config.cors
  })
);
app.use("/api", routes);
app.use(notFound);
app.use(error);

module.exports = app;
