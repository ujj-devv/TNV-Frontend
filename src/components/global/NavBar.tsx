import { useState } from "react";
import { navlinks } from "../../util/data/navlinks.data";
import Button from "../ui/Button/Button";
import { ButtonType } from "../ui/Button/button.types";
import Layout from "./Layout.";
import {  useNavigate } from "react-router-dom";
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
        {" "}
        <nav className=" text-white px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://dev.tnvlei.com/logo-dark.png"
              alt="Logo"
              className="h-8"
            />
          </div>
          <div className="hidden md:flex md:gap-4 md:mx-16">
            <Button type={ButtonType.PRIMARY} text="Sign in" onClick={() => handleClick(AuthType.LOGIN)} />
            <Button type={ButtonType.WHITE_BG} text="Sign up" onClick={() => handleClick(AuthType.REGISTER)}  />
          </div>

        {/* Dropdown Menu for smaller screens */}
        {isOpen && (
          <div className="flex flex-col bg-[#32736A] md:hidden" onClick={toggleMenu}>
            {navlinks.map(({ name, id }) => (
              <div
                className="text-white font-medium text-base py-2 mx-12 px-4 hover:bg-[#2B5B55] cursor-pointer"
                key={id}
              >
                {name}
              </div>
            ))}
            <div className="flex flex-col gap-4 py-4 px-4 mx-12"> 
              <Button type={ButtonType.PRIMARY} text="Sign in" onClick={() => handleClick(AuthType.LOGIN)} customStyles="w-full" />
              <Button type={ButtonType.WHITE_BG} text="Sign up" onClick={() => handleClick(AuthType.LOGIN)} />
            </div>
          </div>)}
        </nav>
      </Layout>
    </div>
  )
};

export default NavBar;
