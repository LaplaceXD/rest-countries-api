import React from "react";
import { Link } from "react-router-dom";
import { convertToKeyValue } from "./../../utils/filterMethods";
import Card from "./common/Card";

const defaultProps = {
    id: "alpha3Code",
    display: ["population", "region", "capital"],
};

function Countries({ countries, display, id }) {
    console.log(countries);

    return (
        <section className="l-grid-4 cards-container">
            {countries.map((country) => (
                <Link key={country[id]} to={`/country/${country[id].toLowerCase()}`}>
                    {console.log(country)}
                    <Card
                        id={country[id]}
                        items={convertToKeyValue(country, display)}
                        label={country.name}
                        image={country.flag}
                    />
                </Link>
            ))}
        </section>
    );
}

Countries.defaultProps = defaultProps;

export default Countries;
