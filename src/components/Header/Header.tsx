"use client";

import { useState } from "react";
import "./style.css";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full sticky bg-transparent p-3 flex flex-row justify-between items-center mx-auto z-10 shadow-lg md:px-10 lg:px-20 md:py-5">
      <div className="font-semibold text-xl flex justify-center items-center">
        <Image
          src="/asset-list.png"
          alt="Logo"
          className="mr-3 "
          width={50}
          height={50}
        />
        <p className="md:text-2xl font-bold">Asset List</p>
      </div>
      <div className="relative md:hidden">
        <button
          type="button"
          className="p-2 rounded-md text-gray-700 hover:text-white focus:outline-none focus:bg-gray-700 focus:text-white scale-110"
          aria-label="Menu"
          onClick={handleMenuClick}
        >
          <svg
            className={`h-6 w-6 transition-transform transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-20">
            <div className="opacity-50 absolute inset-0" />
            <div
              className={`absolute w-screen h-screen top-0 right-0 transition-transform transform animate-menu-slide-in`}
            >
              <div className="p-4 flex flex-col justify-center items-center my-48 space-y-16 text-white font-semibold text-2xl">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-black duration-300"
                  role="menuitem"
                >
                  Add
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black duration-300"
                  role="menuitem"
                >
                  View
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-black duration-300"
                  role="menuitem"
                >
                  Issues
                </a>
                <div className="border-2 border-black rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-black">
                  <button className="font-semibold px-4 py-2">Sign Up</button>
                </div>
                <div className="mt-4 text-center font-light text-neutral-500">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-lg">Already have an account</p>
                    <div className="cursor-pointer text-lg text-gray-700 border-b-4 border-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-black duration-300 mt-2 hover:font-bold">
                      Log In
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="p-2 rounded-md text-black z-10 scale-110 hover:scale-150 transition ease-in-out delay-150 duration-300"
                  aria-label="Menu"
                  onClick={handleMenuClick}
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        isOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="md:flex font-semibold border-black hidden text-xl px-6 py-4 rounded-xl border-[1px] shadow-sm transition hover:shadow-md">
        <div className="flex w-full justify-between items-center gap-6">
          <button className="text-md basis-3 hover:border-b-4 hover:border-black">
            Add
          </button>
          <button className="text-md border-x-[1px] px-6 border-black">
            View
          </button>
          <button className="text-md">Issues</button>
        </div>
      </div>
      <div className="md:flex hidden rounded-2xl border-2 border-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:text-white z-20">
        <button className="font-semibold px-6 py-3">LogIN</button>
      </div>
    </div>
  );
};

export default Header;
