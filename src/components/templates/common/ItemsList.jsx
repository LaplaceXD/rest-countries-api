import React from "react";
import { PropTypes } from "prop-types";

const defaultProps = {
    spanned: true,
};

const types = {
    label: PropTypes.string.isRequired,
    className: PropTypes.object,
    spanned: PropTypes.bool,
};

function ItemsList({ items, label, className, spanned }) {
    const { ul, li, h2, span } = className;

    function renderLabel(label) {
        if (!label) return null;

        return (
            <li>
                <h2 className={h2}>{label}</h2>
            </li>
        );
    }

    function renderItem(item, withSpan) {
        const { key, value } = item;

        return (
            <li key={withSpan ? key : item} className={li}>
                {withSpan && <span className={span}>{`${key}: `}</span>}
                {withSpan ? value : item}
            </li>
        );
    }

    return (
        <ul className={ul}>
            {renderLabel(label)}
            {items.map((item) => renderItem(item, spanned))}
        </ul>
    );
}

ItemsList.propTypes = types;
ItemsList.defaultProps = defaultProps;

export default ItemsList;
