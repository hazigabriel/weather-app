import fetchWeather from './fetchData.js';
 

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
cityName()
 
fetchWeather("Bucharest")
window.fetchWeather = fetchWeather

export default cityName
