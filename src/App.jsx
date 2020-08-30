import React, { useEffect, useState } from "react";
import FilterInputs from "./components/FilterInputs";
import Countries from "./components/Countries";
import { getCountries } from "./services/countriesService";
import { filterByString, filterByCriteria } from "./utils/filterMethods";

function App() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");
    const filteredCountries = search
        ? filterByString(countries, "name", search)
        : filterByCriteria(countries, "region", region);

    useEffect(() => {
        async function loadCountries() {
            const { data } = await getCountries();
            setCountries(data);
        }

        loadCountries();
    }, [countries]);

    return (
        <div className="main">
            <main className="container">
                <FilterInputs search={[search, setSearch]} region={[region, setRegion]} />
                <Countries countries={filteredCountries} />
            </main>
        </div>
    );
}

export default App;
