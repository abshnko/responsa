import React from "react";

const Services = () => {
  return (
    <div className="md:h-screen h-full pb-5 bg-greyBG">
      <div className="flex">
        <h1 className="text-paleText font-display text-2xl mx-auto mt-20 md:mt-24 inline-block md:text-4xl">
          <span className="text-myRed">УСЛУГИ</span>
        </h1>
      </div>
      <div className="static top-14 md:top-10">
        <div className="text-bgText overflow-hidden text-11xl text-opacity-10  -ml-8 md:text-12xl font-light md:mt-4 md:ml-14 lg:ml-52 lg:-mt-14">
          УСЛУГИ
        </div>
      </div>
      <h4 className="text-lg -mb-3  font-display font-semibold -mt-64  md:-mt-56  text-left 2xl:ml-100 xl:ml-56 lg:ml-24 ml-16">
        БЕСПЛАТНАЯ ОЦЕНКА <br /> ПЕРСПЕКТИВЫ СУДЕБНОГО СПОРА
      </h4>
      <div className="flex flex-col md:flex-row gap-7 md:gap-24 md:mt-28 mt-16 md:mx-16 mx-5 justify-center items-center 2xl:text-lg">
        <div className="card bg-white bg-opacity-50 p-7 h-52 w-72 lg:w-72 lg:h-72 shadow-md">
          инфа по стоимости инфа по стоимости инфа по стоимости инфа по
          стоимости инфа по стоимости инфа по стоимости инфа по стоимости
        </div>
        <div className="card bg-white p-7 lg:w-72 lg:h-72 h-52 w-72 bg-opacity-50 shadow-md">
          инфа по стоимости
        </div>
        <div className="card bg-white p-7 lg:w-72 lg:h-72 h-52 w-72 bg-opacity-50 shadow-md">
          инфа по стоимости
        </div>
      </div>
    </div>
  );
};

export default Services;
