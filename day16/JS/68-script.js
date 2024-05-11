import {countries} from "../JS/countries.js";

const setOptions = ()=>{

    let options = "";

    for(let country of countries){
        // console.log(country.name.common);
        options += `<option value="${country.ccn3}">${country.name.common}</option>`;

    }

    document.getElementById("countriesSelect").innerHTML = options;

}

setOptions();

const getCountry =(countryCode)=>{
    
    let filteredCountry = countries.filter((country) => country.ccn3 == countryCode);
    return filteredCountry[0];
}


const fillTable = (country) => {

    let capitalCity =country.capital.join(" - ");
    let currencies=Object.keys(country.currencies).join(" - ");
    let languages=Object.values(country.languages).join(" - ");
    let area=country.area;
    let mapLink=`<a href="https://www.google.com/maps/?q=${country.latlng.toString()}" target="_blank">Map</a>`;

    document.querySelector("#countriesTable tr:nth-child(1) td").innerHTML = capitalCity;
    document.querySelector("#countriesTable tr:nth-child(2) td").innerHTML = currencies;
    document.querySelector("#countriesTable tr:nth-child(3) td").innerHTML = languages;
    document.querySelector("#countriesTable tr:nth-child(4) td").innerHTML = area;
    document.querySelector("#countriesTable tr:nth-child(5) td").innerHTML = mapLink;
}

document.querySelector("#countriesSelect").onchange = ()=>{
    let countryCode =event.target.value;
    let country = getCountry(countryCode);
    fillTable(country);
}



