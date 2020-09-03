import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { classBlock } from "../../../utils/styleMethods";

const types = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    to: PropTypes.string,
};

function ButtonLink({ to, icon, label, classBlock: block }) {
    const classElement = classBlock(block);

    return (
        <Link to={to}>
            <button className={classElement("button")}>
                {icon && <i className={`${icon} ${classElement("icon")}`} />}
                {label}
            </button>
        </Link>
    );
}

ButtonLink.propTypes = types;

export default ButtonLink;
