import React, { useEffect, useState, useReducer } from "react";
import { useGetCountries } from './hooks/useGetCountries';
import { filterByString, filterByCriteria } from "../utils/filterMethods";
import { filterReducer } from "./hooks/filterReducer";
import FilterInputs from "./templates/FilterInputs";
import Countries from "./templates/Countries";

const filterDefaults = { search: "", region: "" };
const countryFields = ["name", "flag", "population", "region", "capital", "alpha3Code"];

function CountryCards() {
    const countries = useGetCountries(countryFields);
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
