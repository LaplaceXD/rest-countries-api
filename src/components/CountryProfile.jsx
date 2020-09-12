import React, { useState, useEffect, useRef } from "react";
import { loadCountry, convertCountryCode } from "../services/countriesService";
import { convertToKeyValue } from "./../utils/filterMethods";
import { getNestedDetails } from "./../utils/parseMethods";
import ItemsList from "./templates/common/ItemsList";
import ButtonLink from "./templates/common/ButtonLink";
import ButtonGrid from "./templates/ButtonGrid";
import LoadingScreen from "./templates/common/LoadingScreen";

const countryFields = [
    "nativeName",
    "population",
    "region",
    "subregion",
    "capital",
    "topLevelDomain",
    "currencies",
    "languages",
    "borders",
    "name",
    "flag",
];

function CountryProfile({ match }) {
    const { id } = match.params;
    const [firstList, setFirstList] = useState([]);
    const [secondList, setSecondList] = useState([]);
    const [borders, setBorders] = useState([]);
    const [flag, setFlag] = useState("");
    const [name, setName] = useState("");

    function loadFirstList(countryData) {
        const firstListDisplay = countryFields.slice(0, 5);

        const firstListData = convertToKeyValue(countryData, firstListDisplay);
        setFirstList(firstListData);
    }

    function loadSecondList(countryData) {
        const secondListDisplay = countryFields.slice(5, 8);
        const secondListKeys = [0, "name", "name"];

        const parsedDetails = getNestedDetails(countryData, secondListDisplay, secondListKeys);
        const secondListData = convertToKeyValue(parsedDetails, secondListDisplay);
        setSecondList(secondListData);
    }

    function loadBordersData(bordersData) {
        if (bordersData.length === 0) {
            setBorders(null);
            return;
        }

        const convertedData = convertCountryCode(bordersData, "name");
        convertedData.then((borders) => {
            setBorders(borders);
        });
    }

    function countryDataHandler(countryData) {
        const { name, flag, borders } = countryData;

        loadFirstList(countryData);
        loadSecondList(countryData);
        loadBordersData(borders);
        setFlag(flag);
        setName(name);
    }

    function resetStates() {
        setFirstList([]);
        setSecondList([]);
        setBorders([]);
        setFlag("");
        setName("");
    }

    useEffect(() => {
        resetStates();
        loadCountry(id, countryFields, countryDataHandler);
    }, [id]);

    return (
        <>
            {!name ? (
                <LoadingScreen dependency={name} />
            ) : (
                <main className="profile-container">
                    <ButtonLink to="/" label="Back" icon="fa fa-arrow-left" />
                    <div className="l-flex-spaced profile__wrapper">
                        <img src={flag} alt={name} className="profile__img" />
                        <div className="l-grid-2 profile__details">
                            <h2 className="profile__label">{name}</h2>
                            <ItemsList classBlock="profile" items={firstList} />
                            <ItemsList classBlock="profile" items={secondList} />
                            {borders && (
                                <ButtonGrid
                                    classBlock="borders"
                                    items={borders}
                                    label="Border Countries:"
                                />
                            )}
                        </div>
                    </div>
                </main>
            )}
        </>
    );
}

export default CountryProfile;
