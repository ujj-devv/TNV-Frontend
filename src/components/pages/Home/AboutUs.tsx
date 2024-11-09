import { aboutUs } from "../../../util/data/aboutUs.data";
import LargeHeader from "../../global/LargeHeader";
import Layout from "../../global/Layout.";
import LeiDetailCard from "./components/LeiDetailCard";

const AboutUs = () => {
  return (
    <>
      <Layout customClass=" flex flex-col gap-16 md:flex-row md:gap-32 p-8 px-32 md:py-16">
        <LargeHeader
          text={"About LEI International Pvt. Ltd"}
          className="text-[#373656] leading-[72px] text-center md:text-left"
        />
        <div className="flex flex-col gap-12">
          {aboutUs.map(({ name, description }) => (
            <LeiDetailCard key={name} name={name} description={description} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default AboutUs;
