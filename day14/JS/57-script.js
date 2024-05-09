import {countries} from "../JS/countries.js";

const setOptions = ()=>{

    let options = "";

    for(let country of countries){
        // console.log(country.name.common);
        options += `<option class="text-success">${country.name.common}</option>`;

    }

    document.getElementById("countriesSelect").innerHTML = options;

}

setOptions();


