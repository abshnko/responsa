import React from "react";
import AboutUs from "../components/AboutUs";
import PrivateClients from "../components/PrivateClients";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "./Services";
import CorporateClients from "../components/CorporateClients";

const Home = () => {
  return (
    <>
      <div
        className="home bg-home-back bg-no-repeat bg-cover bg-opacity-0"
        id="home"
      >
        <div className="bg bg-white bg-opacity-70">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="about" id="about">
        <AboutUs />
      </div>
      <div className="private" id="private">
        <PrivateClients />
      </div>
      <div className="corporate" id="corporate">
        <CorporateClients />
      </div>
      <div className="services" id="services">
        <Services />
      </div>
    </>
  );
};

export default Home;
