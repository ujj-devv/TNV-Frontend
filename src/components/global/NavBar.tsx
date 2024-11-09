import { useState } from "react"; 
import { navlinks } from "../../util/data/navlinks.data";
import Button from "../ui/Button/Button";
import { ButtonType } from "../ui/Button/button.types";
import { RxHamburgerMenu } from "react-icons/rx";
import Layout from "./Layout.";
import { useNavigate } from "react-router-dom";
import { AuthType } from "../../pages/Auth/auth.enum";
// import LeiLogo from "../../assets/svg/LeiLogo";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (route:AuthType) => {
    navigate(route)
  }

  return (
    <div className="bg-[#32736A]"> 
      <Layout>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          {/* <div className="h-[15px]">

          <LeiLogo color="white"/>
          </div> */}
          <div className="flex gap-8 mx-16 md:mx-auto">

            {/* Hamburger Menu Icon */}
            <button className="md:hidden " onClick={toggleMenu}>
              <RxHamburgerMenu className="text-white text-2xl" />
            </button>
            {navlinks.map(({ name, id }) => (
              <div className="text-white font-medium text-base hidden md:block" key={id}>
                {name}
              </div>
            ))}
          </div>
          <div className="hidden md:flex md:gap-4 md:mx-16">
            <Button type={ButtonType.PRIMARY} text="Sign in" onClick={() => handleClick(AuthType.LOGIN)} />
            <Button type={ButtonType.WHITE_BG} text="Sign up" onClick={() => handleClick(AuthType.REGISTER)}  />
          </div>
        </div>

        {/* Dropdown Menu for smaller screens */}
        {isOpen && (
          <div className="flex flex-col bg-[#32736A] md:hidden"> 
            {navlinks.map(({ name, id }) => (
              <div className="text-white font-medium text-base py-2 mx-12 px-4 hover:bg-[#2B5B55] cursor-pointer" key={id}>
                {name}
              </div>
            ))}
            <div className="flex flex-col gap-4 py-4 px-4 mx-12"> 
              <Button type={ButtonType.PRIMARY} text="Sign in" onClick={() => handleClick(AuthType.LOGIN)} customStyles="w-full" />
              <Button type={ButtonType.WHITE_BG} text="Sign up" onClick={() => handleClick(AuthType.LOGIN)} />
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default NavBar;
