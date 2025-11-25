import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { getCountriesByCodes, getCountryByCode } from "../api/countries";

export default function CountryDetail() {
  const { code } = useParams();
  const [country, setCountry] = useState<any>(null);
  const [borders, setBorders] = useState<any[]>([]);

//   useEffect(() => {
//     if(!code) return;
//     async function fetchCountry() {
//       try {
//         const res = await getCountriesByCodes(code);
//         console.log("THIS IS THE RES", res);

//         const data = Array.isArray(res.data) ? res.data[0] : res.data;
//         // console.log("THIS IS THE DATA", data);
//         setCountry(data);

//         if (data.borders && data.borders?.length > 0) {
//           console.log(data.borders.length);

          
//           const borderRes = await getCountriesByCodes(data.borders)
//           setBorders(borderRes.data);
//         } else {
//           setBorders([]);
//         }
//       } catch (err) {
//         console.error("Failed to fetch country:", err);
//       }
//     }

//     fetchCountry();
//   }, [code]);



useEffect(() => {
  if (!code) return; // Prevents undefined from being passed

  (async () => {
    try {
      const { data } = await getCountryByCode(code);
      const countryData = data[0];
      setCountry(countryData);

      if (countryData.borders?.length) {
        const { data: bordersData } = await getCountriesByCodes(countryData.borders);
        setBorders(bordersData);
      } else {
        setBorders([]);
      }
    } catch (err) {
      console.error(err);
    }
  })();
}, [code]);


  if (!country) return <h2 className="loading">Loading country details...</h2>;

  return (
    <div className="detail-container">
      <Link to="/" className="back-btn">
        ← Back
      </Link>

      <div className="detail-layout">
        {/* Flag */}
        <div className="flag-container">
          <img
            src={country.flags.png}
            alt={country.flags?.alt || country.name.common}
          />
        </div>

        {/* Info */}
        <div className="detail-info">
          <h2>{country.name.common}</h2>

          <div className="info-grid">
            <div className="info-left">
              <p>
                <strong>Official Name:</strong> {country.name.official}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Subregion:</strong> {country.subregion || "N/A"}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
              </p>
            </div>

            <div className="info-right">
              <p>
                <strong>Top Level Domain:</strong>{" "}
                {country.tld?.join(", ") || "N/A"}
              </p>
              <p>
                <strong>Currencies:</strong>{" "}
                {country.currencies
                  ? Object.values(country.currencies as Record<string, { name: string; symbol: string }>)
                      .map((c) => c.name)
                      .join(", ")
                  : "N/A"}
              </p>

              <p>
                <strong>Languages:</strong>{" "}
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>

          {/* Border countries */}
          <div className="borders-section">
            <h3>Border Countries:</h3>
            <div className="borders-container">
              {borders && borders.length > 0 ? (
                borders.map((b) => (
                  <Link
                    key={b.cca3}
                    to={`/country/${b.cca3}`}
                    className="border-btn"
                  >
                    {b.name.common}
                  </Link>
                ))
              ) : (
                <span>No border countries</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
