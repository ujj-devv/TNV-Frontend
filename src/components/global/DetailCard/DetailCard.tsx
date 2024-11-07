import { DetailCardProps } from "./detail-card.types";

const DetailCard = ({ data, detailName }: DetailCardProps) => {
    return (
        <div className="border rounded-lg shadow-lg w-full mx-auto">
            <div className="mb-2 p-4 rounded-t-lg shadow w-full bg-[#32736A]">
                <h2 className="text-2xl text-white font-semibold uppercase">{detailName}</h2>
            </div>
           
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
