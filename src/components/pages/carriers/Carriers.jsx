import React from "react";
import Navbar from "../../module/Navbar";
import Footer from "../../module/Footer";
import { styled } from "@mui/material";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

const Container = styled("div")({
  // marginTop: -50,

  ".navbar": {
    background: "#000",
  },
  ".banner": {
    position: "relative",
    top: 87,
    minHeight: "calc(100vh - 88px)",
  },
  ".actualBanner": {
    width: "90%",
    margin: "0 auto",
  },
  ".mainBanner": {
    textAlign: "center",
    background: "#ccc",
    marginBottom: 20,
    padding: 40,
  },
  button: {
    all: "unset",
    color: "#fff",
    border: "1px solid #fff",
    padding: "15px 25px",
    marginBlock: 30,
    borderRadius: 8,
    fontWeight: 900,
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.5s",
    letterSpacing: "0.15em",
    background: "transparent",
  },
  "button:hover": {
    color: "#fff",
  },
  ".openings": {
    h1: { textAlign: "center" },
    width: "90%",
    margin: "0 auto",
    maxWidth: 1200,
  },
});
const Carriers = () => {
  return (
    <>
      <Container>
        <Navbar />
        <div className="banner">
          <div className="mainBanner">
            <div className="actualBanner">
              <p>Join Our Team</p>
              <h3>
                Explore the Career of your Dreams. We provide the independence
                to creative thinking.
              </h3>
              <button>Join Us</button>
            </div>
          </div>
          <div className="openings">
            <h1>Our Openings</h1>
            <div className="allOpenings">
              <div className="cards">
                <h2 className="roles">3D artist</h2>
                <p className="locations">Chennai, Tamil Nadu, India</p>
                <p className="jobType">Full time</p>
                <p></p>
                <p className="description">
                  <ul>
                    <li>
                      Assembling required elements for that shot involved and
                      Creating light rigs, Look dev. for Shot related.
                    </li>
                    <li>
                      Assembling required elements for that shot involved and
                      Creating light rigs, Look dev. for Shot related.
                    </li>
                    <li>
                      Assembling required elements for that shot involved and
                      Creating light rigs, Look dev. for Shot related.
                    </li>
                    <li>
                      Assembling required elements for that shot involved and
                      Creating light rigs, Look dev. for Shot related.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Carriers;
