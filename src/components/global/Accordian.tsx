import { useState } from "react";
import { AccordionItem } from "../../util/types/accordian.types";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

type AccordionProps = {
  accordionData: AccordionItem[];
};

const Accordion = ({ accordionData }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 mx-auto">
      {accordionData.map(({ key, name, content }, index) => (
        <div key={key} className="border-b border-gray-300 w-full">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full py-4 text-left"
          >
            <h3 className="text-[#9EA0A0] font-normal text-xl md:text-2xl">
              {name}
            </h3>
            <span>
              {activeIndex === index ? <RxCaretUp /> : <RxCaretDown />}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="p-4 text-[#334155] rounded-b-lg w-full">
              {content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
