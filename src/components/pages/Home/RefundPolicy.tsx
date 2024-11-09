import Layout from "../../global/Layout.";

const RefundPolicy = () => {
  return (
    <Layout customClass="flex flex-col items-center gap-16 p-8 md:px-32 md:py-16 bg-gray-50 min-h-screen">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-[#373656] mb-6">
          Refund Policy
        </h1>

        <section className="text-gray-800 mb-6">
          <p className="mb-4">
            LEI International Private Limited, registered under the Companies
            Act 1956, is a wholly owned subsidiary of TNV Certification Private
            Limited. LEI International Private Limited ("we," "our," or "us") is
            committed to providing transparent and efficient services in the
            issuance of Legal Entity Identifiers (LEI). This refund policy
            outlines the terms and conditions under which refunds are not
            provided.
          </p>
        </section>

        <section className="text-gray-800 mb-6">
          <h2 className="text-xl font-semibold text-[#373656] mb-4">
            1. Scope of Policy
          </h2>
          <p className="mb-4">
            This policy applies to all applications for LEIs submitted to LEI
            International Private Limited through our website.
          </p>
        </section>

        <section className="text-gray-800 mb-6">
          <h2 className="text-xl font-semibold text-[#373656] mb-4">
            2. Application Process
          </h2>
          <p className="mb-4">
            The process for the issuance of an LEI requires thorough
            verification and validation of the legal entities. This includes,
            but is not limited to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Submission of application forms</li>
            <li>Provision of necessary enclosures and supporting documents</li>
            <li>Validation of legal entity details</li>
          </ul>
        </section>

        <section className="text-gray-800 mb-6">
          <h2 className="text-xl font-semibold text-[#373656] mb-4">
            3. No Refund Policy
          </h2>
          <p className="mb-4 font-semibold">Non-Refundable Fees:</p>
          <p className="mb-4">
            All application fees paid for the issuance of an LEI are
            non-refundable. This includes fees paid for applications that are
            found to be faulty, incomplete, or invalid.
          </p>
          <p className="mb-4 font-semibold">Effort and Time:</p>
          <p className="mb-4">
            The processing of each application requires significant effort and
            time from our Local Operating Unit (LOU). Therefore, once an
            application is submitted and payment is made, no refund requests
            will be entertained under any circumstances.
          </p>
          <p className="mb-4 font-semibold">
            Faulty or Incomplete Applications:
          </p>
          <p className="mb-4">
            In the event that any information, application form, or enclosure
            provided by the applicant is found to be incorrect or incomplete,
            the application will be deemed invalid, and the fee will not be
            refunded.
          </p>
        </section>

        <section className="text-gray-800 mb-6">
          <h2 className="text-xl font-semibold text-[#373656] mb-4">
            4. Regulatory Declaration
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <span className="font-semibold">
                Acceptance of Terms and Conditions:
              </span>{" "}
              The applicant has read, understood, and accepted all the terms and
              conditions associated with the issuance of an LEI.
            </li>
            <li>
              <span className="font-semibold">
                Acknowledgement of Refund Policy:
              </span>{" "}
              The applicant acknowledges and accepts this refund policy in its
              entirety.
            </li>
            <li>
              <span className="font-semibold">
                Accountability and Consequences:
              </span>{" "}
              The applicant accepts full accountability for the accuracy and
              completeness of the information provided. No claim for a refund
              will be considered, regardless of the outcome of the application.
            </li>
          </ul>
        </section>

        <section className="text-gray-800 mb-6">
          <h2 className="text-xl font-semibold text-[#373656] mb-4">
            5. Acceptance of Policy
          </h2>
          <p className="mb-4">
            By making a payment for the LEI application, the applicant
            acknowledges that they have read and accepted this refund policy.
            The applicant agrees that no refund claim shall be considered in any
            situation.
          </p>
        </section>

        <section className="text-gray-800 mb-6">
          <h2 className="text-xl font-semibold text-[#373656] mb-4">
            6. Amendments
          </h2>
          <p className="mb-4">
            LEI International Private Limited reserves the right to amend this
            refund policy at any time without prior notice. Any changes will be
            updated on our website and will be effective immediately upon
            posting.
          </p>
          <p className="mb-4">
            Thank you for choosing LEI International Private Limited for your
            LEI needs. We appreciate your understanding and cooperation.
          </p>
        </section>

        <section className="text-gray-800 mb-6">
          <h2 className="text-xl font-semibold text-[#373656] mb-4">
            7. Contact Information
          </h2>
          <p className="mb-4">
            For any inquiries regarding this refund policy, please contact us
            at:
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:info@tnvlei.com"
              className="text-blue-600 hover:underline"
            >
              info@tnvlei.com
            </a>
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone:</span> +91-XXXXX-XXXXX
          </p>
          <p className="mb-2">
            <span className="font-semibold">Address:</span> TNV House, Sector K,
            Aliganj, Lucknow - 24
          </p>
          <p className="mb-2">
            <span className="font-semibold">Website:</span>{" "}
            <a
              href="https://tnvlei.vercel.app/"
              className="text-blue-600 hover:underline"
            >
              www.tnvlei.com
            </a>
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default RefundPolicy;
