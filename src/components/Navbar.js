import { React, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import img from "../images/logo.png";

const Navbar = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 120) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <nav
        className={` ${
          changeColor ? "bg-white bg-opacity-90" : "bg-transparent"
        } flex items-center justify-between h-24 lg:pr-8 pr-4 font-sans fixed top-0 left-0 right-0 z-10`}
      >
        <Link
          className="logo lg:w-40 w-24  items-center justify-center lg:h-28 h-16 flex"
          path="/"
          to="/#home"
        >
          <img className="lg:h-12 h-9  " src={img} alt="" />
        </Link>

        <button
          type="button"
          className="sm:hidden cursor-pointer px-2"
          onClick={() => setShowNav((e) => !e)}
        >
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
        </button>
        <div className=" nav hidden sm:block items-stretch">
          <Link
            className="inline-block transform  transition-all rounded-sm  py-1 px-4 pt-0 hover:text-white bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 2xl:text-lg tracking-wide"
            path="/services"
            to="/services"
          >
            услуги
          </Link>
          <Link
            className="inline-block transform  transition-all rounded-sm py-1 px-4 pt-0 hover:text-white bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 2xl:text-lg"
            path="/#about"
            to="/#about"
          >
            о нас
          </Link>
          <Link
            className="inline-block transform hover:scale-125 transition-all p-4 hover:text-red-500 2xl:text-lg"
            path="/"
          >
            материалы
          </Link>
          <Link
            className="inline-block transform hover:scale-125 transition-all p-4 hover:text-red-500 2xl:text-lg"
            path="/"
          >
            контакты
          </Link>
        </div>
      </nav>
      <div
        className={`nav-mobile h-screen fixed bg-white w-full  ${
          !showNav
            ? "opacity-0 -z-1 duration-1000 transition-all pt-9 transform"
            : "pt-9 text-left z-50 text-3xl px-10  opacity-100  transition-all duration-700 transform "
        } `}
      >
        <button
          className="close fixed top-9 right-10"
          onClick={() => setShowNav((e) => !e)}
        >
          <svg
            className="w-9 h-9"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Link
          className="block bg-white bg-opacity-10 pb-3 font-light tracking-wide active:text-myRed"
          path="/"
          to="/#home"
          onClick={() => setShowNav(false)}
        >
          главная
        </Link>
        <Link
          className="block bg-white bg-opacity-10 pb-3 font-light tracking-wide active:text-myRed"
          path="/services"
          to="/services"
          onClick={() => setShowNav(false)}
        >
          услуги
        </Link>
        <Link
          className="block bg-white bg-opacity-10 pb-3 font-light"
          path="/"
          to="/#about"
          onClick={() => setShowNav(false)}
        >
          о нас
        </Link>
        <Link
          className="block bg-white bg-opacity-10 pb-3 font-light"
          path="/"
          to="/"
        >
          материалы
        </Link>
        <Link
          className="block bg-white bg-opacity-10 font-light"
          path="/"
          to="/"
        >
          контакты
        </Link>
      </div>
    </>
  );
};

export default Navbar;
