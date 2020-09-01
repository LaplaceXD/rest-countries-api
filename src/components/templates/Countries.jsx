import React from "react";
import Card from "./common/Card";
import { filterByKeys } from "../../utils/filterMethods";

const defaultProps = {
    id: "alpha3Code",
    display: ["population", "region", "capital"],
};

function Countries({ countries, display, id }) {
    return (
        <section className="l-grid cards-container">
            {countries.map((country) => (
                <Card
                    key={country[id]}
                    id={country[id]}
                    items={filterByKeys(country, display).reverse()}
                    label={country.name}
                    img={country.flag}
                />
            ))}
        </section>
    );
}

Countries.defaultProps = defaultProps;

export default Countries;
