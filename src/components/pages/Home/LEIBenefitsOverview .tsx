import { leiBenefits } from "../../../util/data/leiBenefits.data";
import LargeHeader from "../../global/LargeHeader";
import BenefitCard from "./components/BenefitCard";

const LEIBenefitsOverview = () => {
  return (
    <div className="p-32">
      <div className="text-center mb-32">
        <LargeHeader text="Why your business needs an LEI" color="black" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {
          leiBenefits.map(({ name, description }) => (
            <BenefitCard key={name} name={name} description={description} />
          ))
        }
      </div>

    </div>
  );
};

export default LEIBenefitsOverview;
