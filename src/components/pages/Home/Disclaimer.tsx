import Layout from "../../global/Layout.";

function Disclaimer() {
  return (
    <Layout customClass="flex flex-col items-center gap-16 p-8 md:px-32 md:py-16 bg-gray-50 min-h-screen">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-[#373656] mb-6">
          Website Disclaimer
        </h1>
        <p className="text-gray-800 mb-4">
          This website (
          <a
            href="https://tnvlei.vercel.app/"
            className="text-blue-600 hover:underline"
          >
            https://www.tnvlei.com
          </a>
          ) is owned and operated by LEI International Pvt Ltd, a company
          registered under the Indian Companies Act with a Corporate
          Identification Number (U85100UP2007PTC033380). The registered address
          of LEI International Pvt Ltd is B1/19/69, SECTOR K, ALIGANJ, Lucknow
          (UP) India - Pin Code – 226024.
        </p>

        <p className="text-gray-800 mb-4">
          These terms and conditions ("The Terms") govern your access to and
          usage of the Website. It is important to carefully read and understand
          these Terms. By continuing to access and use the Website, you are
          considered to have comprehended and agreed to abide by the Terms.
        </p>

        <p className="text-gray-800 mb-4">
          The information pertaining to a legal entity available on the LEI
          International Pvt Ltd website should not be construed as professional,
          financial, legal, or investment advice. It should not serve as the
          sole basis for making decisions related to investments, lending, or
          exposure.
        </p>

        <p className="text-gray-800 mb-4">
          LEI International Pvt Ltd explicitly states that it does not endorse,
          advise, or promote the financial or legal soundness, standing, or
          stability of the legal entity to which an LEI is assigned by LEI
          International Pvt Ltd. The allocation of an LEI to a legal entity does
          not imply any endorsement or assurance by LEI International Pvt Ltd
          regarding the financial or legal soundness of that entity.
        </p>

        <p className="text-gray-800 mb-4">
          Individuals using public information about a legal entity published on
          this site are urged to conduct standard due diligence on the legal
          entity. This due diligence should align with the usual practices
          undertaken before engaging in financial transactions with legal
          entities holding LEIs issued by LEI International Pvt Ltd.
        </p>

        <p className="text-gray-800">
          For further details, please refer to the Website Terms of Usage ,
          Privacy Policy , and Cookie Statement .
        </p>
      </div>
    </Layout>
  );
}

export default Disclaimer;
