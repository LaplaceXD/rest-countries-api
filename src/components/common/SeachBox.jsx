import React from "react";
import { PropTypes } from "prop-types";

const defaultProps = {
    placeholder: "Search...",
};

const types = {
    placeholder: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
};

function SearchBox({ placeholder, onSearch }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="search-box"
            onChange={(e) => onSearch(e.currentTarget.value)}
        />
    );
}

SearchBox.propTypes = types;
SearchBox.defaultProps = defaultProps;

export default SearchBox;
