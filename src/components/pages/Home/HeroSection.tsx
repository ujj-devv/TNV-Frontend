import MapImage from "../../../assets/svg/MapImage"
import LargeHeader from "../../global/LargeHeader"
import Subheader from "../../global/Subheader"
import SearchBar from "../../ui/SearchBar/SearchBar"

const HeroSection = () => {
  return (
    <div className="flex justify-evenly py-32 bg-gradient-to-r from-custom-green1 via-custom-green2 to-custom-green3">
      <div className="flex flex-col gap-8 justify-center mx-16">
        <LargeHeader text="Leading the Way in LEI Services for Global Corporates" className="text-white"/>
        <Subheader text="Ensuring compliance, transparency, and global access with fast and secure LEI issuance." />
        <SearchBar placeholder="Search LEIs by entity name / LEI number"/>
      </div>
      <MapImage />
    </div>
  )
}

export default HeroSection
