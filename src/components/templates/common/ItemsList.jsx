import React from "react";
import { PropTypes } from "prop-types";

const defaultProps = {
    spanned: true,
};

const types = {
    label: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    spanned: PropTypes.bool,
};

function ItemsList({ items, label, classes, spanned }) {
    const { ul, li, h2, span } = classes;

    function renderItem(item, withSpan) {
        const { key, value } = item;

        return (
            <li key={item} className={li}>
                {withSpan ? <span className={span}>{`${key}: `}</span> : null}
                {withSpan ? value : item}
            </li>
        );
    }

    return (
        <ul className={ul}>
            <li>
                <h2 className={h2}>{label}</h2>
            </li>
            {items.map((item) => renderItem(item, spanned))}
        </ul>
    );
}

ItemsList.propTypes = types;
ItemsList.defaultProps = defaultProps;

export default ItemsList;
