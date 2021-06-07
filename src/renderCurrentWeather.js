let selectedSystem = function(){
	if(document.querySelector(".active").textContent == "Celsius"){
		return "metric"
	} else {
		return "imperial"
	}
}


function renderCurrentWeather(cityName, country, temperature, forecast, forecastDescpr, temperatureFelt, humidity, windSpeed, windDirection){
	function convertWindSpeed(system){
 

	if(selectedSystem() == "metric"){
		return `${Math.round(windSpeed * 3.6)} km/h ${getWindDirection(windDirection)}`;
	} else {

		return `${Math.round(windSpeed)} mph ${getWindDirection(windDirection)}`;

	}
}
	document.querySelector(".cityName").textContent = `${cityName}, ${country}`;
	document.querySelector(".temperature").textContent = Math.round(temperature)+ "°";
	document.querySelector(".currentForecast").textContent = `${forecast}(${forecastDescpr})` ;
	document.querySelector(".temperatureFelt").textContent = Math.round(temperatureFelt) + "°";
	document.querySelector(".humidity").textContent = humidity + "%	 ";
	document.querySelector(".wind").textContent =  convertWindSpeed(selectedSystem());
	
	
 

	
}

function getWindDirection(deg){
    if (deg>337.5 || deg < 11) return 'N';
    if (deg>292.5) return 'NW';
    if(deg>247.5) return 'W';
    if(deg>202.5) return 'SW';
    if(deg>157.5) return 'S';
    if(deg>122.5) return 'SE';
    if(deg>67.5) return 'E';
    if(deg>=11){return 'NE';
    
	}
 
}



export default renderCurrentWeather