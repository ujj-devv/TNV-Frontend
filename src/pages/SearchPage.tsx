import NavBar from "../components/global/NavBar"
import SearchResultsSection from "../components/pages/SearchPage/SearchResultsSection";
import leiData from "../util/mock/leiData.json";
import SearchAndFilter from "../components/pages/SearchPage/SearchAndFilter";
import { useParams } from "react-router-dom";

const SearchPage = () => {
    const {queryString} = useParams()
    console.log('queryString', queryString)
   
    return (
        <>
            <NavBar />
            <SearchAndFilter queryString={queryString}/>
            <SearchResultsSection searchedData={leiData} />
        </>
    )
}

export default SearchPage
