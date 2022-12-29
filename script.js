const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2edaf1c362mshcc5ea68260448c0p147837jsnc633ca1ebda9',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityname.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            cloud_pct.innerHTML = response.cloud_pct
            console.log(response)
        })
        .catch(err => console.error(err))
};
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

function ballia() {
    getWeather("ballia")
}

function prayag() {
    getWeather("allahabad")
}

function london() {
    getWeather("london")
}

getWeather("delhi");