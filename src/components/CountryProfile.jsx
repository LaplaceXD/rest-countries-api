import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadCountry } from "../services/countriesService";
import { convertToKeyValue } from "./../utils/filterMethods";
import { getNestedDetails } from "./../utils/parseMethods";
import ItemsList from "./templates/common/ItemsList";

const countryFields = [
    "nativeName",
    "flag",
    "population",
    "region",
    "subregion",
    "capital",
    "topLevelDomain",
    "currencies",
    "languages",
    "borders",
];

const firstListDisplay = ["nativeName", "population", "region", "subregion", "capital"];
const secondListDisplay = ["topLevelDomain", "currencies", "languages"];
const secondListKeys = [0, "name", "name"];

function CountryProfile({ match }) {
    const { name } = match.params;
    const [country, setCountry] = useState([]);
    const [firstList, setFirstList] = useState([]);
    const [secondList, setSecondList] = useState([]);

    function countryDataHandler(countryData) {
        setCountry(countryData);

        const firstListData = convertToKeyValue(countryData, firstListDisplay);
        setFirstList(firstListData);

        const parsedDetails = getNestedDetails(countryData, secondListDisplay, secondListKeys);
        const secondListData = convertToKeyValue(parsedDetails, secondListDisplay);
        setSecondList(secondListData);
    }

    useEffect(() => {
        loadCountry(name, countryFields, countryDataHandler);
    }, []);

    return (
        <main className="profile-container">
            <Link to="/country">
                <button>
                    <i className="fa fa-arrow-left" />
                    Back
                </button>
            </Link>
            <img src={country.flag} alt={name} className="profile__img" />
            <ItemsList label={name} classBlock="profile" items={firstList} />
            <br className="profile__spacer" />
            <ItemsList classBlock="profile" items={secondList} />
        </main>
    );
}

export default CountryProfile;
