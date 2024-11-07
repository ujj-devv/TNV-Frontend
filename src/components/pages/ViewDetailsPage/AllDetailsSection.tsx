import { LeiRecord, LeiRelationships, RegistrationDetails } from "../../../store/api/types/LeiRecords.types";
import DetailCard from "../../global/DetailCard/DetailCard"
import Layout from "../../global/Layout.";


const simplifyLeiEntityRecords = (record: LeiRecord) => {
    const {legalName, legalAddress, headquartersAddress, category, status, creationDate} = record?.attributes?.entity
    const {validatedAt, validatedAs} = record?.attributes?.registration
    return {
        legalName: legalName?.name,
        languageCode: legalName?.language,
        legalAddress: [...legalAddress?.addressLines, legalAddress?.city],
        headquartersAddress: [...headquartersAddress?.addressLines,
        headquartersAddress?.city, headquartersAddress?.country,
        headquartersAddress?.postalCode
        ],
        legalJurisdictionCountry: headquartersAddress?.country,
        legalJurisdictionRegion: [headquartersAddress?.city, headquartersAddress?.region],
        registrationAuthority: validatedAt?.id,
        registrationEntityId: validatedAs,
        legalForm: "gj",
        entityCategory: category,
        entityStatus: status,
        entityCreationDate:creationDate,
        website: "website",
        legalEntityEvents: "events"
    };
};

const simplifyLeiRelationshipRecords = (record: LeiRelationships) => {
    // const relationships = record?.relationships
    console.log('record', record)
    return {
        directParent: "fvvds",
        ultimateParent: "ehjfgejg"

    };
};

const simplifyLeiRegistrationRecords = (record: RegistrationDetails) => {
    const { initialRegistrationDate, lastUpdateDate, nextRenewalDate, status, managingLou, corroborationLevel, validatedAs } = record
    return {
        initialRegistrationDate,
        lastUpdateDate,
        nextRenewalDate,
        status,
        managingLou,
        validationSources: corroborationLevel,
        validationAuthority:"dfsd",
        validationEntityId:validatedAs
    };
};
const AllDetailsSection = ({ details }: { details: LeiRecord }) => {
    console.log('details of id this is', details)
    return (
        <div className="mb-16">
            <Layout>
                <div className="flex flex-col gap-16 mx-16 md:mx-32">
                    <DetailCard data={simplifyLeiEntityRecords(details)} detailName={"Entity"} />
                    <DetailCard data={simplifyLeiRelationshipRecords(details?.relationships)} detailName={"Relationship"} />
                    <DetailCard data={simplifyLeiRegistrationRecords(details?.attributes?.registration)} detailName={"Registration"} />
                </div>
            </Layout>
        </div>
    )
}

export default AllDetailsSection
