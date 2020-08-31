import React from "react";
import { PropTypes } from 'prop-types';

const types = {
    toggleData: PropTypes.array.isRequired,
    label: PropTypes.string,
    icon: PropTypes.string,
}

function ModeSwitch({ toggleData, label, icon, ...rest }) {
    const [toggleValue, onToggle] = toggleData;

    return (
        <div {...rest} onClick={() => onToggle(!toggleValue)}>
            <i className={icon} />
            <p>{label}</p>
        </div>
    );
}

ModeSwitch.propTypes = types;

export default ModeSwitch;
