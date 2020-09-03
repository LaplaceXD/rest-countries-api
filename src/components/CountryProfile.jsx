import React, { useState, useEffect } from "react";
import { loadCountry } from "../services/countriesService";
import { convertToKeyValue } from "./../utils/filterMethods";
import { getNestedDetails } from "./../utils/parseMethods";
import ItemsList from "./templates/common/ItemsList";
import ButtonLink from "./templates/common/ButtonLink";

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
    const [flag, setFlag] = useState([]);
    const [firstList, setFirstList] = useState([]);
    const [secondList, setSecondList] = useState([]);

    function countryDataHandler(countryData) {
        setFlag(countryData["flag"]);

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
            <ButtonLink to="/" label="Back" icon="fa fa-arrow-left" />
            <img src={flag} alt={name} className="profile__img" />
            <ItemsList label={name} classBlock="profile" items={firstList} />
            <br />
            <ItemsList classBlock="profile" items={secondList} />
            <ItemsList label="Border Countries:" classBlock="borders" items={secondList} />
        </main>
    );
}

export default CountryProfile;
