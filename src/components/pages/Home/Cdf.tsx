import Layout from "../../global/Layout.";

function Cdf() {
  const data = [
    { date: "2024-11-06", LEI_CDF: 2, RR_CDF: 0, RE_CDF: 4 },
    { date: "2024-11-05", LEI_CDF: 1, RR_CDF: 3, RE_CDF: 0 },
    { date: "2024-11-04", LEI_CDF: 0, RR_CDF: 2, RE_CDF: 1 },
  ];
  return (
    <Layout customClass="flex flex-col items-center gap-16 p-8 md:px-8 md:py-8">
      <div className="overflow-x-auto bg-[#373656] p-8 rounded-lg">
        <table className="min-w-full table-auto text-white">
          <thead className="">
            <tr>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">LEI-CDF</th>
              <th className="py-2 px-4 text-left">RR-CDF</th>
              <th className="py-2 px-4 text-left">RE-CDF</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className=" border-b border-gray-600">
                <td className="py-2 px-4">{row.date}</td>
                <td className="py-2 px-4">
                  <button
                    className={`text-sm ${
                      row.LEI_CDF > 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    Download ({row.LEI_CDF} Records)
                  </button>
                </td>
                <td className="py-2 px-4">
                  <button
                    className={`text-sm ${
                      row.RR_CDF > 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    Download ({row.RR_CDF} Records)
                  </button>
                </td>
                <td className="py-2 px-4">
                  <button
                    className={`text-sm ${
                      row.RE_CDF > 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    Download ({row.RE_CDF} Records)
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Cdf;
