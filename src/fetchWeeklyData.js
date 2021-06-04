import renderCurrentWeather from "./renderCurrentWeather.js"
import renderWeeklyWeather from "./renderWeeklyWeather.js"
 
function fetchWeeklyWeather(lat, long){

	
	fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=dd56feccf641467a3fb598d6e6f9ac6f&units=metric`, {mode: 'cors'})
 		.then(function(response){
 			return response.json()
 		})
 		.then(function(response){
 			console.log(response);


 			let cityName;
 			 
 			fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${response.lat}&lon=${response.lon}&appid=dd56feccf641467a3fb598d6e6f9ac6f&units=metric`, {mode: 'cors'})
	 			.then(function(nestedResponse){
	 				return nestedResponse.json()
	 		})
	 			.then(function(nestedResponse){	

	 				renderCurrentWeather(response.timezone.split("/").pop(), nestedResponse.sys.country, response.current.temp, response.current.weather[0].main, response.current.weather[0].description, response.current.feels_like, response.current.humidity, response.current.wind_speed, response.current.wind_deg )
	 				renderWeeklyWeather(response.daily);

	 		})

	 		 
	 		//alert(cityName)
 			//renderCurrentWeather(response.timezone.split("/").pop(), "", response.current.temp, response.current.weather[0].main, response.current.weather[0].description, response.current.feels_like, response.current.humidity, response.current.wind_speed, response.current.wind_deg )
 
 		})
 
}




export default fetchWeeklyWeather