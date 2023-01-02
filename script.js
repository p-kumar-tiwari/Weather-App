// use your api key and method
const _0x47b3d0=_0x4b8d;(function(_0x3cc1a6,_0x15f7cc){const _0x58a4ba=_0x4b8d,_0x3b6401=_0x3cc1a6();while(!![]){try{const _0x4e6efa=-parseInt(_0x58a4ba(0xcd))/0x1*(-parseInt(_0x58a4ba(0xd0))/0x2)+parseInt(_0x58a4ba(0xd5))/0x3+parseInt(_0x58a4ba(0xcc))/0x4*(-parseInt(_0x58a4ba(0xd4))/0x5)+-parseInt(_0x58a4ba(0xcf))/0x6+-parseInt(_0x58a4ba(0xcb))/0x7*(parseInt(_0x58a4ba(0xce))/0x8)+parseInt(_0x58a4ba(0xd1))/0x9*(parseInt(_0x58a4ba(0xd3))/0xa)+parseInt(_0x58a4ba(0xd8))/0xb;if(_0x4e6efa===_0x15f7cc)break;else _0x3b6401['push'](_0x3b6401['shift']());}catch(_0x5ca4d2){_0x3b6401['push'](_0x3b6401['shift']());}}}(_0x59f0,0x72891));function _0x4b8d(_0x2748ff,_0x3b4e90){const _0x59f07e=_0x59f0();return _0x4b8d=function(_0x4b8d30,_0x629c5d){_0x4b8d30=_0x4b8d30-0xcb;let _0x5bfb8d=_0x59f07e[_0x4b8d30];return _0x5bfb8d;},_0x4b8d(_0x2748ff,_0x3b4e90);}const options={'method':_0x47b3d0(0xd2),'headers':{'X-RapidAPI-Key':_0x47b3d0(0xd6),'X-RapidAPI-Host':_0x47b3d0(0xd7)}};function _0x59f0(){const _0x44eec3=['GET','3657730smWLHA','51205yAhMQq','198231LEmUrg','2edaf1c362mshcc5ea68260448c0p147837jsnc633ca1ebda9','weather-by-api-ninjas.p.rapidapi.com','16707911PwmJov','7NjmtEc','296payKSu','3502cUDQkP','3662888jaMmev','5534148WeBeXM','166PtGmnD','18iUwZfe'];_0x59f0=function(){return _0x44eec3;};return _0x59f0();}
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
