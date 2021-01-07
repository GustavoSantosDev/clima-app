export class Store{

    constructor(){
        this.city;
        this.contryCode;
        this.defauldCity = 'Guaymas';
        this.defauldContry = 'mx';
    }


    getLocationData(city, contryCode){
        if (localStorage.getItem('city') === null) {
            this.city = this.defauldCity;
        }else{
            this.city = localStorage.getItem('city');
        }

        if (localStorage.getItem('contryCode') === null) {
            this.contryCode = this.defauldContry;
        }else{
            this.contryCode = localStorage.getItem('countryCode');
        }
        
        return{
            city: this.city,
            contryCode: this.contryCode
        }
        
    }

    setLocationData(city, contryCode){
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', contryCode);
    }

}

