/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
var input = document.querySelector('input');
var button = document.querySelector('button');
button.addEventListener('click', function () {
  axios("https://api.openweathermap.org/data/2.5/weather?q=".concat(encodeURI(input.value), "&appid=ec12a89e4e02bfa66ad0671d31ccd7cb&units=metric&lang=pt_br")).then(function (response) {
    return cityWeather(response.data);
  })["catch"](function (error) {
    return alert('Cidade Inválida!');
  });
});
addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    axios("https://api.openweathermap.org/data/2.5/weather?q=".concat(encodeURI(input.value), "&appid=ec12a89e4e02bfa66ad0671d31ccd7cb&units=metric&lang=pt_br")).then(function (response) {
      return cityWeather(response.data);
    })["catch"](function (error) {
      return alert('Cidade Inválida!');
    });
  }
});

var cityWeather = function cityWeather(response) {
  var displayTemperature = document.querySelector('.temperatura');
  var main = response.main,
      weather = response.weather;
  weatherImage(response);
  return displayTemperature.innerHTML = "<p> Cidade: ".concat(response.name, "</p> <p>Temperatura: ").concat(Math.floor(main.temp), "\xB0C</p> <p> Clima: ").concat(weather[0].description);
};

var weatherImage = function weatherImage(response) {
  var img = document.querySelector('img');
  var weather = response.weather;
  if (weather[0].description === 'algumas nuvens') img.src = '/img/danieledesantis-weather-icons-cloudy-3.svg';else if (weather[0].description === 'nublado') img.src = '/img/danieledesantis-weather-icons-cloudy.svg';else if (weather[0].description === 'céu limpo') img.src = '/img/danieledesantis-weather-icons-sunny.svg';else if (weather[0].description === 'nuvens dispersas') img.src = '/img/danieledesantis-weather-icons-cloudy-3.svg';else if (weather[0].description === 'chuva leve') img.src = '/img/danieledesantis-weather-icons-rainy.svg';
};
/******/ })()
;
//# sourceMappingURL=bundle.js.map