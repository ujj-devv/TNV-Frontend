import { helpfulLinks, linksServices } from "../../../util/data/services.data"
import SearchBar from "../../ui/SearchBar/SearchBar"

const ImportantLinksSection = () => {
  return (
    <div className="bg-[#373656] flex justify-between p-32">
      <div className=" flex gap-16">
        <div className="flex flex-col gap-6">
          <h3 className="text-[#E6E8F3] text-lg font-semibold">Our Services</h3>
          {
            linksServices.map((item, index) => (
              <h4 key={index} className="font-normal text-lg text-[#E6E8F3]">{item}</h4>
            ))
          }
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-[#E6E8F3] text-lg font-semibold">Helpful links</h3>
          {
            helpfulLinks.map((item, index) => (
              <h4 key={index} className="font-normal text-lg text-[#E6E8F3]">{item}</h4>
            ))
          }
        </div>
      </div>
      <div className="self-end">
        <SearchBar placeholder="Search LEIs by entity name / LEI number" />
      </div>
    </div>
  )
}

export default ImportantLinksSection
