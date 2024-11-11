import { useState } from "react";
import { navlinks } from "../../util/data/navlinks.data";
import Button from "../ui/Button/Button";
import { ButtonType } from "../ui/Button/button.types";
import Layout from "./Layout.";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthType } from "../../pages/Auth/auth.enum";
import LeiLogo from "../../assets/svg/LeiLogo";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (route: AuthType) => {
    navigate(route);
  };

  return (
    <div className="bg-[#32736A]">
      <Layout>
        <nav className="text-white px-4  flex justify-between items-center mx-4">
          {/* Logo */}
          <div className="flex items-center">
            {/* <img
              src="https://dev.tnvlei.com/logo-dark.png"
              alt="Logo"
              className="h-12"
            /> */}
            <LeiLogo/>
          </div>

          {/* NavLinks for larger screens */}
          <div className="hidden md:flex md:gap-8 md:ml-10">
            {navlinks.map(({ name, id }) => (
              <NavLink
                to={id}
                key={id}
                className={({ isActive }) =>
                  `text-white font-medium text-base ${
                    isActive ? "bg-[#2B5B55] px-4 py-2 rounded-md" : ""
                  } hover:bg-[#2B5B55] px-4 py-2 rounded-md`
                }
              >
                {name}
              </NavLink>
            ))}
          </div>

          {/* Buttons for larger screens */}
          <div className="hidden md:flex gap-4">
            <Button
              type={ButtonType.PRIMARY}
              text="Sign in"
              onClick={() => handleClick(AuthType.LOGIN)}
            />
            <Button
              type={ButtonType.WHITE_BG}
              text="Sign up"
              onClick={() => handleClick(AuthType.REGISTER)}
            />
          </div>

          {/* Hamburger Icon for mobile view */}
          <div className="md:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-white cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>

          {/* Dropdown Menu for smaller screens */}
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-[#32736A] md:hidden flex flex-col items-start px-4 pb-4 z-10">
              {navlinks.map(({ name, id }) => (
                <NavLink
                  to={id}
                  key={id}
                  className={({ isActive }) =>
                    `text-white font-medium text-base w-full px-4 py-2 ${
                      isActive ? "bg-[#2B5B55]" : ""
                    } hover:bg-[#2B5B55] rounded-md`
                  }
                  onClick={toggleMenu}
                >
                  {name}
                </NavLink>
              ))}
              <div className="flex flex-col gap-2 w-full mt-4">
                <Button
                  type={ButtonType.PRIMARY}
                  text="Sign in"
                  onClick={() => handleClick(AuthType.LOGIN)}
                  customStyles="w-full"
                />
                <Button
                  type={ButtonType.WHITE_BG}
                  text="Sign up"
                  onClick={() => handleClick(AuthType.REGISTER)}
                  customStyles="w-full"
                />
              </div>
            </div>
          )}
        </nav>
      </Layout>
    </div>
  );
};

export default NavBar;
