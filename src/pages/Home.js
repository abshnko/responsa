import React from "react";
import AboutUs from "../components/AboutUs";
import ForClientsMarkup from "../components/ForClientsMarkup";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div
        className="home bg-home-back bg-no-repeat bg-cover bg-opacity-0"
        id="home"
      >
        <div className="bg bg-white bg-opacity-60">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="about">
        <AboutUs />
      </div>
      <div className="clients">
        <ForClientsMarkup />
      </div>
    </>
  );
};

export default Home;
