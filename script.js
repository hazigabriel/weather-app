 const weatherIn = function(city){
 	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dd56feccf641467a3fb598d6e6f9ac6f`, {mode: 'cors'})
 		.then(function(response){
 			return response.json()
 		})
 		.then(function(response){
 			console.log(response)
 		})
 }