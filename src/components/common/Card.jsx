import React from "react";

function Card({ country }) {
    const { name, flag, population, region, capital } = country;

    return (
        <div>
            <img src={flag} alt={`Flag of ${name}`} />
            <h1>{name}</h1>
            <ul>
                <li>
                    <span>Population:</span>
                    {population}
                </li>
                <li>
                    <span>Region:</span>
                    {region}
                </li>
                <li>
                    <span>Capital:</span>
                    {capital}
                </li>
            </ul>
        </div>
    );
}

export default Card;
