import React, { useEffect, useState, useReducer } from "react";
import { multiPassFilter } from "./../utils/filterMethods";
import filterBy from "./../utils/filterByExpressions";
import { filterReducer } from "./hooks/filterReducer";
import FilterInputs from "./templates/FilterInputs";
import Countries from "./templates/Countries";

const filterDefaults = { search: "", region: "" };

function CountryCards({ countries }) {
    const [filter, dispatchFilter] = useReducer(filterReducer, filterDefaults);
    const [filteredCountries, setFilteredCountries] = useState([]);

    function deployCountriesList() {
        const { search, region } = filter;

        if (!search && !region) return countries;
        return filteredCountries;
    }

    useEffect(() => {
        const { search, region } = filter;

        const filters = [
            [search, filterBy.searchString("name", search)],
            [region, filterBy.criteria("region", region)],
        ];

        const filtered = multiPassFilter(countries, filters);
        setFilteredCountries(filtered);
    }, [filter]);

    return (
        <>
            <FilterInputs inputData={[filter, dispatchFilter]} />
            <Countries countries={deployCountriesList()} />
        </>
    );
}

export default CountryCards;
