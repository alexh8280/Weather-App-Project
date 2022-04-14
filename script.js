const showWeather=document.getElementById('show-weather')
const zip=document.getElementById('zipcode')
let name=document.getElementById('city-name')
let latitude=document.getElementById('lat')
let longitude=document.getElementById('lon')
let weatherMain=document.getElementById('weather-main')
let weatherDesc=document.getElementById('weather-desc')
let windSpeed=document.getElementById('wind-speed')
let windDegree=document.getElementById('wind-degree')
let current=document.getElementById('temp-current')
let minimum=document.getElementById('temp-min')
let maximum=document.getElementById('temp-max')
let humid=document.getElementById('humidity')




showWeather.addEventListener('click',()=>generateweather())

function generateweather(){

const zipcode = zip.value

fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=d390714454a7b212341c0dd0961b0150`)
.then ((res) => res.json())
.then ((data) => {

name.innerHTML = data.name
latitude.innerHTML = data.coord.lat
longitude.innerHTML = data.coord.lon
weatherMain.innerHTML = data.weather[0].main
weatherDesc.innerHTML = data.weather[0].description
windSpeed.innerHTML = data.wind.speed
windDegree.innerHTML = data.wind.deg
current.innerHTML = data.main.temp
minimum.innerHTML = data.main.temp_min
maximum.innerHTML = data.main.temp_max
humid.innerHTML = data.main.humidity

} )
}
