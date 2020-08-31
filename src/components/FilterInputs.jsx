import React, { useEffect, useState } from "react";
import SearchBox from "./common/SeachBox";
import SelectField from "./common/SelectField";
import { getRegions } from "../services/countriesService";

const allRegions = getRegions();

function FilterInputs({ search: searchInfo, region: regionInfo }) {
    const [search, setSearch] = searchInfo;
    const [region, setRegion] = regionInfo;

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
