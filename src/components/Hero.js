import React from "react";
import { Link } from "react-router-dom";
import logoLarge from "../images/logo-LARGE.png";

const Hero = () => {
  return (
    <>
      <div className="h-full min-h-screen">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12  lg:gap-24 md:gap-32 lg:items-center lg:pt-48 xl:pt-48 2xl:pt-60 pt-32 lg:mr-44 xl:ml-80 lg:ml-44 mx-11">
          <div className=" justify-self-center order-last lg:order-first lg:place-self-start lg:mt-9">
            <p className="font-normal tracking-wide lg:text-2xl 2xl:text-3xl text-xl text-gray-800 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              rhoncus turpis ut purus tristique ultrices. Aliquam auctor mi at
              congue imperdiet. Vestibulum sit amet sapien vel lorem egestas
              aliquam ac at elit.
            </p>
            <p className="mt-11 text-left text-xl text-paleText">
              RESPONSA PRUDENTIUM — <br />
              ответы профессиональных юристов в Древнем Риме на запросы частных
              лиц и адвокатов по тем или иным вопросам юридического характера
            </p>
          </div>
          <div className="main-logo justify-self-center lg:h-96 h-52">
            <div className="logo ">
              <Link className="flex flex-col logo items-center" path="/">
                <img
                  className="lg:h-40 md:h-40 2xl:h-44 h-28"
                  src={logoLarge}
                  alt=""
                />

                <h1 className="lg:text-7xl text-6xl sm:tracking-wider font-display mt-4 tracking-tight">
                  RESPONSA
                </h1>
                <div className=" h-4 2xl:w-80 lg:w-80 w-60 color mt-1 border-t-2 border-solid  border-myRed"></div>
                <h4 className="lg:text-2xl text-lg text-paleText font-display ">
                  ЮРИДИЧЕСКИЕ УСЛУГИ
                </h4>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-11 mt-8 md:flex-row md:mx-28  xl:mx-80 lg:mx-44 pb-4">
          <button
            type="button"
            className="max-w-sm bg-gradient-to-r from-green-200 to-blue-200 hover:from-purple-300 hover:to-red-300 transform hover:scale-110 transition-all  hover:bg-white hover:border-myBlue private-clients  border-solid text-2xl font-light h-20 bg-lightWhite bg-opacity-80 md:w-48  lg:text-2xl lg:w-64 rounded-sm"
          >
            частным клиентам
          </button>
          <button className="max-w-sm bg-gradient-to-l from-green-300 to-blue-200 hover:from-purple-300 hover:to-red-300 transform hover:scale-110 transition-all hover:bg-white hover:border-myBlue corporate-clients border-lightBlue  text-2xl font-light h-20 bg-lightWhite bg-opacity-80 mt-4 md:mt-0 md:ml-4 md:w-64 lg:text-2xl lg:w-80 lg:ml-8 rounded-sm">
            корпоративным клиентам
          </button>
        </div>
        <div className="phone top-6 right-16 sm:left-24 lg:top-10 lg:left-36 fixed max-w-xs z-20">
          <p className="text-paleText text-sm 2xl:text-base">
            +7 (343) 900-89-89
          </p>
        </div>
        <div className="year hidden md:block md:absolute bottom-5 left-14 text-paleText opacity-80">
          <h4>2021</h4>
        </div>
        <div className="quote hidden md:block absolute  bottom-5 right-14 tracking-veryWide uppercase text-paleText">
          <h4>Ubi jus, ibi remedium // Где право, там защита</h4>
        </div>
      </div>
    </>
  );
};

export default Hero;
