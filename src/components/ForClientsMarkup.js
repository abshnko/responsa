import React from "react";

const ForClientsMarkup = ({ heading, subHeading, text, bullets }) => {
  const test = "ЧАСТНЫМ КЛИЕНТАМ -- в разработке";
  const words = test.split(" ");
  return (
    <>
      <div className=" bg-gray-200 h-screen">
        <h2>
          {test}
          {/* {words[0]} <span>{words[1]}</span> */}
        </h2>
      </div>
    </>
  );
};

export default ForClientsMarkup;
