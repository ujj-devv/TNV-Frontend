import CheckIcon from "../../assets/svg/CheckIcon"
import Button from "../ui/Button/Button"
import { ButtonType } from "../ui/Button/button.types"

interface PricingCardPropType {
    duration: string,
    price: string,
    total: string,
    features: string[]
}
const PricingCard = ({ duration, price, total, features }: PricingCardPropType) => {
    return (
        <div className="border-2 rounded-md border-[#D8EFE9] p-4 shadow-custom-light">
            <h3 className="uppercase text-[#0F172A] font-semibold text-[20px] mb-2">{duration}</h3>
            <div className="text-[#334155] mb-6">
                <p>Starting at</p>
                <h4 className=" font-bold text-2xl">{price} <span className="text-base font-xl font-normal">/ year</span></h4>
            </div>
            <div className="w-full">
                <Button text={"APPLY"} type={ButtonType.PRIMARY} customStyles="w-full " />
            </div>
            <div className="border-y-2 my-8 p-4 border-[#D8EFE9]">
                {
                    features.map((item, index) => (
                        <div key={index} className="flex gap-4 items-center">
                            <CheckIcon />
                            <h3 className="text-base text-[#9EA0A0] font-normal">{item}</h3>
                        </div>
                    ))
                }
            </div>
            <div className="text-[#334155] font-normal text-base">
                Total 
                <h2 className="text-xl font-bold">{total}</h2>
            </div>
        </div>
    )
}

export default PricingCard
