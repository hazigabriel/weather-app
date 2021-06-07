import fetchWeather from './fetchCurrentData.js';
import fetchWeeklyWeather from './fetchWeeklyData.js';


let selectedSystem = "Metric"
let lastWeatherLocation = ['Bucharest']; 
function changeSystem() {
	let system = document.querySelectorAll(".system");
	document.querySelector(".switch").addEventListener("click", function(e){
		if(e.target.classList.contains("system")) {
			system[0].classList = "system";
			system[1].classList = "system"
			e.target.classList = "system active";

			if(e.target.textContent == "Celsius") {
				selectedSystem = "metric";
			} else {
				selectedSystem = "imperial";
			}
			renderSystemChange()

		}
	 
	})
}
function renderSystemChange(){
	if(lastWeatherLocation.length < 2) {
		fetchWeather(lastWeatherLocation, selectedSystem)
	} else {
		fetchWeeklyWeather(lastWeatherLocation[0], lastWeatherLocation[1], selectedSystem);
	}
}

function cityName(){
	let input = document.querySelector(".cityNameInput");
	document.querySelector(".getCityName").addEventListener("click", function(){
		
	 	if(input.value == ""){
	 		return
	 	} else {
	 		fetchWeather(input.value, selectedSystem);
	 		lastWeatherLocation = [input.value];
	 		input.value = ""
	 	}
 
		 

	});
	 

}
 
function getCoords(){
	document.querySelector(".getGeolocation").addEventListener("click", function() {
  		navigator.geolocation.getCurrentPosition(function(position) {
    	let lat = position.coords.latitude;
    	let long = position.coords.longitude;
    	lastWeatherLocation = [lat, long];
    	fetchWeeklyWeather(lat, long, selectedSystem);
    	//alert(selectedSystem)
  });
});
}



cityName()
getCoords()
changeSystem() 
fetchWeather("Bucharest", selectedSystem)
window.fetchWeather = fetchWeather

export default cityName
