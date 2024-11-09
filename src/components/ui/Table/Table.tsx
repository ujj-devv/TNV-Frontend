import { LeiTableDataType, TablePropTypes } from "./table.types";


const Table = ({ columns, data, rowKey, onRowClick, customStyles }:TablePropTypes) => {
  return (
    <div className={`overflow-x-auto ${customStyles?.container  || ""}`}>
      <table className={`min-w-full border-collapse ${customStyles?.table || ""}`}>
        {/* Table Header */}
        <thead>
          <tr className={`${customStyles?.headerRow || "bg-gray-200"}`}>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`px-4 py-2 text-left ${customStyles?.headerCell || "text-gray-700 font-semibold"}`}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data?.map((row, rowIndex) => (
            <tr
              key={ rowIndex}
              className={`${customStyles?.row || "border-b hover:bg-gray-100 cursor-pointer"}`}
              onClick={() => onRowClick(row)}
            >
              {columns.map((column) => {
                return(
                <td
                  key={column.key}
                  className={`px-4 py-2 ${customStyles?.cell || "text-gray-600"}`}
                >
                  {row[column.key as keyof LeiTableDataType] }
                </td>
              )})}
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Optional Pagination */}
      {/* {pagination && pagination.pageSize && (
        <div className="mt-4 flex items-center justify-center space-x-2">
          <button onClick={pagination.onPrev} disabled={pagination.currentPage === 1}>
            Prev
          </button>
          <span>
            Page {pagination.currentPage} of {Math.ceil(data.length / pagination.pageSize)}
          </span>
          <button
            onClick={pagination.onNext}
            disabled={pagination.currentPage === Math.ceil(data.length / pagination.pageSize)}
          >
            Next
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Table;
