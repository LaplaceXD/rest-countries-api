import React from "react";
import { PropTypes } from "prop-types";

const types = {
    onToggle: PropTypes.func.isRequired,
    label: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.object,
};

function ModeSwitch({ onToggle, label, icon, className }) {
    const { i, p, div } = className;

    return (
        <div className={div} onClick={onToggle}>
            <i className={`${icon} ${i}`} />
            <p className={p}>{label}</p>
        </div>
    );
}

ModeSwitch.propTypes = types;

export default ModeSwitch;
