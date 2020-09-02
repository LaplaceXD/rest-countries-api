import React, { useEffect, useState, useReducer } from "react";
import { filterByString, filterByCriteria } from "../utils/filterMethods";
import { filterReducer } from "./hooks/filterReducer";
import FilterInputs from "./templates/FilterInputs";
import Countries from "./templates/Countries";

const filterDefaults = { search: "", region: "" };

function CountryCards({ countries }) {
    const [filter, dispatchFilter] = useReducer(filterReducer, filterDefaults);
    const [filteredCountries, setFilteredCountries] = useState([]);

    function filterCountries() {
        const { search, region } = filter;

        const filtered = search
            ? filterByString(countries, "name", search)
            : filterByCriteria(countries, "region", region);

        setFilteredCountries(filtered);
    }

    useEffect(() => {
        setFilteredCountries(countries);
    }, [countries]);

    useEffect(() => {
        filterCountries();
    }, [filter]);

    return (
        <main className="country-container">
            <FilterInputs inputData={[filter, dispatchFilter]} />
            <Countries countries={filteredCountries} />
        </main>
    );
}

export default CountryCards;
