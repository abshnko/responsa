import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const ForClientsMarkup = () => {
  return (
    <>
      <div className=" bg-greyBG lg:h-screen h-full">
        <div className="flex">
          <h1 className="text-paleText font-display text-2xl mx-auto mt-20 md:mt-20 inline-block md:text-4xl">
            ЧАСТНЫМ <span className="text-myRed">КЛИЕНТАМ</span>
          </h1>
        </div>
        <div className="static top-14 md:top-10">
          <div className="text-bgText overflow-hidden text-11xl text-opacity-10  -ml-8 md:text-12xl font-light md:mt-4 md:ml-14 lg:ml-52 lg:-mt-14">
            ЧАСТНЫМ КЛИЕНТАМ
          </div>
        </div>
        <div className="md:flex md:flex-row md:gap-4  md:justify-around md:mx-16 lg:gap-16 lg:justify-center md:mt-16 font-display mx-10">
          <div className="flex flex-col -mt-101   gap-7 md:-mt-50 md:max-w-md lg:max-w-lg">
            <h4 className="text-lg  -mb-3 text-left md:text-left font-display md:w-52 font-semibold">
              МЫ - КОМАНДА ПРОФЕССИОНАЛОВ
            </h4>
            <p className="font-light text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              rhoncus turpis ut purus tristique ultrices. Aliquam auctor mi at
              congue imperdiet. Vestibulum sit amet sapien vel lorem egestas
              aliquam ac at elit.
            </p>
            <button
              type="button"
              className="md:block hidden mt-6 bg-gradient-to-r from-Pink to-Purple text-white hover:from-green-500 hover:to-blue-400 transform hover:scale-110 transition-all  hover:bg-white  private-clients  text-xl font-light h-12 bg-lightWhite md:w-48 px-4  lg:text-2xl lg:w-64 rounded-sm md:static md:bottom-7"
            >
              <Link to="#services">стоимость услуг</Link>
            </button>
          </div>
          <div className="card md:max-h-4 md:max-w-xs lg:max-h-5 lg:max-w-sm md:-mt-101 mt-12">
            <ul>
              <li className="text-xl pb-2">
                <svg
                  className="w-6 h-6 inline-block mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                споры семейные, наследственные, жилищные
              </li>
              <li className="text-xl pb-2">
                <svg
                  className="w-6 h-6 inline-block  mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                банки, страховые компании
              </li>
              <li className="text-xl pb-2">
                <svg
                  className="w-6 h-6 inline-block  mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                штрафы пдд
              </li>
              <li className="text-xl pb-2">
                <svg
                  className="w-6 h-6 inline-block  mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                взыскание убытков от ДТП
              </li>
            </ul>
            <button
              type="button"
              className="block md:hidden my-6 mb-0 bg-gradient-to-r from-Pink to-Purple text-white hover:from-green-500 hover:to-blue-400 transform hover:scale-110 transition-all  hover:bg-white  private-clients  text-xl font-light h-12 bg-lightWhite md:w-48 px-4  lg:text-2xl lg:w-64 rounded-sm "
            >
              <Link to="#services">стоимость услуг</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForClientsMarkup;
