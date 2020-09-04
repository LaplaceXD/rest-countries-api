import React from "react";
import SearchBox from "./common/SearchBox";
import SelectField from "./common/SelectField";
import { getRegions } from "../../services/countriesService";

const allRegions = getRegions();

function FilterInputs({ inputData }) {
    const [filter, dispatchFilter] = inputData;
    const { search, region } = filter;

    function handleFilter({ name: type, value }) {
        dispatchFilter({ type, value });
    }

    return (
        <section className="l-flex-filter">
            <SearchBox
                placeholder="Search for a country..."
                value={search}
                name="search"
                onSearch={handleFilter}
            />
            <SelectField
                placeholder="Filter By Region"
                value={region}
                name="region"
                onInputChange={handleFilter}
                options={allRegions}
            />
        </section>
    );
}

export default FilterInputs;
