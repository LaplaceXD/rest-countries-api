import React from "react";
import { PropTypes } from "prop-types";

const types = {
    onToggle: PropTypes.func.isRequired,
    label: PropTypes.string,
    icon: PropTypes.string,
    classBlock: PropTypes.string,
};

function ModeSwitch({ onToggle, label, icon, classBlock }) {
    return (
        <div className={classBlock} onClick={onToggle}>
            <i className={`${icon} ${classBlock}__icon`} />
            <p className={`${classBlock}__label`}>{label}</p>
        </div>
    );
}

ModeSwitch.propTypes = types;

export default ModeSwitch;
