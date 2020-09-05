import React, { useEffect, useState, useReducer } from "react";
import { filterByString, filterByCriteria } from "../utils/filterMethods";
import { filterReducer } from "./hooks/filterReducer";
import FilterInputs from "./templates/FilterInputs";
import Countries from "./templates/Countries";

const filterDefaults = { search: "", region: "" };

function CountryCards({ countries }) {
    const [filter, dispatchFilter] = useReducer(filterReducer, filterDefaults);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const { search, region } = filter;

    function filterCountries() {
        const filtered = search
            ? filterByString(countries, "name", search)
            : filterByCriteria(countries, "region", region);

        setFilteredCountries(filtered);
    }

    // To prevent full re-render of this component, which
    // makes it look like a slow reload
    function deployCountriesList() {
        if (!search && !region) {
            return countries;
        }

        return filteredCountries;
    }

    useEffect(() => {
        filterCountries();
    }, [filter]);

    return (
        <>
            <FilterInputs inputData={[filter, dispatchFilter]} />
            <Countries countries={deployCountriesList()} />
        </>
    );
}

export default CountryCards;
