const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log(input.value);
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input.value)}&appid=ec12a89e4e02bfa66ad0671d31ccd7cb&units=metric&lang=pt_br`)
.then(response => cityWeather(response.data))
.catch(error => alert('Cidade Inválida!'))
})


const cityWeather = response => {
const displayTemperature = document.querySelector('.temperatura');
const img = document.querySelector('img');
const {main, weather} = response;

if(weather[0].description === 'algumas nuvens') img.src = '/img/danieledesantis-weather-icons-cloudy-3.svg'

else if(weather[0].description === 'nublado') img.src = '/img/danieledesantis-weather-icons-cloudy.svg'

else if(weather[0].description === 'céu limpo') img.src  = '/img/danieledesantis-weather-icons-sunny.svg'

else if(weather[0].description === 'nuvens dispersas') img.src = '/img/danieledesantis-weather-icons-cloudy-3.svg'

else img.src = 'danieledesantis-weather-icons-rainy-2'


return displayTemperature.innerHTML = `<p> Cidade: ${response.name}</p> <p>Temperatura: ${Math.floor(main.temp)}°C</p> <p> Clima: ${weather[0].description}`
}




