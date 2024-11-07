import { useState } from "react";
import LargeHeader from "../../global/LargeHeader";
import Layout from "../../global/Layout.";
import Filter from "../../ui/Filter/Filter";
import SearchBar from "../../ui/SearchBar/SearchBar";
import countries from "../../../util/data/countries.json";
import { SelectedFilterType } from "../../../util/types/filter.types";

type SearchAndFilterPropType = {
    queryString: string,
    onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    selectedFilter: SelectedFilterType
}

const SearchAndFilter = ({ queryString, onSelectChange, selectedFilter }: SearchAndFilterPropType) => {
    const [isFilter, setIsFilter] = useState(false);
    const [searchValue, setSearchValue] = useState(queryString)

    console.log('selectedFilter', selectedFilter)
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
                        {isFilter && (
                            <select
                                name="filterType"
                                value={selectedFilter.filterType}
                                onChange={(e) => onSelectChange(e)}
                            >
                                <option value="">Select Filter</option>
                                <option value="country">Country</option>
                                <option value="lei">LEI number</option>
                            </select>
                        )}
                        {selectedFilter.filterType === "country" && (
                            <select
                                name="value"
                                value={selectedFilter.value}
                                onChange={(e) => onSelectChange(e)}
                            >
                                <option value="">Select Country</option>
                                {countries.map(({ name, countryCode }) => (
                                    <option key={countryCode} value={countryCode}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                        )}
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default SearchAndFilter;
