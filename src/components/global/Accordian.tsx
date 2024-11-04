import { useState } from "react";
import { AccordionItem } from "../../util/types/accordian.types";
import CaretDown from "../../assets/svg/CaretDown";



type AccordionProps = {
  accordionData: AccordionItem[];
};

const Accordion = ({ accordionData }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 ">
      {accordionData.map(({ key, name, content }, index) => (
        <div key={key} className="border-b border-gray-300 w-full overflow-hidden"> 
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full py-4 text-left"
          >
            <h3 className="text-[#9EA0A0] font-normal text-2xl">{name}</h3>
            <span>{activeIndex === index ? "-" : <CaretDown />}</span>
          </button>
          {activeIndex === index && (
            <div className="p-4 text-gray-600 rounded-b-lg w-[550px]">
              {content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
