import { useState } from "react";
import { navlinks } from "../../util/data/navlinks.data";
import Button from "../ui/Button/Button";
import { ButtonType } from "../ui/Button/button.types";
import { RxHamburgerMenu } from "react-icons/rx";
import Layout from "./Layout.";
// import LeiLogo from "../../assets/svg/LeiLogo";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/cdf-downloads" className="hover:text-gray-400">
                CDF Downloads
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-gray-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="/coming-soon" className="hover:text-gray-400">
                LOU Data Analytics
              </a>
            </li>
            <li>
              <a href="/profile-management" className="hover:text-gray-400">
                Profile Management
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">
                About
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>

          {/* Authentication Buttons */}
          <div className="hidden md:flex space-x-4">
            <Button
              type={ButtonType.PRIMARY}
              text="Sign in"
              onClick={() => ""}
            />
            <Button
              type={ButtonType.WHITE_BG}
              text="Sign up"
              onClick={() => ""}
            />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden ${
              isOpen ? "block" : "hidden"
            } absolute top-0 left-0 right-0   text-white p-4`}
          >
            <ul className="space-y-4">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/cdf-downloads" className="hover:text-gray-400">
                  CDF Downloads
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/coming-soon" className="hover:text-gray-400">
                  LOU Data Analytics
                </a>
              </li>
              <li>
                <a href="/profile-management" className="hover:text-gray-400">
                  Profile Management
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
            <div className="mt-4 space-y-2">
              <Button
                type={ButtonType.PRIMARY}
                text="Sign in"
                onClick={() => ""}
              />
              <Button
                type={ButtonType.WHITE_BG}
                text="Sign up"
                onClick={() => ""}
              />
            </div>
          </div>
        </nav>
      </Layout>
    </div>
  );
};

export default NavBar;
