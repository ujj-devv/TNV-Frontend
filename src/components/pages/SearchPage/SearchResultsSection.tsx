import { useState } from "react";
import Table from "../../ui/Table/Table";
import Layout from "../../global/Layout.";
import { useGetLeiRecordsQuery } from "../../../store/api/glief/lei-records.slice";

const SearchResultsSection = ({ searchedData = [] }) => {
    const { data = { data: [] }, error, isLoading } = useGetLeiRecordsQuery({});
    console.log('data from API', data);

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    const columns = [
        { key: "lei", label: "LEI ID" },
        { key: "legalName", label: "Legal Name" },
        { key: "country", label: "Country" },
        { key: "status", label: "Registration Status" },
    ];

    const simplifyLeiRecords = (records) => {
        return records.map(record => ({
            lei: record?.attributes?.lei,
            legalName: record?.attributes?.entity?.legalName?.name,
            status: record?.attributes?.entity?.status,
            country: record?.attributes?.entity?.legalAddress?.country,
        }));
    };

    const paginatedData = simplifyLeiRecords(data.data).slice((currentPage - 1) * pageSize, currentPage * pageSize);
    
    const handleRowClick = (row) => `/view/${row.lei}`;

    return (
        <Layout>
            <div className="flex justify-center items-center m-16">
                <Table
                    columns={columns}
                    data={paginatedData}
                    rowKey="lei"
                    onRowClick={(row) => handleRowClick(row)}
                    customStyles={{
                        container: "border border-gray-300 rounded-md shadow w-full",
                        table: "text-left",
                        headerRow: "bg-[#32736A]",
                        headerCell: "text-white font-bold",
                        row: "hover:bg-blue-50 cursor-pointer",
                        cell: "text-gray-800"
                    }}
                    pagination={{
                        currentPage,
                        pageSize,
                        onPrev: () => setCurrentPage((prev) => Math.max(prev - 1, 1)),
                        onNext: () => setCurrentPage((prev) => prev + 1)
                    }}
                />
                
                {/* No Results Message */}
                {searchedData.length === 0 && (
                    <p className="text-center text-gray-600 mt-8">No results found.</p>
                )}
            </div>
        </Layout>
    );
};

export default SearchResultsSection;
