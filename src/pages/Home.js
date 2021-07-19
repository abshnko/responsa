import React from "react";
import AboutUs from "../components/AboutUs";
import ForClientsMarkup from "../components/ForClientsMarkup";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="home bg-home-back bg-no-repeat bg-cover" id="home">
        <Navbar />
        <Hero />
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
