let express = require("express");
let bodyParser = require("body-parser");
let routes = require("./routes/");

const app = express();

app.use(bodyParser.json({ limit: "20mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "20mb",
    extended: false,
    parameterLimit: 20000,
  })
);

app.use("/", routes);

app.use(function (req, res, next) {
  const err = new Error("Not found");
  err.status = 404;
  next();
});

module.exports = app;
