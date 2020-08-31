import React from "react";
import { PropTypes } from "prop-types";

const defaultProps = {
    placeholder: "Search...",
    name: "search",
};

const types = {
    placeholder: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    value: PropTypes.string,
    name: PropTypes.string,
};

function SearchBox({ placeholder, onSearch, name, value }) {
    return (
        <div className="search">
            <i className="fas fa-search search__icon" />
            <input
                type="text"
                value={value}
                name={name}
                placeholder={placeholder}
                className="search__box"
                onChange={(e) => onSearch(e.currentTarget)}
            />
        </div>
    );
}

SearchBox.propTypes = types;
SearchBox.defaultProps = defaultProps;

export default SearchBox;
