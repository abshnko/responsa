import React from "react";
import scale from "../images/scale.jpg";

const AboutUs = () => {
  return (
    <>
      <div className=" h-screen" id="about">
        <div className="flex">
          <h1 className="text-paleText font-display text-2xl mx-auto mt-24 inline-block md:text-4xl">
            О <span className="text-myRed">НАС</span>
          </h1>
        </div>
        <div className="static top-14 md:top-10">
          <div className="text-bgText  text-11xl text-opacity-10  -ml-8 md:text-12xl font-light md:mt-4 md:ml-14 lg:ml-52 lg:-mt-14">
            О НАС
          </div>
        </div>
        <div className="md:flex md:flex-row md:gap-4  md:justify-around md:mx-16 lg:gap-16 lg:justify-center md:mt-16 font-display ">
          <div className="flex flex-col -mt-56 mx-10 gap-7 md:-mt-50 md:max-w-md lg:max-w-lg">
            <h4 className="text-lg  -mb-3 text-left md:text-left font-display md:w-52 font-semibold">
              МЫ - КОМАНДА ПРОФЕССИОНАЛОВ
            </h4>
            <p className="font-light text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              rhoncus turpis ut purus tristique ultrices. Aliquam auctor mi at
              congue imperdiet. Vestibulum sit amet sapien vel lorem egestas
              aliquam ac at elit.
            </p>
            <p className="font-light text-2xl">
              Integer varius dui sit amet lectus faucibus tincidunt. Aenean
              suscipit viverra ante, in ornare sem semper mattis. Mauris ac
              ligula ac mi rutrum suscipit sit amet eu ligula. Nunc et vulputate
              felis. Cras sit amet ornare quam. Fusce ac risus ut libero rhoncus
              pretium. In hac habitasse platea dictumst.
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
