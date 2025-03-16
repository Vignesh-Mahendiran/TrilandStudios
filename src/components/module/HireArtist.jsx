import { styled } from "@mui/material";
import React from "react";
import threeDOutput from "../../assets/serv.png";
import zIndex from "@mui/material/styles/zIndex";
import { useNavigate } from "react-router-dom";

const Container = styled("div")({
  ".serviceBanner": {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(2 2 2 / 63%)",
  },
  background: `url(${threeDOutput}), no-repeat`,
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  position: "relative",
  "background-position-y": "75%",
  h1: {
    marginBottom: 30,
    fontFamily: "Bangers",
    fontSize: 36,
    letterSpacing: 3.5,
    lineHeight: 1.2,
    fontWeight: 700,
    span: {
      color: "#f1bf1e",
    },
  },
  ".content": {
    color: "#fff",
    position: "relative",
    padding: "60px 20px",
    zIndex: 10,
    maxWidth: 1200,
    width: "90%",
    margin: "60px auto",
    p: {
      maxWidth: 900,
      margin: "0 auto",
      fontSize: 21,
      fontWeight: 600,
      marginBottom: 20,
      textAlign: "center",
    },
  },
  button: {
    background: "#f1bf1e",
    outline: "none",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    fontFamily: "Bangers",
    padding: "10px 40px",
    fontSize: 40,
    margin: "60px auto 20px",
    display: "flex",
    justifyContent: "center",
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    "-webkit-text-fill-color": "#fff",
    "-webkit-text-stroke": "1px #000",
  },
  "@media screen and (max-width: 768px)": {
    h1: { textAlign: "center" },
  },
});
const HireArtist = () => {
  return (
    <Container>
      <div className="serviceBanner"></div>
      <div className="content">
        <h1>
          fostering effective teamwork:
          <span> Explore our Partnership options</span>
        </h1>
        <p>
          Our main goal is to help you work together effectively. We're excited
          to introduce our versatile collaboration solutions. We offer a wide
          range of choices to match your project collaborate with our skilled
          artists for a longer period, we've got you covered. We provide
          flexible solutions, from month-longer partnerships that encourage
          innovation to hourly engagements that offer precisionm ensuring you
          have access to top talent when and how you need it.
        </p>
        <button onClick={() => (window.location.href = "/#contact")}>
          Hire artist now!
        </button>
      </div>
    </Container>
  );
};

export default HireArtist;
