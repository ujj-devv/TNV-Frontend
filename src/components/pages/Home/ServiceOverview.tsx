import { useState } from "react";
import LeiDownloadedImage from "../../../assets/svg/LeiDownloadedImage";
import ServicesImage from "../../../assets/svg/ServicesImage";
import { draftServices, services } from "../../../util/data/services.data";
import LargeHeader from "../../global/LargeHeader";
import ServicesCard from "./components/ServicesCard";
import Layout from "../../global/Layout.";

const ServiceOverview = () => {
  const [hoveredServiceKey, setHoveredServiceKey] = useState<string>("");
  const [hoveredDraftServiceKey, setHoveredDraftServiceKey] = useState<string>("");

  return (
    <div className="p-32">
      <Layout>
        <div className="text-center mb-32">
          <LargeHeader text="What we offer" className="text-[#32736A]" />
        </div>
        
        {/* Section for 'services' with hover effect */}
        <div className="flex gap-32 mb-32">
          <div>
            {services.map(({ key, name, description, action }) => (
              <div
                key={key}
                onMouseEnter={() => setHoveredServiceKey(key)}
              >
                <ServicesCard name={name} description={description} action={action} />
              </div>
            ))}
          </div>

          <div className="p-0 flex justify-center md:justify-start">
            {/* Display the image of the currently hovered 'service', or a default image if none */}
            {hoveredServiceKey !== ""
              ? services.find(service => service.key === hoveredServiceKey)?.image()
              : <ServicesImage />}
          </div>
        </div>

        {/* Section for 'draftServices' with hover effect */}
        <div className="flex gap-32 mb-32">
          <div className="p-0 flex justify-center md:justify-start">
            {/* Display the image of the currently hovered 'draftService', or a default image if none */}
            {hoveredDraftServiceKey !== ""
              ? draftServices.find(draft => draft.key === hoveredDraftServiceKey)?.image()
              : <LeiDownloadedImage />}
          </div>
          
          <div>
            {draftServices.map(({ key, name, description, action }) => (
              <div
                key={key}
                onMouseEnter={() => setHoveredDraftServiceKey(key)}
              >
                <ServicesCard name={name} description={description} action={action} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ServiceOverview;
