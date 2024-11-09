import { aboutUs } from "../../../util/data/aboutUs.data";
import LargeHeader from "../../global/LargeHeader";
import Layout from "../../global/Layout.";
import LeiDetailCard from "./components/LeiDetailCard";

const About = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Layout customClass="flex flex-col items-center gap-16 p-8 md:px-8 md:py-8">
        {/* About Us Header */}
        <LargeHeader
          text="About LEI International Pvt. Ltd"
          className="text-[#373656] leading-tight text-center md:leading-[72px]"
        />

        {/* About Us Description */}
        <div className="text-center text-gray-700 max-w-4xl mx-auto">
          <p>
            LEI International Pvt Ltd (LEI Code 9845002B4DBA3C83E68), a wholly
            owned subsidiary of TNV Certification Pvt. Ltd. (LEI Code
            335800HP7ZT4B4QP7F38), is dedicated to improving the transparency
            and dependability of financial data. Leveraging our extensive
            experience in certification and data management, as well as the
            strong technical and financial support from TNV Certification Pvt.
            Ltd, we are uniquely positioned to bolster the integrity of the LEI
            system.
          </p>

          {/* Benefits Section */}
          <h3 className="text-2xl font-semibold text-[#373656] mt-8">
            What are the benefits of using LEI International Pvt Ltd as a LOU?
          </h3>
          <p className="mt-4">
            Our expertise as a Local Operating Unit (LOU) is not only
            demonstrated but also strengthened by the proven success of TNV
            Certifications Pvt Ltd as the parent company overseeing LEI
            International Pvt Ltd, which specializes in ISO Certification
            Services. ...
          </p>
        </div>

        {/* Image Section */}
        <div className="max-w-4xl w-full my-8">
          <img
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
            alt="Office"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Vision Section */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-[#373656] mb-8">
            Our Vision
          </h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {aboutUs.map(({ name, description }) => (
              <LeiDetailCard key={name} name={name} description={description} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
