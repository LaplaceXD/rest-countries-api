import React, { useEffect, useState, useReducer } from "react";
import { multiPassFilter } from "./../utils/filterMethods";
import { animationObserver } from "../utils/observerMethods";
import filterBy from "./../utils/filterByExpressions";
import { filterReducer } from "./hooks/filterReducer";
import FilterInputs from "./templates/FilterInputs";
import Countries from "./templates/Countries";

const filterDefaults = { search: "", region: "" };

const observeLazyLoad = animationObserver(
    (image) => {
        const src = image.target.dataset.src;
        image.target.setAttribute("src", src);
    },
    { rootMargin: "0px 0px 92px 0px", threshold: 0, delay: 10 }
);

const observeFadeIn = animationObserver(
    (card) => {
        card.target.classList.add("fade-in");
    },
    { rootMargin: "0px 0px 128px 0px", threshold: 0 }
);

const observers = [observeLazyLoad, observeFadeIn];

function CountryCards({ countries }) {
    const [filter, dispatchFilter] = useReducer(filterReducer, filterDefaults);
    const [filteredCountries, setFilteredCountries] = useState([]);

    function filterCountries() {
        const { search, region } = filter;

        const filters = [
            [search, filterBy.searchString("name", search)],
            [region, filterBy.criteria("region", region)],
        ];

        const filtered = multiPassFilter(countries, filters);
        setFilteredCountries(filtered);
    }

    function deployCountriesList() {
        const { search, region } = filter;

        if (!search && !region) return countries;
        return filteredCountries;
    }

    useEffect(() => {
        filterCountries();
    }, [filter]);

    return (
        <>
            <FilterInputs inputData={[filter, dispatchFilter]} />
            <Countries countries={deployCountriesList()} observers={observers} />
        </>
    );
}

export default CountryCards;
