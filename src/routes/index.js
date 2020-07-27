const Router = require("express");
const yahooFinanceRoutes = require("./yahooFinance");

const routes = Router();

routes.use("/", yahooFinanceRoutes);

routes.get("/", function (req, res) {
  res.status(200).json({ message: "Server running" });
});

module.exports = routes;
