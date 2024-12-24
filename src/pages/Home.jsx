import React from "react";
import Articrafts from "../components/Articrafts";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import FAQ from "../components/FAQ";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="pb-7">
      <Helmet>
        <title>Home - ArtifactArc</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
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
