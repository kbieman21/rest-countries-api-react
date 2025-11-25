import axios from "axios"
import type { Country } from "./types"

const BASE_URL = "https://restcountries.com"  //v3.1/all?fields=name,flags,population,region,capital


//https://restcountries.com/v3.1/all
//All countries
export function getAllCountries(){
    return axios.get(`${BASE_URL}/v3.1/all?fields=name,cca3,flags,population,region,capital,borders`)

}


//https://restcountries.com/v3.1/alpha/{code}
//`https://restcountries.com/v3.1/alpha?codes=${codes}`
 export function getCountryByCode(code:string){
    return axios.get<Country[]>(`${BASE_URL}/v3.1/alpha/${code}`)

                    //https://restcountries.com/v3.1/alpha/${code}
 }

 // Get multiple countries using border codes
export function getCountriesByCodes(codes: string[]) {
  return axios.get<Country[]>(
    `${BASE_URL}/v3.1/alpha?codes=${codes.join(",")}`
  );
}