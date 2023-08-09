const API_KEY = "d0efd2101136a301f6fcd51d83394e6d"
const DEFAUT_VALUE = "__"
const search = document.getElementById("search")
const searchinfo = document.getElementById("search").value
const name = document.querySelector(".name")
const temperature = document.querySelector(".temp")
const visibility = document.querySelector(".visibility")
const wind = document.querySelector(".wind")
const gust = document.querySelector(".gust")
const humidity = document.querySelector(".humidity")
const sunrise = document.querySelector(".sunrise")
const sunset = document.querySelector(".sunset")



search.addEventListener('change',(event) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=ẹn&units=metric`)
    .then(response => response.json())
    .then((data) => {
        name.innerHTML = data.name
        temperature.innerHTML = data.main.temp + "°C"
        visibility.innerHTML = data.visibility 
        wind.innerHTML = data.wind.speed + " km/h"
        gust.innerHTML = data.wind.gust
        humidity.innerHTML = data.main.humidity + " %"
        sunrise.innerHTML = data.sys.sunrise
        sunset.innerHTML = data.sys.sunset
    })

})