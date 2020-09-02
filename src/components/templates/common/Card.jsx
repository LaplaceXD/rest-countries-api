import React from "react";
import ItemsList from "./ItemsList";
import { PropTypes } from "prop-types";

const types = {
    items: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

function Card({ items, label, image }) {
    return (
        <div className="card">
            <img src={image} alt={name} className="card__img" />
            <ItemsList classBlock={"card"} items={items} label={label} />
        </div>
    );
}

Card.propTypes = types;

export default Card;
