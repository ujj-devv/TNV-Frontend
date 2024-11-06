import DetailCard from "../../global/DetailCard"
import Layout from "../../global/Layout.";

const exampleData = {
    "Entity Name": "ABC Corporation",
    "LEI Number": "1234567890",
    "Country": "USA",
    "Status": "Active",
    "Registered Date": "2022-01-01",
    "Renewal Date": "2023-01-01"
};

const AllDetailsSection = () => {
    return (
        <div >
            <Layout>
                <div className="mx-16">
                    <DetailCard data={exampleData} />
                </div>
            </Layout>
        </div>
    )
}

export default AllDetailsSection
