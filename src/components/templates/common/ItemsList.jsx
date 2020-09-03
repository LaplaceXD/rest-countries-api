import React from "react";
import { PropTypes } from "prop-types";
import { classBlock } from "../../../utils/styleMethods";

const defaultProps = {
    withIdentifier: true,
};

const types = {
    label: PropTypes.string,
    classBlock: PropTypes.string,
    withIdentifier: PropTypes.bool,
};

function ItemsList({ items, label, classBlock: block, withIdentifier }) {
    const classElement = classBlock(block);

    function renderLabel(label) {
        if (!label) return null;

        return (
            <li>
                <h2 className={classElement("label")}>{label}</h2>
            </li>
        );
    }

    function renderIdentifier(key) {
        const identifier = `${key}: `;
        return <span className={classElement("item--identifier")}>{identifier}</span>;
    }

    function renderItem(item) {
        const { key, value } = item;

        return (
            <li key={withIdentifier ? key : item} className={classElement("item")}>
                {withIdentifier && renderIdentifier(key)}
                {withIdentifier ? value : item}
            </li>
        );
    }

    return (
        <ul className={classElement("items")}>
            {renderLabel(label)}
            {items.map((item) => renderItem(item))}
        </ul>
    );
}

ItemsList.propTypes = types;
ItemsList.defaultProps = defaultProps;

export default ItemsList;
