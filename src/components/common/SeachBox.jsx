import React from "react";

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

export default SearchBox;
