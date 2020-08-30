import React, { useEffect, useState } from "react";
import http from "./services/httpService";
import Card from "./components/common/Card";

const apiEndpoint = "https://restcountries.eu/rest/v2/all";

function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function getCountries() {
            const { data } = await http.get(apiEndpoint);
            setCountries(data);
        }

        getCountries();
    });

    return (
        <div className="main">
            <div className="l-grid">
                {countries.map((country) => (
                    <Card
                        key={country.alpha3Code}
                        display={["population", "region", "capital"]}
                        country={country}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
