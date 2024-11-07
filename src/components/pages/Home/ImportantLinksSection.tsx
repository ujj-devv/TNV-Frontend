import { helpfulLinks, linksServices } from "../../../util/data/services.data";
import Layout from "../../global/Layout.";
import SearchBar from "../../ui/SearchBar/SearchBar";

const ImportantLinksSection = () => {
  return (
    <div className="bg-[#373656]">
      <Layout>
        <div className=" flex flex-col items-center md:flex-row md:justify-between p-8 md:p-16 lg:px-32 gap-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-6">
              <h3 className="text-[#E6E8F3] text-lg font-semibold">Our Services</h3>
              {linksServices.map((item, index) => (
                <h4 key={index} className="font-normal text-lg text-[#E6E8F3]">{item}</h4>
              ))}
            </div>
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-6">
              <h3 className="text-[#E6E8F3] text-lg font-semibold">Helpful links</h3>
              {helpfulLinks.map((item, index) => (
                <h4 key={index} className="font-normal text-lg text-[#E6E8F3]">{item}</h4>
              ))}
            </div>
          </div>
          <div className="flex justify-center md:self-end w-1/2 ">
            <SearchBar placeholder="Search LEIs by entity name / LEI number" onClick={() => ""} onChange={() => ""} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ImportantLinksSection;
