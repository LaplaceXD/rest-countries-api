import React from "react";
import { PropTypes } from "prop-types";
import { classBlock } from "../../utils/styleMethods";
import { shorten } from "../../utils/auxilliaryMethods";
import ButtonLink from "./common/ButtonLink";

const defaultProps = {
    length: 10,
};

const types = {
    block: PropTypes.string,
    label: PropTypes.string,
    items: PropTypes.array.isRequired,
    length: PropTypes.number.isRequired,
};

function ButtonGrid({ classBlock: block, label, items, length }) {
    const classElement = classBlock(block);

    return (
        <div className={block}>
            <h3 className={classElement("title")}>{label}</h3>
            {items.map((item) => (
                <ButtonLink
                    key={item}
                    to={`/country/${item[0]}`}
                    label={shorten(item[1], length)}
                    classBlock={block}
                />
            ))}
        </div>
    );
}

ButtonGrid.propTypes = types;
ButtonGrid.defaultProps = defaultProps;

export default ButtonGrid;
