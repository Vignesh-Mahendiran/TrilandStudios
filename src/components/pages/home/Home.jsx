import React from "react";
import Navbar from "../../module/Navbar";
import { BannerContainer } from "../../styles/home";
import ParticleCanvas from "../../shared/ParticleCanvas";
import Banner from "../../module/Banner";
import OurWork from "../../module/OurWork";
import Footer from "../../module/Footer";

const Home = () => {
  return (
    <>
      <BannerContainer>
        <Navbar />
        <Banner />
      </BannerContainer>
      <OurWork />
      <Footer />
      <ParticleCanvas />
    </>
  );
};

export default Home;
