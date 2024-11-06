
type DetailCardProps = {
    data: Record<string, string | number | boolean | JSX.Element>; // Object with keys as strings and values as string, number, boolean or JSX elements
};

const DetailCard = ({ data }: DetailCardProps) => {
    return (
        <div className="border rounded-lg shadow-lg w-full mx-auto">
            <div className="mb-2 p-4 rounded-t-lg shadow w-full bg-[#32736A]">
                <h2 className="text-2xl text-white font-semibold ">Detail Card</h2>
            </div>
            {/* Render rows of key-value pairs */}
            <div className="space-y-4 p-4 ">
                {Object.entries(data).map(([key, value], index) => (
                    <div key={index} className="flex justify-between">
                        <span className="font-semibold text-gray-700">{key}:</span>
                        <span className="text-gray-500">{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailCard;
