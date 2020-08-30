import React, { useEffect, useState } from "react";
import http from "./services/httpService";
import FilterInputs from "./components/FilterInputs";
import Countries from "./components/Countries";
import { filterByString, filterByCriteria } from "./utils/filterMethods";

const apiEndpoint = "https://restcountries.eu/rest/v2/all";

function App() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");
    const filteredCountries = search
        ? filterByString(countries, "name", search)
        : filterByCriteria(countries, "region", region);

    useEffect(() => {
        async function getCountries() {
            const { data } = await http.get(apiEndpoint);
            setCountries(data);
        }

        getCountries();
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
