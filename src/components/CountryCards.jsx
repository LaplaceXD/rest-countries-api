import React, { useEffect, useReducer, useState } from "react";
import filterBy from "./../utils/filterByExpressions";
import { multiPassFilter } from "./../utils/filterMethods";
import { filterReducer } from "./hooks/filterReducer";
import Countries from "./templates/Countries";
import FilterInputs from "./templates/FilterInputs";
import { loadCountries } from "../services/countriesService";

const filterDefaults = { search: "", region: "" };
const countryFields = ["name", "flag", "population", "region", "capital", "alpha3Code"];

function CountryCards() {
    const [filter, dispatchFilter] = useReducer(filterReducer, filterDefaults);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        loadCountries(countryFields).then((data) => {
            setCountries(data);
            setIsLoading(false);
        });
    }, []);

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
            {!isLoading && <Countries countries={deployCountriesList()} />}
        </>
    );
}

export default CountryCards;
