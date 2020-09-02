import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loadCountry } from "../services/countriesService";

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
];

function CountryProfile({ match, history }) {
    const {
        params: { name },
    } = match;
    const [country, setCountry] = useState([]);

    useEffect(() => {
        loadCountry(name, countryFields, setCountry);
        console.log(country);
    }, [country]);

    return (
        <main className="profile-container">
            <Link to="/country">
                <button>
                    <i className="fa fa-arrow-left" />
                    Back
                </button>
            </Link>
            <img />
        </main>
    );
}

export default CountryProfile;
