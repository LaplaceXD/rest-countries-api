import React from "react";
import { Link } from "react-router-dom";

function CountryProfile({ match, history }) {
    const name = match.params.name;

    return (
        <main className="profile-container">
            <Link to="/country">
                <button>
                    <i className="fa fa-arrow-left" />
                    Back
                </button>
            </Link>
        </main>
    );
}

export default CountryProfile;
