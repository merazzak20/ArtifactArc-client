import React from "react";
import Articrafts from "../components/Articrafts";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import FAQ from "../components/FAQ";
import { Helmet } from "react-helmet";
import Feedback from "../components/Feedback";
import ContactUs from "../components/ContactUs";

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
      <Feedback></Feedback>
      <ContactUs></ContactUs>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
