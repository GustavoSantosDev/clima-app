export class Weather{

    constructor(city, contryCode){
        this.apikey = '5c15731ccfd5cc5ed2313b37c834a856'
        this.city = city;
        this.contryCode = contryCode;

    }

async getWeather(){
        const  URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.contryCode}&appid=${this.apikey}&units=metric`;
        const data = await fetch(URI);
        return data;
    }
}