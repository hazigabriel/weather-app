function renderCurrentWeather(cityName, country, temperature, forecast, forecastDescpr, temperatureFelt, humidity, windSpeed, windDirection){
	document.querySelector(".cityName").textContent = `${cityName}, ${country}`;
	document.querySelector(".temperature").textContent = Math.round(temperature)+ "°";
	document.querySelector(".currentForecast").textContent = `${forecast}(${forecastDescpr})` ;
	document.querySelector(".temperatureFelt").textContent = Math.round(temperatureFelt) + "°";
	document.querySelector(".humidity").textContent = humidity + "%	 ";
	document.querySelector(".wind").textContent = `${Math.round(windSpeed * 3.6)} km/h ${getWindDirection(windDirection)}`;
}

function getWindDirection(deg){
	if(deg==0) return "";
    if (deg>337.5) return 'N';
    if (deg>292.5) return 'NW';
    if(deg>247.5) return 'W';
    if(deg>202.5) return 'SW';
    if(deg>157.5) return 'S';
    if(deg>122.5) return 'SE';
    if(deg>67.5) return 'E';
    if(deg>22.5){return 'NE';}
 
}



export default renderCurrentWeather