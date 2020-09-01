import React from "react";
import ItemsList from "./ItemsList";
import { PropTypes } from "prop-types";

const types = {
    items: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

function Card({ items, label, img, id }) {
    const classes = {
        ul: "card__details",
        li: "card__detail",
        span: "card__detail--identifier",
        h2: "card__title",
    };

    return (
        <div className="card">
            <img src={img} alt={name} className="card__img" />
            <ItemsList classes={classes} items={items} label={label} id={id} />
        </div>
    );
}

Card.propTypes = types;

export default Card;
