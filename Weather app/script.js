const Weather = document.querySelector(".weather")
const citys = document.querySelector(".city")
const temps = document.querySelector(".temp")
const humiditys = document.querySelector(".humidity");
const winds = document.querySelector(".wind");
const err = document.querySelector(".err");

const apiKey = "dbaa6c23a50199b9184cd8db94e2ed66";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        err.style.display = "block";
        Weather.style.display = "none";
    } else {
        var data = await response.json()

        citys.innerHTML = data.name;
        temps.innerHTML = Math.round(data.main.temp) + "°c";
        humiditys.innerHTML = data.main.humidity + "%";
        winds.innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png";

        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png";

        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png";

        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.png";

        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png";
        }

        Weather.style.display = "block";
        err.style.display = "none";
    }

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})

