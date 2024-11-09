import { certifications } from "../../../util/data/certifications.data";
import Layout from "../../global/Layout.";
import AvailableCertificationsCard from "./components/AvailableCertificationsCard";

const AvailableCertifications = () => {
  return (
    <>
      <div className="relative flex items-center justify-center px-8 md:px-16 lg:px-32 py-8 md:py-12 lg:py-16 bg-[#373656] gap-8 md:gap-16 lg:gap-48">
        <Layout>
          {/* Background Images Container */}
          <div className="absolute inset-0 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[url('/src/assets/svg/left-bg-vector-image.svg')] bg-no-repeat bg-contain bg-center md:bg-left"></div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[url('/src/assets/svg/right-bg-vector-image.svg')] bg-no-repeat bg-contain bg-center md:bg-right"></div>
          </div>

          {/* Certifications Cards */}
          <div className="relative z-10 flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
            {certifications.map(({ key, name, status }) => (
              <AvailableCertificationsCard
                key={key}
                name={name}
                status={status}
              />
            ))}
          </div>
        </Layout>
      </div>
    </>
  );
};

export default AvailableCertifications;
