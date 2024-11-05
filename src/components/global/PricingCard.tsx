import CheckIcon from "../../assets/svg/CheckIcon";
import Button from "../ui/Button/Button";
import { ButtonType } from "../ui/Button/button.types";

interface PricingCardPropType {
    duration: string,
    price: string,
    total: string,
    features: string[]
}

const PricingCard = ({ duration, price, total, features }: PricingCardPropType) => {
    return (
        <div className="border-2 rounded-md border-[#D8EFE9] p-4 md:p-6 shadow-custom-light flex flex-col justify-between min-h-[400px] md:min-h-[450px] w-full max-w-xs md:max-w-sm overflow-hidden mx-auto">
            <h3 className="uppercase text-[#0F172A] font-semibold text-[18px] md:text-[20px] mb-2">{duration}</h3>
            <div className="text-[#334155] mb-4 md:mb-6">
                <p>Starting at</p>
                <h4 className="font-bold text-xl md:text-2xl">
                    {price} <span className="text-base font-normal">/ year</span>
                </h4>
            </div>
            <div className="w-full mb-4">
                <Button text={"APPLY"} type={ButtonType.PRIMARY} customStyles="w-full" onClick={() => ""} />
            </div>
            <div className="flex-grow border-y-2 my-4 py-4 border-[#D8EFE9]">
                {features.map((item, index) => (
                    <div key={index} className="flex gap-2 md:gap-4 items-center">
                        <CheckIcon />
                        <h3 className="text-sm md:text-base text-[#9EA0A0] font-normal break-words">{item}</h3>
                    </div>
                ))}
            </div>
            <div className="text-[#334155] font-normal text-sm md:text-base">
                Total
                <h2 className="text-lg md:text-xl font-bold">{total}</h2>
            </div>
        </div>
    );
};

export default PricingCard;
