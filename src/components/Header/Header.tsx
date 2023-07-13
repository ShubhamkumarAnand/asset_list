import { useState } from "react";
import "./style.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full sticky bg-transparent p-3 flex justify-between items-center mx-auto z-10 shadow-lg">
      <div className="font-semibold text-xl basis-4/6">
        <button>Asset List</button>
      </div>
      <div className="relative md:hidden">
        <button
          type="button"
          className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:bg-gray-700 focus:text-white"
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
              className={`absolute bg-blue-300 w-screen h-screen top-0 right-0 transition-transform transform animate-menu-slide-in`}
            >
              <div className="p-4 flex flex-col justify-center items-center my-auto space-y-16 mt-40 text-white font-semibold text-xl">
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
                <div className="border-2 border-black rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                  <button className="font-semibold px-4 py-2">SignIN</button>
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
      <div className="md:flex space-x-5 font-medium border-black hidden">
        <button className="text-md basis-3 hover:border-b-4 hover:border-black">
          Add
        </button>
        <button className="text-md">View</button>
        <button className="text-md">Issues</button>
        <div className="border-2 border-black rounded-xl">
          <button className="font-semibold p-4">SignIN</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
