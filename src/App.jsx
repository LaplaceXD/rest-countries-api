import React, { useEffect, useState } from "react";
import http from "./services/httpService";
import Card from "./components/common/Card";
import SearchBox from "./components/common/SeachBox";
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
                    <SearchBox placeholder="Search for a country..." onSearch={setSearch} />
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
