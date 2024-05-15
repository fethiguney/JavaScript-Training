import {countries} from "../data/countries.js";

const txtSearch=document.getElementById("txtSearch");
const lstResult=document.getElementById("lstResult");
let timer = null;

txtSearch.addEventListener("input", (e)=>{

    if (timer) clearTimeout(timer);

    setTimeout(()=>{
        const filteredData= filterCountries(e.target.value);
        setResults(filteredData);
    }, 500)
   
});

const filterCountries= (value) => {

    if (!value) return [];
    
    const filteredData = countries.filter ((item)=>{
        const countryName=item.name.common.toLowerCase();
        return countryName.includes(value.toLowerCase());
    });
    
    return filteredData;
}

const setResults = (items) => {

    lstResult.innerHTML="";

    items.forEach((item) =>{
        const li= document.createElement("li");
        li.textContent=item.name.common;
        lstResult.appendChild(li);
    })

    if(items.length>0){
        lstResult.style.display="block";
    }else{
        lstResult.style.display="none";
    }
}