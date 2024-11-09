import { useState } from "react";
import { faq } from "../../../util/data/faq.data";
import Layout from "../../global/Layout.";

interface FaqItem {
  name: string;
  content: string;
}

interface FaqAccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 px-4 text-gray-800 font-medium flex justify-between items-center hover:bg-gray-100"
        onClick={onClick}
      >
        <span>{question}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="px-4 pb-4 text-gray-600">{answer}</div>}
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Layout customClass="flex flex-col items-center gap-16 p-8 md:px-8 md:py-16 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#373656] mb-8">FAQs</h1>
      <div className="w-full max-w-2xl">
        {faq.map((item: FaqItem, index: number) => (
          <FaqAccordion
            key={index}
            question={item.name}
            answer={item.content}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Faq;
