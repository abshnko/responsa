import React from "react";
import { Link } from "react-router-dom";
import logoLarge from "../images/logo-LARGE.png";

const Hero = () => {
  return (
    <>
      <div className="h-screen">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12  lg:gap-48 lg:items-center lg:pt-60 pt-40 lg:mr-44 lg:ml-64 mx-11">
          <div className=" justify-self-center order-last lg:order-first">
            <p className="font-light lg:text-2xl text-xl">
              юридические услуги от профессионалов с многолетним опытом работы
              блабла
            </p>
            <p className="font-light lg:text-2xl text-xl mt-4">
              что-нибудь про ответ знающего человека - потому что мы команда
              людей, которые знают свое дело и т.д.
            </p>
          </div>
          <div className="main-logo justify-self-center lg:h-96 h-52">
            <div className="logo ">
              <Link className="flex flex-col logo items-center" path="/">
                <img className="lg:h-60 h-28" src={logoLarge} alt="" />
                <h4 className="lg:text-2xl text-lg text-paleText font-display mt-4">
                  ЮРИДИЧЕСКИЕ УСЛУГИ
                </h4>
                <div className=" h-4 lg:w-64 w-48 color mt-1 border-t-2 border-solid  border-myRed"></div>
                <h1 className="lg:text-7xl text-6xl md:tracking-wider font-display ">
                  RESPONSA
                </h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-11 mt-8 md:flex-row md:mx-28 lg:mx-64">
          <button className="private-clients border-lightBlue border-4 border-solid text-2xl font-light h-20 bg-lightWhite bg-opacity-60 md:w-48  lg:text-3xl lg:w-64">
            частным клиентам
          </button>
          <button className="corporate-clients border-lightBlue border-4 border-solid text-2xl font-light h-20 bg-lightWhite bg-opacity-60 mt-4 md:mt-0 md:ml-4 md:w-64 lg:text-3xl lg:w-80 lg:ml-8">
            корпоративным клиентам
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
