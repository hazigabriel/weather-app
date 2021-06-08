import cityName from './index.js'
import renderCurrentWeather from "./renderCurrentWeather.js"
import renderWeeklyWeather from "./renderWeeklyWeather.js"
  
 

const fetchWeather = function(city, system){


 	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dd56feccf641467a3fb598d6e6f9ac6f&units=${system}`)
 		.then(function(response){
 			return response.json()
 		})
 		.then(function(response){
 		
 			renderCurrentWeather(response.name, response.sys.country,response.main.temp, response.weather[0].main, response.weather[0].description, response.main.feels_like, response.main.humidity, response.wind.speed, response.wind.deg)
 			
 			fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.coord.lat}&lon=${response.coord.lon}&exclude=minutely,hourly&appid=dd56feccf641467a3fb598d6e6f9ac6f&units=${system}`)
 				.then(function(nestedResponse){
 					return nestedResponse.json()
 				})
 				.then(function(nestedResponse){
 					renderCurrentWeather(response.name, response.sys.country,response.main.temp, response.weather[0].main, response.weather[0].description, response.main.feels_like, response.main.humidity, response.wind.speed, response.wind.deg)
 					renderWeeklyWeather(nestedResponse.daily)
 					 
 				})
 			
 		})
 
}


export default fetchWeather