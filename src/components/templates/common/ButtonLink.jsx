import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const types = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    to: PropTypes.string,
};

function ButtonLink({ to, icon, label }) {
    return (
        <Link to={to}>
            <button>
                {icon && <i className={icon} />}
                {label}
            </button>
        </Link>
    );
}

ButtonLink.propTypes = types;

export default ButtonLink;
