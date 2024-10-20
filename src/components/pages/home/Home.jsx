import React, { useState } from "react";
import Navbar from "../../module/Navbar";
import { BannerContainer } from "../../styles/home";
import ParticleCanvas from "../../shared/ParticleCanvas";
import Banner from "../../module/Banner";
import OurWork from "../../module/OurWork";
import Footer from "../../module/Footer";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <OurWork />
      <Footer />
      <ParticleCanvas />
    </div>
  );
};

export default Home;
