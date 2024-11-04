import { leiApplicationGuide } from "../../../util/data/leiApplicationGuide.data"
import LargeHeader from "../../global/LargeHeader"
import ApplyingCard from "./components/ApplyingCard"

const LEIApplicationGuide = () => {
  return (
    <div className="bg-[#32736A] p-32">
      <div className="text-center">
        <h4 className="text-white text-xl font-md mb-4">How it works</h4>
        <LargeHeader text="Applying for LEI is easy and fast" className="text-white" />
        <div className="flex mt-16 gap-48">
          {leiApplicationGuide.map(({ id, name, description }) => (
            <ApplyingCard key={id} id={id} name={name} description={description} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default LEIApplicationGuide
