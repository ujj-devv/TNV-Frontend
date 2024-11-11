import LargeHeader from "../../global/LargeHeader"
import Layout from "../../global/Layout."

const ViewActionsSection = ({ leiId }: { leiId: string }) => {
    return (
        <div className="bg-[#F3FAF8] w-full mb-16">
        <Layout>
            <div className="px-6 mx-[33px] sm:px-8 md:px-16 lg:px-24 py-4 sm:py-6 md:py-8 ">
                <LargeHeader 
                    text={`LEI: ${leiId}`} 
                    className="text-[#2A5B55] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left"
                />
            </div>
        </Layout>
    </div>
    
    )
}

export default ViewActionsSection
