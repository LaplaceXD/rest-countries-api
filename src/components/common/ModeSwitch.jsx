import React from "react";
import { PropTypes } from 'prop-types';

const types = {
    toggleData: PropTypes.array.isRequired,
    label: PropTypes.string,
    icon: PropTypes.string,
}

function ModeSwitch({ value, onToggle, label, icon, ...rest }) {
    return (
        <div {...rest} onClick={() => onToggle(!value)}>
            <i className={icon} />
            <p>{label}</p>
        </div>
    );
}

ModeSwitch.propTypes = types;

export default ModeSwitch;
