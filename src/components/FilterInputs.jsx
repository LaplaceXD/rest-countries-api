import React from "react";
import SearchBox from "./common/SearchBox";
import SelectField from "./common/SelectField";
import { getRegions } from "../services/countriesService";

const allRegions = getRegions();

function FilterInputs({ searchData, regionData }) {
    const [search, setSearch] = searchData;
    const [region, setRegion] = regionData;

    return (
        <section className="l-flex">
            <SearchBox
                placeholder="Search for a country..."
                value={search}
                onSearch={(value) => {
                    setSearch(value);
                    setRegion("");
                }}
            />
            <SelectField
                placeholder="Filter By Region"
                value={region}
                onInputChange={(value) => {
                    setRegion(value);
                    setSearch("");
                }}
                options={allRegions}
            />
        </section>
    );
}

export default FilterInputs;
