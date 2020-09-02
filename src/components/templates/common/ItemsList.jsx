import React from "react";
import { PropTypes } from "prop-types";

const defaultProps = {
    withIdentifier: true,
};

const types = {
    label: PropTypes.string.isRequired,
    classBlock: PropTypes.string,
    withIdentifier: PropTypes.bool,
};

function ItemsList({ items, label, classBlock, withIdentifier }) {
    function elementClass(element) {
        if (!classBlock) return null;

        return `${classBlock}__${element}`;
    }

    function renderLabel(label) {
        if (!label) return null;

        return (
            <li>
                <h2 className={elementClass("label")}>{label}</h2>
            </li>
        );
    }

    function renderItem(item) {
        const { key, value } = item;

        return (
            <li key={withIdentifier ? key : item} className={elementClass("item")}>
                {withIdentifier && <span className={elementClass("item--identifier")}>{`${key}: `}</span>}
                {withIdentifier ? value : item}
            </li>
        );
    }

    return (
        <ul className={elementClass("items")}>
            {renderLabel(label)}
            {items.map((item) => renderItem(item))}
        </ul>
    );
}

ItemsList.propTypes = types;
ItemsList.defaultProps = defaultProps;

export default ItemsList;
