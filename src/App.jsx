import React, { useEffect, useState } from "react";
import http from "./services/httpService";
import SearchBox from "./components/common/SeachBox";
import SelectField from "./components/common/SelectField";
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
                <section className="l-flex">
                    <SearchBox
                        placeholder="Search for a country..."
                        value={search}
                        onSearch={(value) => {
                            setSearch(value);
                            setRegion("")
                        }}
                    />
                    <SelectField
                        placeholder="Filter By Region"
                        value={region}
                        onInputChange={(value) => {
                            setRegion(value);
                            setSearch("")
                        }}
                        options={["Africa", "Americas", "Asia", "Europe", "Oceania"]}
                    />
                </section>
                <Countries countries={filteredCountries} />
            </main>
        </div>
    );
}

export default App;
