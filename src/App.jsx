import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import FilterInputs from "./components/FilterInputs";
import Countries from "./components/Countries";
import { getCountries } from "./services/countriesService";
import { filterByString, filterByCriteria } from "./utils/filterMethods";

function App() {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");
    const [darkMode, setDarkMode] = useState(true);

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
    }, []);

    useEffect(() => {
        filterCountries();
    }, [search, region]);

    return (
        <div className={`main-container ${darkMode ? "" : "light"}`}>
            <Header toggleData={[darkMode, setDarkMode]} />
            <main className="container">
                <FilterInputs searchData={[search, setSearch]} regionData={[region, setRegion]} />
                <Countries countries={filteredCountries} />
            </main>
        </div>
    );
}

export default App;
