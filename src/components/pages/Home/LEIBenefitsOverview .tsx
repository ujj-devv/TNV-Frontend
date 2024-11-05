import { leiBenefits } from "../../../util/data/leiBenefits.data";
import Layout from "../../global/Layout.";
import LeiDetailCard from "./components/LeiDetailCard";

const LEIBenefitsOverview = () => {
  return (
    <div className="p-32">
      <Layout>
        <div className="text-center mb-32">
          <h1 className="font-bold text-5xl">Why your business needs an <span className="text-[#32736A]">LEI</span></h1>
        </div>
        <div className="flex gap-16 justify-between">
          <div className="flex flex-col gap-16">
            {
              leiBenefits.map(({ name, description }) => (
                <LeiDetailCard key={name} name={name} description={description} />
              ))
            }
          </div>
          <div className="bg-[#F3F0F0] hidden w-1/2 md:block"></div>
        </div>
      </Layout>
    </div>
  );
};

export default LEIBenefitsOverview;
