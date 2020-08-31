import React, { useEffect, useState, useReducer } from "react";
import { getCountries } from "./services/countriesService";
import { filterByString, filterByCriteria } from "./utils/filterMethods";
import { filterReducer } from "./hooks/reducer/filterReducer";
import Header from "./components/Header";
import FilterInputs from "./components/FilterInputs";
import Countries from "./components/Countries";

const filterDefaults = { search: "", region: "" };

function App() {
    const [countries, setCountries] = useState([]);
    const [filter, dispatchFilter] = useReducer(filterReducer, filterDefaults);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [darkMode, setDarkMode] = useState(true);

    async function loadCountries() {
        const { data } = await getCountries();
        setCountries(data);
        setFilteredCountries(data);
    }

    function filterCountries() {
        const { search, region } = filter;

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
    }, [filter]);

    return (
        <div className={`main-container ${darkMode ? "" : "light"}`}>
            <Header toggleData={[darkMode, setDarkMode]} />
            <main className="container">
                <FilterInputs inputData={[filter, dispatchFilter]} />
                <Countries countries={filteredCountries} />
            </main>
        </div>
    );
}

export default App;
