import React from "react";
import Articrafts from "../components/Articrafts";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div className="pb-7">
      <Banner></Banner>
      <AboutSection></AboutSection>
      <div className="my-7">
        <Articrafts></Articrafts>
      </div>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
