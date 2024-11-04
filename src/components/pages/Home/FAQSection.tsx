import { faq } from "../../../util/data/faq.data"
import Accordion from "../../global/Accordian"
import Button from "../../ui/Button/Button"
import { ButtonType } from "../../ui/Button/button.types"

const FAQSection = () => {
  return (
    <div className="flex p-32 gap-8">
      <h1 className="font-bold text-[64px] text-[#BED2E3]">Frequently asked questions</h1>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-12">
          <Accordion accordionData={faq} />
        </div>
        <Button text={"VIEW MORE"} type={ButtonType.PRIMARY} customStyles="w-full" onClick={() => ""} />
      </div>

    </div>
  )
}

export default FAQSection
