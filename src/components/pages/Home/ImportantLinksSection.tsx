import { NavLink } from "react-router-dom";
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
              <h3 className="text-[#E6E8F3] text-lg font-semibold">
                Our Services
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/Search"
                    className="font-normal text-lg text-[#E6E8F3]"
                  >
                    Search
                  </a>
                </li>
                <li>
                  <a href="/faq" className="font-normal text-lg text-[#E6E8F3]">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/coming-soon"
                    className="font-normal text-lg text-[#E6E8F3]"
                  >
                    CDF Downloads
                  </a>
                </li>
                <li>
                  <a
                    href="/recent-posts"
                    className="font-normal text-lg text-[#E6E8F3]"
                  >
                    Recent posts
                  </a>
                </li>
                <li>
                  <a
                    href="/profile-management"
                    className="font-normal text-lg text-[#E6E8F3]"
                  >
                    Profile Management
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-6">
              <h3 className="text-[#E6E8F3] text-lg font-semibold">
                Helpful links
              </h3>

              <ul className="space-y-4">
                <li>
                  <a
                    href="/disclaimer"
                    className="font-normal text-lg text-[#E6E8F3]"
                  >
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-conditions"
                    className="font-normal text-lg text-[#E6E8F3]"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="font-normal text-lg text-[#E6E8F3]"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/cookie-policy"
                    className="font-normal text-lg text-[#E6E8F3]"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/refund-policy"
                    className="font-normal text-lg text-[#E6E8F3]"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center md:self-end w-1/2 ">
            <SearchBar
              placeholder="Search LEIs by entity name / LEI number"
              onClick={() => ""}
              onChange={() => ""}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ImportantLinksSection;
