import { useState } from "react"
import { pricing } from "../../../util/data/pricing.data"
import LargeHeader from "../../global/LargeHeader"
import PricingCard from "../../global/PricingCard"
import { ButtonType } from "../../ui/Button/button.types"
import ButtonGroup from "../../global/ButtonToggleGroup"

export type ButtonGroupType = {
  id: number,
  text: string,
  type: ButtonType
}

const buttons:ButtonGroupType[] = [
  { id: 1, text: "Application price", type: ButtonType.PRIMARY },
  { id: 2, text: "Renewal price", type: ButtonType.PRIMARY },
];

const PricingSection = () => {
  const [activeButton, setActiveButton] = useState(1); // Track the active button

  return (
    <div className="">
      <div className="text-center mb-32 p-32 bg-[#F3FAF8]">
        <LargeHeader text="Simple and transparent pricing" className="text-[#2A5B55] mb-4" />
        <p className="text-[#9EA0A0] font-normal text-base mb-20">TNV LEI enables you to apply for a code
          for up to five years. TNV LEI s customers only pay for applying for or renewal of the LEI code.
          Updating data, transferring the LEI code or other activities related to the code are all free
          of charge for our customers.
        </p>
        <p className="text-[#0F172A] font-medium text-xl">NO HIDDEN FEES! ALL FEES ARE INCLUDED IN OUR LEI PRICE, GST WILL BE ADDED.</p>
      </div>
      <div className="flex justify-end gap-4 px-32">
        <ButtonGroup buttons={buttons} setActiveButton={setActiveButton} activeButton={activeButton} />
      </div>
      <div className="flex gap-12 px-32 py-16">
        {
          pricing.map(({ key, duration, price, total, features }) => (
            <PricingCard
              key={key}
              duration={duration}
              price={price}
              total={total}
              features={features}
            />
          ))
        }
      </div>

    </div>
  )
}

export default PricingSection
