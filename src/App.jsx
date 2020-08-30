import React, { useEffect, useState } from "react";
import http from "./services/httpService";
import SearchBox from "./components/common/SeachBox";
import SelectField from "./components/common/SelectField";
import Countries from "./components/Countries";
import { filterByString } from "./utils/filterMethods";

const apiEndpoint = "https://restcountries.eu/rest/v2/all";

function App() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");
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
                    <SelectField
                        placeholder="Filter By Region"
                        onInputChange={setRegion}
                        options={["Africa", "Americas", "Asia", "Europe", "Oceania"]}
                    />
                </section>
                <Countries countries={filteredCountries} />
            </main>
        </div>
    );
}

export default App;
