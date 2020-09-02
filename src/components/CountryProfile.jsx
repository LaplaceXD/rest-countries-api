import React from "react";
import { Link } from "react-router-dom";

function CountryProfile({ match, history }) {
    const name = match.params.name;

    return (
        <>
            <Link to="/country">
                <button>{name}</button>
            </Link>
        </>
    );
}

export default CountryProfile;
