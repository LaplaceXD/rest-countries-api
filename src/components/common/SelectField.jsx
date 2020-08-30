import React from "react";

function SelectField({ placeholder, options, onInputChange }) {
    return (
        <select className="region" onChange={(e) => onInputChange(e.currentTarget.value)}>
            <option style={{ display: "none" }}>{placeholder}</option>
            {options.map((option) => (
                <option key={option}>{option}</option>
            ))}
        </select>
    );
}

export default SelectField;
