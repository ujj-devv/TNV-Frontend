import { leiBenefits } from "../../../util/data/leiBenefits.data";
import LargeHeader from "../../global/LargeHeader";
import LeiDetailCard from "./components/LeiDetailCard";

const LEIBenefitsOverview = () => {
  return (
    <div className="p-32">
      <div className="text-center mb-32">
        <LargeHeader text="Why your business needs an LEI" className="text-black" />
      </div>
      <div className="flex justify-between">
      <div className="">
        {
          leiBenefits.map(({ name, description }) => (
            <LeiDetailCard key={name} name={name} description={description} />
          ))
        }
      </div>
      <div className="bg-[#F3F0F0]"></div>
      </div>

    </div>
  );
};

export default LEIBenefitsOverview;
