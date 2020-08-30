import React from "react";
import Card from "./common/Card";

const defaultProps = {
    id: "alpha3Code",
    display: ["population", "region", "capital"],
};

function Countries({ countries, display, id }) {
    return (
        <section className="l-grid country-container">
            {countries.map((country) => (
                <Card
                    key={country[id]}
                    id={country[id]}
                    display={display}
                    item={country}
                    name={country.name}
                    img={country.flag}
                />
            ))}
        </section>
    );
}

Countries.defaultProps = defaultProps;

export default Countries;