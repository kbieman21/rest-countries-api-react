

import { Link } from "react-router-dom";
import type { Country } from "../api/types";


interface CountryCardProps {
  country: Country;
}

 function CountryCard({ country }:CountryCardProps) {
    console.log("Card Country:", country.cca3, country);

  return (
    <Link to={`/country/${country.cca3}`} className="card">
      <img src={country.flags.png}  alt={country.flags?.alt || country.name.common} />
      <div className="card-body">
        <h3>{country.name.common}</h3>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      </div>
    </Link>
  );
}


export default CountryCard;