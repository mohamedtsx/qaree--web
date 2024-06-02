import React from "react";
import logo from "../img/mmm.png";
import { IoMdSearch } from "react-icons/io";

const NavBar = () => {
  return (
    <>
      <div className="shadow-md bg-xff dark-bg-gray-900 dark-text-white duration-200 relative z-40">
        <div className="bg-slate-700 py-3 sm:py-2">
          <div className="container flex justify-between items-center">
            <div>
              <a
                href="#hero"
                className="sm:text-3xl text-2xl sm:text-left text-justify mb-3 flex items-center gap-4 text-white hover:text-4xl duration-200"
              >
                <img src={logo} alt="Logo" className="max-w-[50px] mx-2" />
                Qaree
              </a>
            </div>
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] text-gg sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-blue-300 text-center"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            <div className="flex space-x-10 text-center text-white text-lg">
              <a href="#hero" className="hover:text-xl duration-200">
                Home
              </a> 
              <a href="#read" className="hover:text-xl duration-200">
                Top Reading
              </a>
              <a href="#rate" className="hover:text-xl duration-200">
                Top Rating
              </a>
              <a href="#faq" className="hover:text-xl duration-200">
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
