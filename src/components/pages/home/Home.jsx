import React, { useState } from "react";
import Navbar from "../../module/Navbar";
import { BannerContainer } from "../../styles/home";
import ParticleCanvas from "../../shared/ParticleCanvas";
import Banner from "../../module/Banner";
import Services from "../../module/Services";
import Footer from "../../module/Footer";
import AboutUs from "../../module/AboutUs";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <Services />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
