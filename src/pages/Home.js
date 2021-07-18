import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Hero />
      </div>
      <div className="h-screen"></div>
    </>
  );
};

export default Home;
