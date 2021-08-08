import React from "react";
import scale from "../images/scale.jpg";

const AboutUs = () => {
  return (
    <>
      <div className=" h-screen">
        <div className="flex">
          <h1 className="text-paleText font-display text-2xl mx-auto mt-16 md:mt-20 inline-block md:text-4xl">
            О <span className="text-myRed">НАС</span>
          </h1>
        </div>
        <div className="static top-14 md:top-10">
          <div className="text-bgText whitespace-nowrap overflow-hidden text-11xl text-opacity-10  -ml-8 md:text-12xl font-light md:mt-4 md:ml-14 lg:ml-52 lg:-mt-14">
            О НАС
          </div>
        </div>
        <div className="md:flex md:flex-row md:gap-4  md:justify-around md:mx-16 lg:gap-16 lg:justify-center md:mt-16 font-display ">
          <div className="flex flex-col -mt-60 mx-10 gap-7 md:-mt-50 md:max-w-md lg:max-w-lg">
            <h4 className="text-lg  -mb-3 text-left md:text-left font-display md:w-52 font-semibold">
              МЫ - КОМАНДА ПРОФЕССИОНАЛОВ
            </h4>
            <p className="font-light text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              rhoncus turpis ut purus tristique ultrices. Aliquam auctor mi at
              congue imperdiet. Vestibulum sit amet sapien vel lorem egestas
              aliquam ac at elit.
            </p>
            <p className="block mt-7 sm:mt-11 text-left sm:text-xl text-paleText">
              RESPONSA PRUDENTIUM — <br />
              ответы профессиональных юристов в Древнем Риме на запросы частных
              лиц и адвокатов по тем или иным вопросам юридического характера
            </p>
          </div>
          <div className="picture hidden md:block md:max-h-4 md:max-w-xs -mt-52 lg:max-h-5 lg:max-w-sm">
            <img src={scale} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
