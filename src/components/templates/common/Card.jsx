import React from "react";
import ItemsList from "./ItemsList";
import { PropTypes } from "prop-types";

const types = {
    items: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

const classes = {
    div: "card",
    img: "card__img",
    ul: "card__details",
    li: "card__detail",
    span: "card__detail--identifier",
    h2: "card__title",
};

function Card({ items, label, image, id }) {
    const { div, img, ...itemsList } = classes;

    return (
        <div className={div}>
            <img src={image} alt={name} className={img} />
            <ItemsList classes={itemsList} items={items} label={label} id={id} />
        </div>
    );
}

Card.propTypes = types;

export default Card;
