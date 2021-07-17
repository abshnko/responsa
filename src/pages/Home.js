import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="home h-screen">
        <Navbar />
        <Hero />
      </div>
      <div className="h-screen"></div>
    </>
  );
};

export default Home;
