import React, { useEffect, useState, useReducer } from "react";
import { multiPassFilter } from "./../utils/filterMethods";
import observe, { observeItems } from "../utils/observerMethods";
import filterBy from "./../utils/filterByExpressions";
import { filterReducer } from "./hooks/filterReducer";
import FilterInputs from "./templates/FilterInputs";
import Countries from "./templates/Countries";
import { createObserver } from "./../utils/observerMethods";

const filterDefaults = { search: "", region: "" };

function lazyLoadImages() {
    const config = {
        rootMargin: "0px 0px 92px 0px",
        threshold: 0,
    };

    const cardImgs = document.querySelectorAll(".card__img");
    observe.lazyLoadImages(cardImgs, config);
}

function fadeCards() {
    const config = {
        rootMargin: "0px 0px 128px 0px",
        threshold: 0,
    };

    const cards = document.querySelectorAll(".card");
    const observer = createObserver((card) => {
        if (card.intersectionRatio > 0) {
            card.target.classList.add("fade-in");
        }
    }, config);

    observeItems(observer, cards);
}

function CountryCards({ countries }) {
    const [filter, dispatchFilter] = useReducer(filterReducer, filterDefaults);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const { search, region } = filter;

    function filterCountries() {
        const filters = [
            [search, filterBy.searchString("name", search)],
            [region, filterBy.criteria("region", region)],
        ];

        const filtered = multiPassFilter(countries, filters);
        setFilteredCountries(filtered);
    }

    function deployCountriesList() {
        if (!search && !region) return countries;

        return filteredCountries;
    }

    useEffect(() => {
        fadeCards();
    }, []);

    useEffect(() => {
        filterCountries();
        lazyLoadImages();
    }, [search, region]);

    return (
        <>
            <FilterInputs inputData={[filter, dispatchFilter]} />
            <Countries countries={deployCountriesList()} />
        </>
    );
}

export default CountryCards;
