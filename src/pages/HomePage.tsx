import { useEffect, useState } from "react";

import CountryCard from "../components/CountryCard";
import FilterRegion from "../components/FilterRegion";
import { getAllCountries } from "../api/countries";
import SearchBar from "../components/SearchBar";

 function HomePage() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then(res => res.json())
//       .then(data => setCountries(data));
//   }, []);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const res = await getAllCountries();
        setCountries(res.data);
        //console.log("API RESPONSE:", res.data); //debug
      } catch (err) {
       
      } finally {
       
      }
    }

    fetchCountry();
    
  }, []);

  const filtered = countries.filter(c =>
    c.name.common.toLowerCase().includes(search.toLowerCase()) &&
    (region ? c.region === region : true)
  );

  return (
    <div className="container">
      <div className="toolbar">
        <SearchBar value={search} onChange={setSearch} />
        <FilterRegion value={region} onChange={setRegion} />
      </div>

      <div className="cards-container">
        {filtered.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}
export default HomePage;