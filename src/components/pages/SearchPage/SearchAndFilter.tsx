import { useState } from "react";
import LargeHeader from "../../global/LargeHeader";
import Layout from "../../global/Layout.";
import Filter from "../../ui/Filter/Filter";
import SearchBar from "../../ui/SearchBar/SearchBar";
import countries from "../../../util/data/countries.json";
import { SearchAndFilterPropType } from "./types/search-page.types";
import { SelectOptionsType } from "../../ui/Select/select.types";
import { filterTypesArray } from "../../../util/data/select.data";
import MuiSelect from "../../ui/Select/MuiSelect";
import { SelectChangeEvent } from "@mui/material";


const SearchAndFilter = ({ queryString, onSelectChange, selectedFilter }: SearchAndFilterPropType) => {
    const [isFilter, setIsFilter] = useState(false);
    const [searchValue, setSearchValue] = useState(queryString)
    console.log('selectedFilter', selectedFilter)

    const countryArray: SelectOptionsType[] = countries.map(({ name, countryCode }) => {
        return {
            name,
            value: countryCode
        }
    })

    return (
        <div className="bg-[#F3FAF8] mb-16">
            <Layout>
                <div className="mx-16 py-16 flex flex-col gap-8">
                    <div className="flex justify-center flex-col gap-4 md:justify-start">
                        <LargeHeader text={"Main LEI Search Page"} className="text-[#2A5B55]" />
                        <p className="text-[#9EA0A0] font-normal text-base">
                            Search for a Legal Entity Identifier number or code. Searches can be performed by LEI, Legal Name, Country, and several other values.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 ">
                        <div className="w-1/2">
                            <SearchBar
                                placeholder=""
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onClick={() => ""}
                            />
                        </div>
                        <Filter onClick={() => setIsFilter(true)} />
                        <div className="flex gap-4 flex-col md:flex-row">
                            {isFilter && (
                                <div className="w-full md:w-1/3">
                                    <MuiSelect
                                        label={"Filter Type"}
                                        name="filterType"
                                        value={selectedFilter.filterType}
                                        onChange={(event, child) => onSelectChange(event as SelectChangeEvent<string>, child)}
                                        options={filterTypesArray}
                                    />
                                </div>


                            )}
                            {selectedFilter.filterType === "country" && (
                                <div className="w-full md:w-1/3">
                                    <MuiSelect
                                        label={"Select Country"}
                                        name="value"
                                        value={selectedFilter.value}
                                        onChange={(event, child) => onSelectChange(event as SelectChangeEvent<string>, child)}
                                        options={countryArray}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default SearchAndFilter;
