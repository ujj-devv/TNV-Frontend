import NavBar from "../components/global/NavBar"
import SearchResultsSection from "../components/pages/SearchPage/SearchResultsSection";
import SearchAndFilter from "../components/pages/SearchPage/SearchAndFilter";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { LeiRecordParamsType } from "../store/api/types/LeiRecords.types";
import { SelectedFilterType } from "../util/types/filter.types";



const SearchPage = () => {
    const { queryString } = useParams()
    const [selectedFilter, setSelectedFilter] = useState<SelectedFilterType>({
        filterType: "",
        value: ""
    });

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setSelectedFilter((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const query = {
        searchTerm: queryString,
        ...(selectedFilter.filterType === "country" && { countryCode: selectedFilter.value })
    } as LeiRecordParamsType;

    return (
        <>
            <NavBar />
            <SearchAndFilter queryString={queryString as string} onSelectChange={handleSelectChange} selectedFilter={selectedFilter} />
            <SearchResultsSection query={query} />
        </>
    )
}

export default SearchPage
