import React, { useEffect, useReducer, useState } from "react";
import filterBy from "./../utils/filterByExpressions";
import { multiPassFilter } from "./../utils/filterMethods";
import { filterReducer } from "./hooks/filterReducer";
import Countries from "./templates/Countries";
import FilterInputs from "./templates/FilterInputs";

const filterDefaults = { search: "", region: "" };

function CountryCards({ countries, countriesLoading }) {
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
            {!countriesLoading && <Countries countries={deployCountriesList()} />}
        </>
    );
}

export default CountryCards;
