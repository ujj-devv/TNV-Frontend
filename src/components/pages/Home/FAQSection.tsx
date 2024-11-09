import { faq } from "../../../util/data/faq.data";
import Accordion from "../../global/Accordian";
import Layout from "../../global/Layout.";
import Button from "../../ui/Button/Button";
import { ButtonType } from "../../ui/Button/button.types";
import { useNavigate } from "react-router-dom";

const FAQSection = () => {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate("/faq"); // Redirects to the FAQ page
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-16">
        {/* Left Column: FAQ Title */}
        <div className="">
          {" "}
          <h2 className="font-bold text-[64px] text-center md:text-left text-[#BED2E3]">
            Frequently asked questions
          </h2>
        </div>

        {/* Right Column: Accordion & Button */}
        <div className="flex flex-col gap-12">
          <Accordion accordionData={faq} />
          <Button
            text={"VIEW MORE"}
            type={ButtonType.PRIMARY}
            customStyles="w-full"
            onClick={handleViewMoreClick}
          />
        </div>
      </div>
      {/* <div className="grid grid-cols-2 gap-8 p-16 ">
        <div className="">
          {" "}
          <h2 className="font-bold text-[64px] text-center md:text-left text-[#BED2E3]">
            Frequently asked questions
          </h2>
        </div>
        <div className="">
          <div className="flex flex-col gap-12">
            <Accordion accordionData={faq} />
          </div>
          <Button
            text={"VIEW MORE"}
            type={ButtonType.PRIMARY}
            customStyles="w-full  py-3 "
            onClick={() => ""}
          />
        </div>
      </div> */}
    </Layout>
  );
};

export default FAQSection;
