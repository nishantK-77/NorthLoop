const Router = require("express");
const request = require("request");
const defaultData = require("../../config/constants");

const getTimeSeries = Router();

getTimeSeries.route("/").get(async function (req, res) {
  try {
    let options = {
      method: "GET",
      url:
        "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-timeseries",
      qs: Object.keys(req.query).length
        ? req.query
        : defaultData.defaultQueryParams,
      headers: {
        "x-rapidapi-host":
          req.header("x-rapidapi-host") || defaultData.rapidapiHost,
        "x-rapidapi-key":
          req.header("x-rapidapi-key") || defaultData.rapidapiKey,
        useQueryString: "true",
      },
    };
    await request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      if (response.statusCode.toString().split("")[0] == 2) {
        let responseData =
          typeof response.body == "string"
            ? JSON.parse(response.body)
            : response.body;
        return res.status(response.statusCode).json({
          success: true,
          data: responseData,
        });
      }
      return res.status(response.statusCode).json({
        success: false,
        data: response.body,
      });
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, data: {}, message: "Something went wrong" });
  }
});

module.exports = getTimeSeries;
