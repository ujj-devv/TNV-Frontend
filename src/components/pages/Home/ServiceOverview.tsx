import LeiDownloadedImage from "../../../assets/svg/LeiDownloadedImage"
import ServicesImage from "../../../assets/svg/ServicesImage"
import { draftServices, services } from "../../../util/data/services.data"
import LargeHeader from "../../global/LargeHeader"
import ServicesCard from "./components/ServicesCard"

const ServiceOverview = () => {
  return (
    <div className="p-32">
      <div className="text-center mb-32">
        <LargeHeader text="What we offer" className="text-[#32736A]" />
      </div>
      <div className="flex gap-32 mb-32">
        <div>
          {
            services.map(({ key, name, description, action }) => (
              <ServicesCard key={key} name={name} description={description} action={action} />
            ))
          }
        </div>
        <div className="p-0">
          <ServicesImage />
        </div>
      </div>
      <div className="flex gap-32 mb-32">
        <div className="p-0">
          <LeiDownloadedImage />
        </div>
        <div>
          {
            draftServices.map(({ key, name, description, action }) => (
              <ServicesCard key={key} name={name} description={description} action={action} />
            ))
          }
        </div>
      </div>
</div>
  )
}

export default ServiceOverview
