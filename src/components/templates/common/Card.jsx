import React from "react";
import ItemsList from "./ItemsList";
import { PropTypes } from "prop-types";

const types = {
    items: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

function Card({ items, label, img }) {
    const classes = {
        ul: "card__details",
        li: "card__detail",
        span: "card__detail--identifier",
        h2: "card__title",
    };

    return (
        <div className="card">
            <img src={img} alt={name} className="card__img" />
            <ItemsList classes={classes} items={items} label={label} />
        </div>
    );
}

Card.propTypes = types;

export default Card;
