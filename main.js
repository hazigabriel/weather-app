(()=>{"use strict";const e=function(e,t,n,o,r,c,a,i,u){var d;document.querySelector(".cityName").textContent=`${e}, ${t}`,document.querySelector(".temperature").textContent=Math.round(n)+"°",document.querySelector(".currentForecast").textContent=`${o}(${r})`,document.querySelector(".temperatureFelt").textContent=Math.round(c)+"°",document.querySelector(".humidity").textContent=a+"%\t ",document.querySelector(".wind").textContent=`${Math.round(3.6*i)} km/h ${d=u,d>337.5||d<11?"N":d>292.5?"NW":d>247.5?"W":d>202.5?"SW":d>157.5?"S":d>122.5?"SE":d>67.5?"E":d>=11?"NE":void 0}`},t=function(e){let t=document.querySelectorAll(".day"),n=document.querySelectorAll(".weeklyHighTemp"),o=document.querySelectorAll(".weeklyLowTemp"),r=document.querySelectorAll(".weeklyForecast"),c=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];for(let a=0;a<t.length;a++)t[a].textContent=c[new Date(1e3*e[a].dt).getDay()],n[a].textContent=`${Math.round(e[a].temp.max)}°`,o[a].textContent=`${Math.round(e[a].temp.min)}°`,r[a].textContent=e[a].weather[0].description};document.querySelector(".getGeolocation").addEventListener("click",(function(){}));const n=function(n){fetch(`http://api.openweathermap.org/data/2.5/weather?q=${n}&appid=dd56feccf641467a3fb598d6e6f9ac6f&units=metric`,{mode:"cors"}).then((function(e){return e.json()})).then((function(n){e(n.name,n.sys.country,n.main.temp,n.weather[0].main,n.weather[0].description,n.main.feels_like,n.main.humidity,n.wind.speed,n.wind.deg),fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${n.coord.lat}&lon=${n.coord.lon}&exclude=minutely,hourly&appid=dd56feccf641467a3fb598d6e6f9ac6f&units=metric`,{mode:"cors"}).then((function(e){return e.json()})).then((function(o){console.log(n),e(n.name,n.sys.country,n.main.temp,n.weather[0].main,n.weather[0].description,n.main.feels_like,n.main.humidity,n.wind.speed,n.wind.deg),t(o.daily)}))}))};(function(){let e=document.querySelector(".cityNameInput");document.querySelector(".getCityName").addEventListener("click",(function(){""!=e.value&&(n(e.value),e.value="")}))})(),document.querySelector(".getGeolocation").addEventListener("click",(function(){navigator.geolocation.getCurrentPosition((function(n){!function(n,o){fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${n}&lon=${o}&exclude=minutely,hourly&appid=dd56feccf641467a3fb598d6e6f9ac6f&units=metric`,{mode:"cors"}).then((function(e){return e.json()})).then((function(n){console.log(n),fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${n.lat}&lon=${n.lon}&appid=dd56feccf641467a3fb598d6e6f9ac6f&units=metric`,{mode:"cors"}).then((function(e){return e.json()})).then((function(o){e(n.timezone.split("/").pop(),o.sys.country,n.current.temp,n.current.weather[0].main,n.current.weather[0].description,n.current.feels_like,n.current.humidity,n.current.wind_speed,n.current.wind_deg),t(n.daily)}))}))}(n.coords.latitude,n.coords.longitude)}))})),n("Bucharest"),window.fetchWeather=n})();