import React, { useState, useEffect } from "react";
import { loadCountry, convertCountryCode } from "../services/countriesService";
import { convertToKeyValue } from "./../utils/filterMethods";
import { getNestedDetails } from "./../utils/parseMethods";
import { shorten } from "../utils/auxilliaryMethods";
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
    "borders",
];

const firstListDisplay = ["nativeName", "population", "region", "subregion", "capital"];

const secondListDisplay = ["topLevelDomain", "currencies", "languages"];
const secondListKeys = [0, "name", "name"];

function CountryProfile({ match }) {
    const { name } = match.params;
    const [flag, setFlag] = useState([]);
    const [borders, setBorders] = useState([]);
    const [firstList, setFirstList] = useState([]);
    const [secondList, setSecondList] = useState([]);

    function countryDataHandler(countryData) {
        const { flag, borders } = countryData;

        setFlag(flag);

        const firstListData = convertToKeyValue(countryData, firstListDisplay);
        setFirstList(firstListData);

        const parsedDetails = getNestedDetails(countryData, secondListDisplay, secondListKeys);
        const secondListData = convertToKeyValue(parsedDetails, secondListDisplay);
        setSecondList(secondListData);

        if (borders.length !== 0) convertCountryCode(borders, "name").then((value) => setBorders(value));
        else setBorders(null);
    }

    useEffect(() => {
        loadCountry(name, countryFields, countryDataHandler);
    }, [name]);

    return (
        <main className="profile-container">
            <ButtonLink to="/" label="Back" icon="fa fa-arrow-left" />
            <div className="l-flex-spaced profile__wrapper">
                <img src={flag} alt={name} className="profile__img" />
                <div className="l-grid-2 profile__details">
                    <h2 className="profile__label">{name}</h2>
                    <ItemsList classBlock="profile" items={firstList} />
                    <ItemsList classBlock="profile" items={secondList} />
                    {borders && (
                        <div className="borders">
                            <h3 className="borders__title">Border Countries: </h3>
                            {borders.map((border) => (
                                <ButtonLink
                                    key={border}
                                    to={`/country/${border}`}
                                    label={shorten(border, 10)}
                                    classBlock="borders"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

export default CountryProfile;
