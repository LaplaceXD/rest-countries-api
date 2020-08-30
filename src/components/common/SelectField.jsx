import React from "react";
import { PropTypes } from 'prop-types';

const types = {
    placeholder: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    value: PropTypes.string,
};

function SelectField({ placeholder, options, value, onInputChange }) {
    return (
        <select className="select" value={value} onChange={(e) => onInputChange(e.currentTarget.value)}>
            <option style={{ display: "none" }}>{placeholder}</option>
            {options.map((option) => (
                <option key={option}>{option}</option>
            ))}
        </select>
    );
}

SelectField.propTypes = types;

export default SelectField;
