const {Weather} = require('./weather');
const weather = new Weather('London', 'uk')
require('./index.css');

async function fetchWeather() {
   const response = await weather.getWeather();
   const data = await response.json();
   console.log(data);
}

document.addEventListener('DOMContentLoaded', fetchWeather)
