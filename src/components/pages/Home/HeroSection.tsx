import { useState } from "react";
import MapImage from "../../../assets/svg/MapImage";
import LargeHeader from "../../global/LargeHeader";
import Layout from "../../global/Layout.";
import Subheader from "../../global/Subheader";
import SearchBar from "../../ui/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchValue, setSearchValue] = useState(""); // Use state to track search input
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchValue) {
      navigate(`/search/${encodeURIComponent(searchValue)}`); // Encode URI for special characters
    }
  };

  return (
    <div className="bg-gradient-to-r from-custom-green1 via-custom-green2 to-custom-green">
      <Layout>
        <div className="flex flex-col md:flex-row justify-evenly py-32">
          <div className="flex flex-col gap-8 justify-center mx-16">
            <LargeHeader
              text="Leading the Way in LEI Services for Global Corporates"
              className="text-white"
            />
            <Subheader text="Ensuring compliance, transparency, and global access with fast and secure LEI issuance." />
            <SearchBar
              placeholder="Search LEIs by entity name / LEI number"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)} // Update state with search input
              onClick={handleSearch} // Call handleSearch on button click
            />
          </div>
          <div className="hidden md:block">
            <MapImage />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HeroSection;
