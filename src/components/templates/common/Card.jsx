import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import { animationObserver } from "./../../../utils/observerMethods";
import placeholder from "./../../../images/loading.gif";
import ItemsList from "./ItemsList";

const types = {
    items: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

const observeLazyLoad = animationObserver(
    (image) => {
        const src = image.target.dataset.src;
        image.target.setAttribute("src", src);
    },
    { rootMargin: "0px 0px 92px 0px", threshold: 0, delay: 10 }
);

const observeFadeIn = animationObserver(
    (card) => {
        card.target.classList.add("fade-in");
    },
    { rootMargin: "0px 0px 128px 0px", threshold: 0 }
);

function Card({ items, label, image, id }) {
    useEffect(() => {
        const card = document.querySelector(`#${id}`);
        const image = card.querySelector(".card__img");

        observeLazyLoad.observe(image);
        observeFadeIn.observe(card);

        return () => {
            observeLazyLoad.unobserve(image);
            observeFadeIn.unobserve(card);
        };
    }, []);

    return (
        <div id={id} className="card">
            <img data-src={image} alt={name} src={placeholder} className="card__img" />
            <ItemsList classBlock="card" items={items} label={label} />
        </div>
    );
}

Card.propTypes = types;

export default Card;
