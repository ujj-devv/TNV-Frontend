import LargeHeader from "../../global/LargeHeader"
import Layout from "../../global/Layout."

const ViewActionsSection = ({ leiId }: { leiId: string }) => {
    return (
        <div className="bg-[#F3FAF8] mb-16">
            <Layout>
                <div className=" text-center md:text-left mx-32 py-16">
                    <LargeHeader text={`LEI: ${leiId}`} className="text-[#2A5B55] text-4xl" />
                </div>
            </Layout>
        </div>
    )
}

export default ViewActionsSection
