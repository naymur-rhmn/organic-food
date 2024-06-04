import React from "react";
import Hero from "../components/Home/Hero";
import Offer from "../components/Home/Offer";
import OrganicFoods from "../components/Home/OrganicFoods";
import About from "../components/Home/About/About";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Offer />
      <About />
      <OrganicFoods />
      <Testimonial />
    </>
  );
};

export default Home;
