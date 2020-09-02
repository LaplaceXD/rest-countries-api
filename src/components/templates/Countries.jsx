import React from "react";
import Card from "./common/Card";
import { Link } from "react-router-dom";
import { filterByKeys } from "../../utils/filterMethods";

const defaultProps = {
    id: "alpha3Code",
    display: ["population", "region", "capital"],
};

function Countries({ countries, display, id }) {
    return (
        <section className="l-grid cards-container">
            {countries.map((country) => (
                <Link to={`/${country.name}`}>
                    <Card
                        key={country[id]}
                        items={filterByKeys(country, display).reverse()}
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
