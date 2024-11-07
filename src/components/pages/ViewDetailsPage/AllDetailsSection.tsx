import { LeiRecord } from "../../../store/api/types/LeiRecords.types";
import DetailCard from "../../global/DetailCard/DetailCard"
import Layout from "../../global/Layout.";


const simplifyLeiEntityRecords = (record: LeiRecord) => {
    const entity = record?.attributes?.entity
    const registration = record?.attributes?.registration
    return {
        id: record.id, // Include the id here for reference
        legalName: entity?.legalName?.name,
        languageCode: entity?.legalName?.language,
        legalAddress: [...entity?.legalAddress?.addressLines, entity?.legalAddress?.city],
        headquartersAddress: [...entity?.headquartersAddress?.addressLines,
        entity?.headquartersAddress?.city, entity?.headquartersAddress?.country,
        entity?.headquartersAddress?.postalCode
        ],
        legalJurisdictionCountry: entity?.headquartersAddress?.country,
        legalJurisdictionRegion: [entity?.headquartersAddress?.city, entity?.headquartersAddress?.region],
        registrationAuthority: registration?.validatedAt?.id,
        registrationEntityId: registration?.validatedAs,
        legalForm: "gj",
        entityCategory: entity?.category,
        entityStatus: entity?.status,
        entityCreationDate: entity?.creationDate,
        website: "website",
        legalEntityEvents: "events"
    };
};

const simplifyLeiRelationshipRecords = (record: LeiRecord) => {
    const relationships = record?.relationships
    return {
        id: record.id, // Include the id here for reference
        directParent: "fvvds",
        ultimateParent: "ehjfgejg"

    };
};

const simplifyLeiRegistrationRecords = (record: LeiRecord) => {
    const { initialRegistrationDate, lastUpdateDate, nextRenewalDate } = record?.attributes?.registration
    return {
        id: record.id, // Include the id here for reference
        initialRegistrationDate,
        lastUpdateDate,
        nextRenewalDate
    };
};
const AllDetailsSection = ({ details }: { details: LeiRecord }) => {
    console.log('details of id this is', details)
    return (
        <div >
            <Layout>
                <div className="mx-16">
                    <DetailCard data={simplifyLeiEntityRecords(details)} detailName={"Entity"} />
                    <DetailCard data={simplifyLeiRelationshipRecords(details)} detailName={"Relationship"} />
                    <DetailCard data={simplifyLeiRegistrationRecords(details)} detailName={"Registration"} />
                </div>
            </Layout>
        </div>
    )
}

export default AllDetailsSection
