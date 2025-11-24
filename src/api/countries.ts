import axios from "axios"

const BASE_URL = "https://restcountries.com"  //v3.1/all?fields=name,flags,population,region,capital


//https://restcountries.com/v3.1/all
//All countries
export function getAllCountries(){
    return axios.get(`${BASE_URL}/v3.1/all?fields=name,cca3,flags,population,region,capital,borders`)
   // https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population,capital,borders

}

//https://restcountries.com/v3.1/name/{name}
//http://localhost:5173/name?name=eritrea
export function getCountryByName(query:string) {
  return axios.get(`${BASE_URL}/v3.1/name/${query}`);
}

//https://restcountries.com/v3.1/alpha/{code}
//`https://restcountries.com/v3.1/alpha?codes=${codes}`
 export function getCountryByCode(codes:string){
    return axios.get(`https://restcountries.com/v3.1/alpha?codes=${codes}`)
 }
