function renderWeeklyWeather(apiObj){
	let days = document.querySelectorAll(".day");
	let highTemp = document.querySelectorAll(".weeklyHighTemp");
	let lowTemp = document.querySelectorAll(".weeklyLowTemp");
	let forecast = document.querySelectorAll(".weeklyForecast");

	let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
	//week[new Date(1622800800 * 1000).getDay() - 1]

	//new Date(1622800800 * 1000).getDay()
				//use unix time to get day, and using getDay()
				//we retreive the day of the week, from the week array
	for(let i = 0; i < days.length; i++){
		console.log(apiObj[i])

	}
}



export default renderWeeklyWeather