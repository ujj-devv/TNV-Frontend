import { certifications } from "../../../util/data/certifications.data"
import Layout from "../../global/Layout."
import AvailableCertificationsCard from "./components/AvailableCertificationsCard"

const AvailableCertifications = () => {
  return (
    <div className="relative flex items-center justify-center p-32 bg-[#373656] gap-48">
      <Layout>
        <div className="absolute left-0 top-0 w-1/2 h-full bg-[url('/src/assets/svg/left-bg-vector-image.svg')] bg-no-repeat bg-contain bg-left"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/src/assets/svg/right-bg-vector-image.svg')] bg-no-repeat bg-contain bg-right"></div>

        <div className="flex flex-wrap justify-center gap-48">
          {
            certifications.map(({ key, name, status }) => (
              <AvailableCertificationsCard key={key} name={name} status={status} />
            ))
          }
        </div>
      </Layout>
    </div>

  )
}

export default AvailableCertifications
