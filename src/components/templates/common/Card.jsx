import React, { useEffect } from "react";
import ItemsList from "./ItemsList";
import { PropTypes } from "prop-types";

const types = {
    items: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

function Card({ items, label, image, id, observers }) {
    useEffect(() => {
        const [observeLazyLoad, observeFadeIn] = observers;
        const card = document.querySelector(`#${id}`);
        const image = card.firstChild;

        observeLazyLoad.observe(image);
        observeFadeIn.observe(card);

        return () => {
            observeLazyLoad.unobserve(image);
            observeFadeIn.unobserve(card);
        };
    }, []);

    return (
        <div id={id} className="card">
            <img
                data-src={image}
                alt={name}
                src="https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif"
                className="card__img"
            />
            <ItemsList classBlock="card" items={items} label={label} />
        </div>
    );
}

Card.propTypes = types;

export default Card;
