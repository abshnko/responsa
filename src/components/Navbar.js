import React from "react";
import { Link } from "react-router-dom";
import img from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-transparent flex items-center justify-between h-34  pt-4 pr-8 font-sans fixed top-0 left-0 right-0">
      <Link className="logo p-4 pl-10 h-28" path="/">
        <img className="h-20" src={img} alt="" />
      </Link>

      <div className="md:hidden cursor-pointer px-2">
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="nav hidden md:block items-stretch">
        <Link
          className="p-4 hover:text-red-500 hover:scale-x-150 hover:scale-y-150"
          path="/"
        >
          Услуги
        </Link>
        <Link className="p-4 hover:text-red-500" path="/">
          О нас
        </Link>
        <Link className="p-4 hover:text-red-500" path="/">
          Материалы
        </Link>
        <Link className="p-4 hover:text-red-500" path="/">
          Контакты
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
