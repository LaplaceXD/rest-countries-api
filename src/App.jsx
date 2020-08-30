import React, { useEffect, useState } from "react";
import FilterInputs from "./components/FilterInputs";
import Countries from "./components/Countries";
import { getCountries } from "./services/countriesService";
import { filterByString, filterByCriteria } from "./utils/filterMethods";

function App() {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");

    async function loadCountries() {
        const { data } = await getCountries();
        setCountries(data);
        setFilteredCountries(data);
    }

    function filterCountries() {
        const filtered = search
            ? filterByString(countries, "name", search)
            : filterByCriteria(countries, "region", region);

        setFilteredCountries(filtered);
    }

    useEffect(() => {
        loadCountries();
    }, [])

    useEffect(() => {
        filterCountries();
    }, [search, region]);

    return (
        <div className="main">
            <header className="header">
                <div className="container">
                    <h1>Where in the world?</h1>
                    <div className="dark">
                    
                    </div>
                </div>
            </header>
            <main className="container">
                <FilterInputs search={[search, setSearch]} region={[region, setRegion]} />
                <Countries countries={filteredCountries} />
            </main>
        </div>
    );
}

export default App;
