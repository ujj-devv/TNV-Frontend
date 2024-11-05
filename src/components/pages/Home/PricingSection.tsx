import { useState } from "react"
import { applicationPricing, renewalPricing } from "../../../util/data/pricing.data"
import PricingCard from "../../global/PricingCard"
import { ButtonType } from "../../ui/Button/button.types"
import ButtonGroup from "../../global/ButtonToggleGroup/ButtonToggleGroup"
import Layout from "../../global/Layout."
import { ButtonGroupType } from "../../global/ButtonToggleGroup/ButtonGroup.types"



const buttons: ButtonGroupType[] = [
  { id: 1, text: "Application price", type: ButtonType.PRIMARY },
  { id: 2, text: "Renewal price", type: ButtonType.PRIMARY },
];

const PricingSection = () => {
  const [activeButton, setActiveButton] = useState(1); // Track the active button

  return (
    <>
      <div className="text-center mb-8 p-8 md:px-32 md:py-16 bg-[#F3FAF8]">
        <Layout>
          <h1 className="font-bold text-5xl text-[#2A5B55] mb-4">Simple and <span className="text-[#D8EFE9]">transparent</span> pricing</h1>
          <p className="text-[#9EA0A0] font-normal text-base mb-20">TNV LEI enables you to apply for a code
            for up to five years. TNV LEI s customers only pay for applying for or renewal of the LEI code.
            Updating data, transferring the LEI code or other activities related to the code are all free
            of charge for our customers.
          </p>
          <p className="text-[#0F172A] font-medium text-xl">NO HIDDEN FEES! ALL FEES ARE INCLUDED IN OUR LEI PRICE, GST WILL BE ADDED.</p>
        </Layout>
      </div>
      <div className="px-32">
        <Layout>
          <div className="flex justify-center md:justify-end gap-4">
            <ButtonGroup buttons={buttons} setActiveButton={setActiveButton} activeButton={activeButton} />
          </div>
        </Layout>
      </div>
      <Layout>
        <div className="flex flex-col md:flex-row gap-12 px-32 py-8">
          {
            activeButton === 1 ? applicationPricing.map(({ key, duration, price, total, features }) => (
              <PricingCard
                key={key}
                duration={duration}
                price={price}
                total={total}
                features={features}
              />
            )) : renewalPricing.map(({ key, duration, price, total, features }) => (
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
      </Layout>

    </>
  )
}

export default PricingSection
