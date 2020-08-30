import React from "react";
import { filterDetails } from "./../../utils/filterMethods";
import { PropTypes } from "prop-types";

const types = {
    item: PropTypes.object.isRequired,
    display: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

function Card({ item, display, name, img, id }) {
    const details = filterDetails(item, display).reverse();

    return (
        <div className="card">
            <img src={img} alt={name} className="card__img" />
            <ul className="card__details">
                <li>
                    <h2 className="card__title">{name}</h2>
                </li>
                {details.map(({ value, key }) => (
                    <li key={id + key} className="card__detail">
                        <span className="card__detail--identifier">{`${key}: `}</span>
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}

Card.propTypes = types;

export default Card;
