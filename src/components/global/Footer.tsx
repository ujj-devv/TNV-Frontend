import { NavLink } from "react-router-dom";
import { footerData, socialLinks } from "../../util/data/footer.data";
import { helpfulLinks, linksServices } from "../../util/data/services.data";
import Layout from "./Layout.";
import SearchBar from "../ui/SearchBar/SearchBar";

const Footer = () => {
  return (
    <div className="bg-[#2C2B40] py-4 ">
      <Layout>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 border-b-2 border-black pb-5 ">
            <div className="flex  gap-8 px-10">
              <div className="flex flex-col items-center md:items-start gap-4 md:gap-6">
                {" "}
                <h3 className="text-white text-lg font-semibold">
                  Our Services
                </h3>
                {linksServices.map(({ name, id }) => (
                  <NavLink
                    to={id}
                    key={id}
                    className="text-[#E6E8F3] font-normal text-sm md:text-base"
                  >
                    {name}
                  </NavLink>
                ))}
              </div>
              <div className="flex flex-col items-center md:items-start gap-4 md:gap-6">
                <h3 className="text-white text-lg font-semibold">
                  Helpful links
                </h3>{" "}
                {helpfulLinks.map(({ name, id }) => (
                  <NavLink
                    className="text-[#E6E8F3] font-normal text-sm md:text-base"
                    to={id}
                    key={id}
                  >
                    {name}
                  </NavLink>
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left">
                {footerData.map(({ id, content }) => (
                  <h5
                    className="text-[#E6E8F3] font-normal text-sm md:text-base"
                    key={id}
                  >
                    {content}
                  </h5>
                ))}
              </div>
              <div className="flex justify-center h-16 w-full px-10 mt-20 ">
                <SearchBar
                  placeholder="Search LEIs by entity name / LEI number"
                  onClick={() => ""}
                  onChange={() => ""}
                />
              </div>
            </div>
          </div>
          <div className="flex text-white justify-between m-5">
            <div>Copyright © 2024 TNV LEI</div>
            <div className="flex gap-4 md:gap-8 justify-center md:justify-start mt-6 md:mt-0">
              {socialLinks.map(({ id, icon: Icon }) => (
                <div
                  key={id}
                  className="bg-[#F4F5FA] rounded-full flex justify-center items-center w-7 h-7  hover:bg-[#E6E8F3] transition-all duration-300"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
