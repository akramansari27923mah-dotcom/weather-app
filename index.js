
const weatherApi = 'F56ACAAB02798E912FEF95D839C96685';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
let inp = document.querySelector('input')
let btn = document.querySelector('button')
let para = document.querySelector('.para');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${weatherApi}`);
    var data = await response.json();

    let weatheCheck = data.weather[0].main
    let weatherImage = document.querySelector('.weather-icon')

   
    if (weatheCheck == 'Haze' || weatheCheck == 'Mist' || weatheCheck == 'Fog') {
        weatherImage.src = 'image/haze.png'
    } else if (weatheCheck == 'Clouds') {
        weatherImage.src = 'image/cloudy.png'
    } else if (weatheCheck == 'Rain') {
        weatherImage.src = 'image/Rain.png'
    } else if (weatheCheck == 'Smoke' || weatheCheck == 'Dust' || weatheCheck == 'Sand') {
        weatherImage.src = 'image/smock.png'
    } else if (weatheCheck == 'Wind') {
        weatherImage.src = 'image/Wind.png'
    } else if (weatheCheck == 'Thunderstorm') {
        weatherImage.src = 'image/Thunderstorm.jpeg'
    } else if (weatheCheck == 'Drizzle') {
        weatherImage.src = 'image/Drizzle.png'
    } else if (weatheCheck == 'Extreme') {
        weatherImage.src = 'image/Extreme(2).png'
    } else if (weatheCheck == 'Clear') {
        weatherImage.src = 'image/clear.png'
    }

    let cityName = data.name;
    let cityTemp = Math.round(data.main.temp);
    if (cityTemp <= 50) {
        cityTemp = cityTemp - 1;
    }
    let humidity = data.main.humidity
    let wind = data.wind.speed



    document.querySelector('.temp').innerHTML = cityTemp + '°c';
    document.querySelector('.city').innerHTML = cityName;
    document.querySelector('.humidity').innerHTML = humidity + '%';
    document.querySelector('.wind').innerHTML = wind + ' km/h'


}

btn.addEventListener('click', () => {
    if (inp.value == '') {
        para.style.display = 'initial'
    }else{
        para.style.display = 'none'      
    }
})
btn.addEventListener('click', () => {
    checkWeather(inp.value)
    inp.value = ''
})


window.addEventListener('keydown', (dets) => {
    if (dets.key === 'Enter') {
       if (inp.value == '') {
        para.style.display = 'initial'
    }else{
        para.style.display = 'none'      
    }
    }
})
window.addEventListener('keydown', (dets) => {
    if (dets.key === 'Enter') {
        checkWeather(inp.value)
        inp.value = ''
    }
})