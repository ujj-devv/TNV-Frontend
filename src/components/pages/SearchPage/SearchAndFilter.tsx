import LargeHeader from "../../global/LargeHeader"
import Layout from "../../global/Layout."
import SearchBar from "../../ui/SearchBar/SearchBar"

const SearchAndFilter = ({ queryString }: { queryString: string }) => {
    return (
        <div className="bg-[#F3FAF8] mb-16">
            <Layout>
                <div className="mx-16 py-16 flex flex-col gap-8">
                    <div className="flex justify-center flex-col gap-4 md:justify-start">
                        <LargeHeader text={"Main LEI Search Page"} className="text-[#2A5B55]" />
                        <p className="text-[#9EA0A0] font-normal text-base">Search for a Legal Entity Identifier number or code. Searches can be performed by LEI, Legal Name, Country and several other values.</p>
                    </div>
                    <div className="flex flex-col gap-6 md:flex-row justify-between items-center">
                        <div className="w-1/2">
                            <SearchBar
                                placeholder={""}
                                value={queryString}
                                onClick={() => ""}
                                onChange={() => ""}
                            />
                        </div>
                        <select className="p-2 border rounded">
                            <option>Sort by Relevance</option>
                            <option>Sort by Date</option>
                        </select>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default SearchAndFilter
