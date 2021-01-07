const {Weather} = require('./weather');
const { UI } = require('./Ul');
const { Store } = require('./Store');

const store = new Store();
const { city, contryCode } = store.getLocationData();
const ui = new UI();
const weather = new Weather(city, contryCode);
require('./index.css');

async function fetchWeather() {
   const response = await weather.getWeather();
   const data = await response.json();
   console.log(data);
   ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const contryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city, contryCode);
    store.getLocationData(city, contryCode);
    fetchWeather();
    e.preventDefault();
})

document.addEventListener('DOMContentLoaded', fetchWeather)
