function renderWeeklyWeather(apiObj){
	let days = document.querySelectorAll(".day");
	let highTemp = document.querySelectorAll(".weeklyHighTemp");
	let lowTemp = document.querySelectorAll(".weeklyLowTemp");
	let forecast = document.querySelectorAll(".weeklyForecast");

	let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
	
	for(let i = 0; i < days.length; i++){
		days[i].textContent = week[new Date(apiObj[i].dt * 1000).getDay()] //we obtain the current day as a integer, and translated it to a day of the week
		highTemp[i].textContent = `${Math.round(apiObj[i].temp.max)}°`;
		lowTemp[i].textContent = `${Math.round(apiObj[i].temp.min)}°`;
		forecast[i].textContent = apiObj[i].weather[0].description;

	}
}



export default renderWeeklyWeather