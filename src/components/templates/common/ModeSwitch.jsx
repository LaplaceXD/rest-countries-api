import React from "react";
import { PropTypes } from "prop-types";
import { classBlock } from "../../../utils/styleMethods";

const types = {
    onToggle: PropTypes.func.isRequired,
    label: PropTypes.string,
    icon: PropTypes.string,
    classBlock: PropTypes.string,
};

function ModeSwitch({ onToggle, label, icon, classBlock: block }) {
    const classElement = classBlock(block);

    return (
        <div className={classBlock} onClick={onToggle}>
            <i className={`${icon} ${classElement("icon")}`} />
            <p className={classElement("label")}>{label}</p>
        </div>
    );
}

ModeSwitch.propTypes = types;

export default ModeSwitch;
