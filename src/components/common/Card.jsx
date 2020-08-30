import React from "react";
import { filterDetails } from "./../../utils/filterMethods";

function Card({ country, display }) {
    const { name, flag, alpha3code: id } = country;
    const details = filterDetails(country, display);

    return (
        <div className="card">
            <img src={flag} alt={`Flag of ${name}`} className="card__img" />
            <h2 className="card__title">{name}</h2>
            <ul className="card__details">
                {details.map(({ value, key }) => (
                    <li key={id + key} className="card__detail">
                        <span className="card__detail--bold">{`${key}: `}</span>
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Card;
