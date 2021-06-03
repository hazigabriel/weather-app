import fetchWeather from './fetchCurrentData.js';
import fetchWeeklyWeather from './fetchWeeklyData.js';
 

function cityName(){
	let input = document.querySelector(".cityNameInput");
	document.querySelector(".getCityName").addEventListener("click", function(){
		
	 	if(input.value == ""){
	 		return
	 	} else {
 
	 		fetchWeather(input.value);
	 		input.value = ""
	 	}
 
		 

	});
	 

}

function getCoords(){
	document.querySelector(".getGeolocation").addEventListener("click", function() {
  		navigator.geolocation.getCurrentPosition(function(position) {
    	let lat = position.coords.latitude;
    	let long = position.coords.longitude;
    	fetchWeeklyWeather(lat, long);
  });
});
}



cityName()
getCoords()
 
fetchWeather("Bucharest")
window.fetchWeather = fetchWeather

export default cityName
