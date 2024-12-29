import React, { useEffect } from "react";
import Navbar from "../../module/Navbar";
import { styled } from "@mui/material";
import Footer from "../../module/Footer";
import threeDOutput from "../../../assets/serv.png";
import ReactPlayer from "react-player";
import ServicesShow from "../../module/ServicesShow";
import { services } from "../../constant/home";

const Container = styled("div")({
  ".navbar": {
    // background: "#000",
  },
  ".serviceBanner": {
    background: `url(${threeDOutput}), no-repeat`,
    backgroundColor: "#0000000f",
    backgroundSize: "cover",
    "background-position-y": "75%",
    height: "300px",
    position: "relative",
    textAlign: "center",
    top: -83,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    h1: {
      textTransform: "uppercase",
      fontFamily: "Oswald",
      color: "#fff",
      zIndex: 999,
      fontSize: 42,
    },
  },
  ".banner": {
    position: "relative",
    top: 83,
    minHeight: "calc(100vh - 88px)",
    padding: "0 0 60px",
  },
  ".content": {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  ".servicesContainer": {
    display: "flex",
    width: "30%",
    justifyContent: "center",
    cursor: "pointer",
    minWidth: 500,
    position: "relative",
    zIndex: 999,
  },
  ".title": {
    textTransform: "uppercase",
    fontFamily: "Oswald",
    color: "#000",
    fontSize: 32,
    marginBottom: 10,
    textAlign: "center",
  },
  ".subtitle": {
    color: "#000",
    fontSize: 24,
    fontWeight: 500,
    textAlign: "center",
    marginTop: -40,
    padding: "0 20px 10px",
  },
  ".videoContainer": {
    width: "100%",
    minWidth: 500,
  },
  "@media screen and (max-width: 768px)": {
    ".title": {
      fontSize: 28,
    },
    ".subtitle": {
      fontSize: 22,
      marginTop: -50,
    },
    ".videoContainer, .servicesContainer": {
      minWidth: 380,
      cursor: "pointer",
    },
  },
  "@media screen and (max-width: 450px)": {
    ".title": {
      fontSize: 26,
    },
    ".subtitle": {
      fontSize: 20,
      marginTop: -50,
    },
    ".videoContainer, .servicesContainer": {
      minWidth: 320,
    },
  },
  "@media screen and (max-width: 380px)": {
    ".videoContainer, .servicesContainer": {
      minWidth: 280,
    },
  },
});
const OurServices = () => {
  useEffect(() => {
    const hash = window.location.hash;
    const id = hash ? hash.substring(1) : null;
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" }); // Scrolls to the middle of the viewport
      }
    }
  }, []);
  return (
    <>
      <Container>
        <Navbar />
        <div className="banner">
          <div className="serviceBanner">
            <h1>Services</h1>
            <div className="content"></div>
          </div>
          <div className="wrapper">
            {services.map((value) => (
              <div className="services" id={value.id}>
                <h1 className="title">{value?.title}</h1>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 50,
                    justifyContent: "center",
                    padding: "0 0 50px",
                  }}
                >
                  {value?.submenus?.map((sub) => (
                    <>
                      <ServicesShow title={sub.title} url={sub.url} />
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default OurServices;
