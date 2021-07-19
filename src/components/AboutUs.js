import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className=" h-screen" id="about">
        <div className="flex">
          <h1 className="text-paleText font-display text-2xl mx-auto mt-24 inline-block">
            О <span className="text-myRed">НАС</span>
          </h1>
        </div>
        <div className="static top-20">
          <div className="text-bgText  text-9xl text-opacity-10 mt-16 -ml-8">
            О НАС
          </div>
        </div>
        <div className="flex flex-col -mt-40 mx-9 gap-7">
          <h4 className="text-lg -mb-3 text-center">
            МЫ - КОМАНДА ПРОФЕССИОНАЛОВ{" "}
          </h4>
          <p className="font-light text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            rhoncus turpis ut purus tristique ultrices. Aliquam auctor mi at
            congue imperdiet. Vestibulum sit amet sapien vel lorem egestas
            aliquam ac at elit.
          </p>
          <p className="font-light text-2xl">
            Integer varius dui sit amet lectus faucibus tincidunt. Aenean
            suscipit viverra ante, in ornare sem semper mattis. Mauris ac ligula
            ac mi rutrum suscipit sit amet eu ligula. Nunc et vulputate felis.
            Cras sit amet ornare quam. Fusce ac risus ut libero rhoncus pretium.
            In hac habitasse platea dictumst.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
