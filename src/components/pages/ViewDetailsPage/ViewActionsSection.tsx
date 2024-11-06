import LargeHeader from "../../global/LargeHeader"
import Layout from "../../global/Layout."

const ViewActionsSection = ({ leiId }: { leiId: string }) => {
    return (
        <div className="bg-[#F3FAF8] mb-16">
            <Layout>
                <div className="mx-16 py-16">
                    <LargeHeader text={`LEI: ${leiId}`} className="text-[#2A5B55]" />
                </div>
            </Layout>
        </div>
    )
}

export default ViewActionsSection
