const Router = require("express");
const getTimeSeries = require("./getTimeSeries");
const getTrendingTickers = require("./getTrendingTickers");

let financeRoutes = Router();

financeRoutes.use("/timeSeries/get", getTimeSeries);
financeRoutes.use("/trendingTickers/get", getTrendingTickers);

module.exports = financeRoutes;
