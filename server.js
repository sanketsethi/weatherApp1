const express = require('express')
const app = express()
var request = require('request');

const port = process.env.VCAP_APP_PORT || 5000

app.get('/hello', (req, res) => {
	console.log("how are you!")
	console.log(req.query.user)
	res.send("hellooooooooooo"+' '+req.query.user)
})

app.get('/weather', (req, res)=>{
	var options = {
	  'method': 'GET',
	  'url': 'https://api.openweathermap.org/data/2.5/weather?q=Noida&appid=b3f703389584f28b8e5874b0bd633fab&units=metric',
	  'headers': {
	  }
	};

	request(options, function (error, response) {
	  if (error) throw new Error(error);
	  console.log(response.body);
	});
})

app.listen(port, () => {
	console.log('Server is running on port 5000')
})

console.log("welcome Sanket");

