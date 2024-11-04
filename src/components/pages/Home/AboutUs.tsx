import { aboutUs } from "../../../util/data/aboutUs.data"
import LargeHeader from "../../global/LargeHeader"
import LeiDetailCard from "./components/LeiDetailCard"

const AboutUs = () => {
  return (
    <div className="p-32 flex gap-32">
      <LargeHeader text={"About LEI International Pvt. Ltd"} className="text-[#373656] leading-[72px]" />
      <div>
      {
        aboutUs.map(({ name, description }) => (
          <LeiDetailCard key={name} name={name} description={description} />
        ))
      }

      </div>
    </div>
  )
}

export default AboutUs
