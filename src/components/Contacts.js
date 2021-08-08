import React from "react";

const Contacts = () => {
  return (
    <div className="h-screen">
      <div className="flex">
        <h1 className="text-paleText font-display text-2xl mx-auto mt-16 md:mt-20 inline-block md:text-4xl text-center">
          <span className="text-myRed">КОНТАКТЫ</span>
        </h1>
      </div>
      <div className="static top-14 md:top-10">
        <div className="text-bgText overflow-hidden text-11xl text-opacity-10  -ml-8 md:text-12xl font-light md:mt-4 md:ml-14 lg:ml-52 lg:-mt-14">
          КОНТАКТЫ
        </div>
      </div>
    </div>
  );
};

export default Contacts;
