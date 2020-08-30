import React, { useEffect, useState } from "react";
import http from "./services/httpService";
import Card from "./components/common/Card";
import { filterByString } from "./utils/filterMethods";

const apiEndpoint = "https://restcountries.eu/rest/v2/all";

function App() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const filteredCountries = filterByString(countries, "name", search);

    useEffect(() => {
        async function getCountries() {
            const { data } = await http.get(apiEndpoint);
            setCountries(data);
        }

        getCountries();
    });

    return (
        <div className="main">
            <main className="container">
                <section className="l-flex">
                    <input
                        type="text"
                        placeholder="Search for a country..."
                        className="search-box"
                        onChange={(e) => setSearch(e.currentTarget.value)}
                    />
                </section>
                <section className="l-grid country-container">
                    {filteredCountries.map((country) => (
                        <Card
                            key={country.alpha3Code}
                            display={["population", "region", "capital"]}
                            country={country}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}

export default App;
