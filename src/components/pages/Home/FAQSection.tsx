import { faq } from "../../../util/data/faq.data"
import Accordion from "../../global/Accordian"
import Layout from "../../global/Layout."
import Button from "../../ui/Button/Button"
import { ButtonType } from "../../ui/Button/button.types"

const FAQSection = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row p-8 p-16 lg:px-32 gap-8">
        <div>
          <h2 className="font-bold text-[64px] text-center md:text-left text-[#BED2E3]">Frequently asked questions</h2>
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-12">
            <Accordion accordionData={faq} />
          </div>
          <Button text={"VIEW MORE"} type={ButtonType.PRIMARY} customStyles="w-full" onClick={() => ""} />
        </div>
      </div>
    </Layout>
  )
}

export default FAQSection
