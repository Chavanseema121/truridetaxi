import React, { useState } from "react";
import logotruride from "../assets/home/logotruride.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-4 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center font-bold px-10">
          <img src={logotruride} alt="Logo" className="mr-4  w-[190.30px] h-[60px] md:w-32 lg:w-52"/>
        </div>
        <div className="hidden md:flex items-center justify-center flex-1 font-semibold space-x-10">
          <a href="#home" className="text-black hover:text-[#FF2E00] text-sm md:text-xs lg:text-[18px]">
            Home
          </a>
          <a href="#features" className="text-black hover:text-[#FF2E00] text-sm md:text-xs lg:text-[18px]">
            Features
          </a>
          <a href="#about" className="text-black hover:text-[#FF2E00] text-sm md:text-xs lg:text-[18px]">
            About us
          </a>
          <a href="#howitworks" className="text-black hover:text-[#FF2E00] text-sm md:text-xs lg:text-[18px]">
            How it works
          </a>
          <a href="#testimonials" className="text-black hover:text-[#FF2E00] text-sm md:text-xs lg:text-[18px]">
            Testimonials
          </a>

          <a href="#contact" className="text-black hover:text-[#FF2E00] text-sm md:text-xs lg:text-[18px]">
            Contact Us
          </a>
          </div>
          <div className="hidden md:flex items-center mr-24">
          <a
            href="#"
            className=" rounded text-nowrap border border-[#FF2E00] w-56 text-center py-4 px-6 text-[#FF2E00] font-semibold hover:bg-[#FF2E00] hover:text-white"
          >
            Get the App
          </a>
          </div>
        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:text-zinc-800 focus:outline-none"
          >
            <svg
              className="h-6 w-10"
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
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#home" className="block text-black hover:text-zinc-800 p-2">
            Home
          </a>
          <a href="#features" className="block text-black hover:text-zinc-800 p-2">
            Features
          </a>
          <a href="#about" className="block text-black hover:text-zinc-800 p-2">
            About us
          </a>
          
          <a
            href="#Howitworks"
            className="block text-black hover:text-zinc-800 p-2"
          >
            How it works
          </a>
          <a
            href="#testimonials"
            className="block text-black hover:text-zinc-800 p-2"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block text-black hover:text-zinc-800 p-2"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="mt-2 rounded block text-nowrap border border-[#FF2E00] py-2 px-4 text-[#FF2E00] font-semibold hover:bg-[#FF2E00] hover:text-white"
          >
            Get the App
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
