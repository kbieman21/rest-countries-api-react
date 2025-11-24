// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// export default function CountryDetail() {
//   const { code } = useParams();
//   const [country, setCountry] = useState(null);

//   useEffect(() => {
//     async function fetchCountry() {
//       try {
//         const res = await axios.get(
//           `https://restcountries.com/v3.1/alpha/${code}`
//         );

//         // Make sure the API returned a valid country
//         const data = Array.isArray(res.data) ? res.data[0] : null;
//         setCountry(data);
//         console.log(data);
        
//       } catch (err) {
//         console.error("Failed to fetch country", err);
//       }
//     }

//     fetchCountry();
//   }, [code]);

//   if (!country) return <h2>Loading...</h2>;

//   return (
//     <div className="detail-container">
//       <Link to="/" className="back-btn">← Back</Link>

//       <div className="detail-layout">
//         <img
//           src={country.flags.png}
//           alt={country.flags?.alt || country.name.common}
//         />

//         <div className="detail-text">
//           <h2>{country.name.common}</h2>

//           <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
//           <p><strong>Region:</strong> {country.region}</p>
//           <p><strong>Subregion:</strong> {country.subregion}</p>
//           <p><strong>Capital:</strong> {country.capital?.[0] || "None"}</p>

//           <h3>Border Countries:</h3>

//           <div className="borders-container">
//             {country.borders ? (
//               country.borders.map(b => (
//                 <Link key={b} to={`/country/${b}`} className="border-btn">
//                   {b}
//                 </Link>
//               ))
//             ) : (
//               <span>No border countries</span>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CountryDetail() {
  const { code } = useParams();
  const [country, setCountry] = useState<any>(null);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/alpha/${code}`
        );
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        setCountry(data);
        console.log("Detail Country:", data);
      } catch (err) {
        console.error("Failed to fetch country:", err);
      }
    }

    fetchCountry();
  }, [code]);

  if (!country) return <h2 className="loading">Loading country details...</h2>;

  return (
    <div className="detail-container">
      <Link to="/" className="back-btn">← Back</Link>

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
              <p><strong>Official Name:</strong> {country.name.official}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Subregion:</strong> {country.subregion || "N/A"}</p>
              <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
            </div>

            <div className="info-right">
              <p><strong>Top Level Domain:</strong> {country.tld?.join(", ") || "N/A"}</p>
              <p><strong>Currencies:</strong> {country.currencies ? Object.values(country.currencies).map(c => c.name).join(", ") : "N/A"}</p>
              <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
            </div>
          </div>

          {/* Border countries */}
          <div className="borders-section">
            <h3>Border Countries:</h3>
            <div className="borders-container">
              {country.borders && country.borders.length > 0 ? (
                country.borders.map((b: string) => (
                  <Link key={b} to={`/country/${b}`} className="border-btn">
                    {b}
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
