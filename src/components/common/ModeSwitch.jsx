import React from "react";

function ModeSwitch({ toggleData, label, icon, ...rest }) {
    const [toggleValue, onToggle] = toggleData;

    return (
        <div {...rest} onClick={() => onToggle(!toggleValue)}>
            <i className={icon} />
            <p>{label}</p>
        </div>
    );
}

export default ModeSwitch;
