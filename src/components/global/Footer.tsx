import { footerData, socialLinks } from "../../util/data/footer.data";
import ImportantLinksSection from "../pages/Home/ImportantLinksSection";
import Layout from "./Layout.";

const Footer = () => {
  return (
    <div className="bg-[#2C2B40]">
      <ImportantLinksSection />
      <Layout>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-16 px-6 md:px-32 pt-4">
          {/* Footer Links Section */}
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

          {/* Social Icons Section */}
          <div className="flex gap-4 md:gap-8 justify-center md:justify-start mt-6 md:mt-0">
            {socialLinks.map(({ id, icon: Icon }) => (
              <div
                key={id}
                className="bg-[#F4F5FA] rounded-full flex justify-center items-center w-10 h-10 md:w-12 md:h-12 hover:bg-[#E6E8F3] transition-all duration-300"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
