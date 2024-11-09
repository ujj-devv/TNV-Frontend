import Layout from "../../global/Layout.";

function TermsConditions() {
  return (
    <Layout customClass="flex flex-col items-center gap-16 p-8 md:px-32 md:py-16 bg-gray-50 min-h-screen">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-[#373656] mb-6">
          Terms and Conditions of LEI International Pvt Ltd
        </h1>
        <ul className="text-gray-800 mb-4">
          <li>
            <span className="font-bold px-1">1. </span>I/We hereby commit to
            adhere to and abide by all the terms and conditions outlined in the
            Rules for LOU Services (Rules) issued by Legal Entity Identifier
            International Pvt Limited (LEI International Pvt Ltd) on behalf of
            the legal entity seeking or holding a legal entity identifier (LEI)
            from LEI International Pvt Ltd. I/We acknowledge having read and
            understood the Rules available on its website and accept to be bound
            by them.
          </li>
          <li>
            <span className="font-bold px-1">2. </span>I/We affirm and declare
            that the documents and all information submitted for obtaining the
            LEI to LEI International Pvt Ltd, or that will be submitted as part
            of the application, are entirely accurate and true. I/We agree to
            promptly notify LEI International Pvt Ltd of any changes to the
            information submitted in this application.
          </li>
          <li>
            <span className="font-bold px-1">3.</span>I/We agree and undertake
            that if LEI International Pvt Ltd incurs any claims, losses,
            damages, costs, liabilities, and expenses (including third party
            losses/damages/liabilities/claims) due to (i) our failure or
            omission to ensure the accuracy of the submitted information and/or
            documentation, or (ii) submission of false or incorrect information
            and/or documentation, I/We commit to compensating LEI International
            Pvt Ltd for such loss or damage.
          </li>
          <li>
            <span className="font-bold px-1">4.</span>Without prejudicing the
            above, I/We declare that if any information is found to be
            incorrect, fake, or if any information or particulars have been
            suppressed or omitted, LEI International Pvt Ltd reserves the right
            to take appropriate action as deemed fit.
          </li>
          <li>
            <span className="font-bold px-1">5.</span>I/We agree and undertake
            that the Legal Entity shall be held responsible for any acts of
            omission or commission committed by any of the designated
            signatories in their official capacity. The Legal Entity cannot
            absolve itself of any liabilities arising from the conduct of such
            officials.
          </li>
          <li>
            <span className="font-bold px-1">6.</span>I/We consent to the
            submission and use of PAN (Permanent Account Number) of the Legal
            Entities and/or authorized signatories of the Legal Entity for
            verification purposes by LEI International Pvt Ltd in issuing,
            maintaining, and renewing LEIs.
          </li>
          <li>
            <span className="font-bold px-1">7.</span>I/We consent to the
            submission and use of CIN (Corporate Identity Number)/LLP No./SEBI
            No/Incorporation Number of our legal entity for verification by LEI
            International Pvt Ltd in issuing, maintaining, and renewing LEIs.
            This includes the publication of CIN/LLP No./SEBI No/Incorporation
            Number on its website or other platforms.
          </li>
          <li>
            <span className="font-bold px-1">8.</span>I/We agree and undertake
            that any amount paid to LEI International Pvt Ltd for the issuance
            and renewal of LEIs shall be non-refundable. Furthermore, any amount
            collected by LEI International Pvt Ltd in the case of LEI lapse and
            re-issuance shall also be non-refundable, and I/We shall not claim a
            refund for any amount paid to LEI International Pvt Ltd.
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default TermsConditions;
