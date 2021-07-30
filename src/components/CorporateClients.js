import React from "react";

const CorporateClients = () => {
  return (
    <>
      <div className="h-screen">
        <div className="flex">
          <h1 className="text-paleText font-display text-2xl mx-auto mt-16 md:mt-20 inline-block md:text-4xl text-center">
            КОРПОРАТИВНЫМ <span className="text-myRed">КЛИЕНТАМ</span>
          </h1>
        </div>
        <div className="static top-14 md:top-10">
          <div className="text-bgText overflow-hidden text-11xl text-opacity-10  -ml-8 md:text-12xl font-light md:mt-4 md:ml-14 lg:ml-52 lg:-mt-14">
            КОРПОРАТИВНЫМ КЛИЕНТАМ
          </div>
        </div>
        <div className="md:flex md:flex-row md:gap-4  md:justify-around md:mx-16 lg:gap-16 lg:justify-center md:mt-16 font-display ">
          <div className="flex flex-col -mt-101 mx-10 gap-7 md:-mt-50 md:max-w-md lg:max-w-lg">
            <h4 className="text-lg  -mb-3 text-left md:text-left font-display md:w-52 font-semibold">
              МЫ - КОМАНДА ПРОФЕССИОНАЛОВ
            </h4>
            <p className="font-light text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              rhoncus turpis ut purus tristique ultrices. Aliquam auctor mi at
              congue imperdiet. Vestibulum sit amet sapien vel lorem egestas
              aliquam ac at elit.
            </p>
          </div>
          <div className="card md:max-h-4 md:max-w-xs lg:max-h-5 lg:max-w-sm">
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CorporateClients;
