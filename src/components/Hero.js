import React from "react";
import { Link } from "react-router-dom";
import logoLarge from "../images/logo-LARGE.png";

const Hero = () => {
  return (
    <>
      <div className="h-full min-h-screen">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12  lg:gap-48 md:gap-32 lg:items-center lg:pt-60 pt-40 lg:mr-44 lg:ml-52 mx-11">
          <div className=" justify-self-center order-last lg:order-first lg:place-self-start lg:mt-9">
            <p className="font-normal tracking-wide lg:text-2xl 2xl:text-3xl text-xl text-gray-800 ">
              RESPONSA PRUDENTIUM — <br />
              ответы профессиональных юристов в Древнем Риме на запросы частных
              лиц и адвокатов по тем или иным вопросам юридического характера
            </p>
            <p className="font-normal lg:text-2xl 2xl:text-2xl text-xl mt-4 2xl:mt-8 tracking-wide text-paleText">
              Ubi jus, ibi remedium // Где право, там защита
            </p>
          </div>
          <div className="main-logo justify-self-center lg:h-96 h-52">
            <div className="logo ">
              <Link className="flex flex-col logo items-center" path="/">
                <img
                  className="lg:h-60 md:h-40 2xl:h-56 h-28"
                  src={logoLarge}
                  alt=""
                />

                <h1 className="lg:text-7xl text-6xl md:tracking-wider font-display mt-4">
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
        <div className="flex flex-col mx-11 mt-8 md:flex-row md:mx-28 lg:mx-52">
          <button className="transform hover:scale-110 transition-all  hover:bg-white hover:border-myBlue private-clients border-lightBlue border-4 border-solid text-2xl font-light h-20 bg-lightWhite bg-opacity-80 md:w-48  lg:text-3xl lg:w-64">
            частным клиентам
          </button>
          <button className=" transform hover:scale-110 transition-all hover:bg-white hover:border-myBlue corporate-clients border-lightBlue border-4 border-solid text-2xl font-light h-20 bg-lightWhite bg-opacity-80 mt-4 md:mt-0 md:ml-4 md:w-64 lg:text-3xl lg:w-80 lg:ml-8">
            корпоративным клиентам
          </button>
        </div>
        <div className="phone top-9 right-16 sm:left-24 lg:top-14 lg:left-36 fixed max-w-xs">
          <p className="text-paleText text-sm 2xl:text-base">
            +7 (343) 900-89-89
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
