# NorthLoop

sudo npm i
npm run dev


curl --location --request GET 'localhost:8080/trendingTickers/get'

curl --location --request GET 'localhost:8080/timeSeries/get'

Optionally pass these in request headers, if not it will pick default host and key from src/config/constants 

"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
"x-rapidapi-key": "8f5dfe63cemsh98c07cd1dfde1c1p147598jsnea555c4d3d71",
"useQueryString": true,



Optionally pass these in query params, if not it will pick default data from src/config/constants 
	
"region": "US",
"lang": "en-US",
"symbol": "IBM",
"period2": "1571590800",
"period1": "493578000"
