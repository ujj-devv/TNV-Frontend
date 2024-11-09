import { footerData, socialLinks } from "../../util/data/footer.data";
import Layout from "./Layout.";

const Footer = () => {
  return (
    <div className="bg-[#2C2B40]">
      <Layout>
        <div className=" p-8 md:px-32 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left">
          <div className="flex flex-col gap-4 md:gap-6">
            {footerData.map(({ id, content }) => (
              <h5 className="text-[#E6E8F3] font-normal text-sm" key={id}>
                {content}
              </h5>
            ))}
          </div>
          <div className="md:self-end flex gap-4 md:gap-8">
            {socialLinks.map(({ id, icon: Icon }) => (
              <div
                key={id}
                className="bg-[#F4F5FA] rounded-[4px] flex justify-center items-center w-[40px] h-[40px]"
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
