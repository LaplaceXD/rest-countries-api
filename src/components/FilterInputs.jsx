import React from "react";
import SearchBox from "./common/SearchBox";
import SelectField from "./common/SelectField";
import { getRegions } from "../services/countriesService";

const allRegions = getRegions();

function FilterInputs({ inputData }) {
    const [filter, dispatchFilter] = inputData;
    const { search, region } = filter;

    function handleFilter(type, value) {
        dispatchFilter({ type, value });
    }

    return (
        <section className="l-flex">
            <SearchBox
                placeholder="Search for a country..."
                value={search}
                onSearch={(value) => handleFilter("search", value)}
            />
            <SelectField
                placeholder="Filter By Region"
                value={region}
                onInputChange={(value) => handleFilter("region", value)}
                options={allRegions}
            />
        </section>
    );
}

export default FilterInputs;
