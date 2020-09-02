import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadCountry } from "../services/countriesService";
import { convertToKeyValue } from "./../utils/filterMethods";
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

function CountryProfile({ match, history }) {
    const {
        params: { name },
    } = match;
    const [country, setCountry] = useState([]);

    useEffect(() => {
        loadCountry(name, countryFields, setCountry);
    }, []);

    return (
        <main className="profile-container">
            <Link to="/country">
                <button onClick={() => console.log(country)}>
                    <i className="fa fa-arrow-left" />
                    Back
                </button>
            </Link>
            <img src={country.flag} alt={name} className="profile__img" />
            <ItemsList
                label={name}
                classBlock="profile"
                items={convertToKeyValue(country, firstListDisplay)}
            />
        </main>
    );
}

export default CountryProfile;
