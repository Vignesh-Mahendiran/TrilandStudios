import React, { useState } from "react";
import Navbar from "../../module/Navbar";
import { BannerContainer } from "../../styles/home";
import ParticleCanvas from "../../shared/ParticleCanvas";
import Banner from "../../module/Banner";
import Footer from "../../module/Footer";
import AboutUs from "../../module/AboutUs";
import HireArtist from "../../module/HireArtist";
import TopNotch from "../../module/TopNotch";
import Services from "../../module/Services";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <AboutUs />
      <HireArtist />
      <Services />
      <TopNotch />
      <Footer />
    </div>
  );
};

export default Home;
