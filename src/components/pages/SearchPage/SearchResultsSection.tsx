import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../ui/Table/Table";
import Layout from "../../global/Layout.";
import { useGetLeiRecordsQuery } from "../../../store/api/glief/lei-records.slice";
import Skeleton from "react-loading-skeleton";
import {  LeiRecord, LeiRecordParamsType } from "../../../store/api/types/LeiRecords.types";
import { LeiTableDataType } from "../../ui/Table/table.types";

const SearchResultsSection = ({ query }:{query:LeiRecordParamsType}) => {
    const { data, error, isLoading } = useGetLeiRecordsQuery(query);
    console.log('data, error, isLoading, searchedData from api', data, error, isLoading, query);
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    const columns = [
        { key: "lei", label: "LEI ID" },
        { key: "legalName", label: "Legal Name" },
        { key: "country", label: "Country" },
        { key: "status", label: "Registration Status" },
    ];

    const simplifyLeiRecords = (records:LeiRecord[]) => {
        return records.map(record => ({
            id: record.id, 
            lei: record?.attributes?.lei,
            legalName: record?.attributes?.entity?.legalName?.name,
            status: record?.attributes?.entity?.status,
            country: record?.attributes?.entity?.legalAddress?.country,
        }));
    };

    const findRecordWithLeiId = (records: LeiRecord[], id: string): LeiRecord | undefined => {
        return records.find((record) => record.id === id);
      };
      

    const paginatedData:LeiTableDataType[] = data ? simplifyLeiRecords(data?.data as LeiRecord[] ).slice((currentPage - 1) * pageSize, currentPage * pageSize) : [];

    const handleRowClick = (row:LeiTableDataType) => {
        const fullRecord = findRecordWithLeiId(data?.data as LeiRecord[], row.lei);
        navigate(`/view/${row.lei}`, { state: { rowData: fullRecord } });
    };

    // Display loading skeleton for table
    const renderSkeleton = () => (
        <div className="w-full">
            <Skeleton count={5} height={50} />
        </div>
    );

    return (
        <Layout>
            <div className="flex justify-center items-center m-16">
                {isLoading ? renderSkeleton() : (
                    <>
                        { paginatedData?.length> 0 && <Table
                            columns={columns}
                            data={paginatedData}
                            rowKey="lei"
                            onRowClick={handleRowClick}
                            customStyles={{
                                container: "border border-gray-300 rounded-md shadow w-full",
                                table: "text-left",
                                headerRow: "bg-[#32736A]",
                                headerCell: "text-white font-bold",
                                row: "hover:bg-[#F3FAF8] cursor-pointer",
                                cell: "text-gray-800"
                            }}
                            pagination={{
                                currentPage,
                                pageSize,
                                onPrev: () => setCurrentPage((prev) => Math.max(prev - 1, 1)),
                                onNext: () => setCurrentPage((prev) => prev + 1)
                            }}
                        />}

                        {/* No Results Message */}
                        {(!data || paginatedData.length === 0) && (
                            <p className="text-center text-2xl font-semibold text-[#32736A] mt-8">No results found.</p>
                        )}
                    </>
                )}
            </div>
        </Layout>
    );
};

export default SearchResultsSection;
