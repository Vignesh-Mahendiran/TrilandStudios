import React from "react";
import thumbnail from "../../assets/aboutus.png";
import { styled } from "@mui/material";
import { ROUTE_PATHS } from "../../routes/routePath";
import { useNavigate } from "react-router-dom";
export const StyledButton = styled("div")({
  border: "2px solid #fff",
  padding: "10px 20px",
  borderRadius: 5,
  fontSize: 12,
  width: "max-content",
  cursor: "pointer",
  textTransform: "uppercase",
});

export const StyledStroke = styled("p")({
  "-webkit-text-fill-color": "transparent",
  "-webkit-text-stroke": "2px #d9d9d9c7",
  fontSize: "90px",
  fontWeight: 900,
  textTransform: "uppercase",
  position: "absolute",
  rotate: "-90deg",
  margin: 0,
  left: "-165px",
  bottom: 97,
  "@media screen and (max-width: 768px)": {
    left: "-122px",
  },
});
const Container = styled("div")({
  maxWidth: 1200,
  width: "90%",
  margin: "60px auto",
  display: "flex",
  alignItems: "center",
  background: "#fff",
  overflow: "hidden",
  span: {
    color: "#f1bf1e",
  },

  p: {
    marginBottom: 30,
    fontFamily: "Bangers",
    fontSize: 32,
    letterSpacing: 2.5,
    lineHeight: 1.2,
    fontWeight: 700,
  },
  ".content": {
    width: "50%",
  },
  ".aboutUs": {
    width: "30%",
    paddingLeft: 100,
  },
  "@media screen and (max-width: 1024px)": {
    p: {
      fontSize: 24,
    },
  },
  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
    p: { fontSize: 28 },
    ".content": {
      width: "100%",
      textAlign: "center",
    },
    ".aboutUs": {
      width: "100%",
      paddingLeft: 0,
    },
    ".button": {
      margin: "0 auto",
    },
  },
});
const StrokeContainer = styled("div")({
  width: "100%",
  position: "relative",
  margin: "0 auto 50px",
  img: {
    objectFit: "cover",
    maxWidth: "100%",
  },
  "@media screen and (max-width: 768px)": {
    margin: "30px auto 50px",
    img: {
      width: "100%",
      marginTop: 30,
    },
  },
});
const AboutUs = () => {
  const navigate = useNavigate();
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This enables smooth scrolling to the top
    });
  }

  return (
    <div
      style={{ background: "#fff", position: "relative", padding: 10, top: 0 }}
    >
      <h1
        id="aboutUs"
        style={{
          textAlign: "center",
          margin: "20px auto 20px",
          background: "#3cc4f1",
          padding: "10px 40px",
          color: "#fff",
          fontFamily: "Bangers",
          borderRadius: 20,
          fontWeight: 100,
          letterSpacing: 2,
          fontSize: 40,
          width: "max-content",
          "-webkit-text-fill-color": "#fff",
          "-webkit-text-stroke": "1px #000",
        }}
      >
        About Us
      </h1>

      <Container>
        <div className="content">
          <p>
            We have a passion for storytelling that shines in our work, and we
            take great pride in our ability{" "}
            <span>to bring our client's visions to life.</span> from cartoon
            webseries and television commercials to billboard ads and marketing
            animations, we have the tools and expertise to bring any project to
            life.
          </p>
        </div>
        <div className="aboutUs">
          <StrokeContainer>
            {/* <StyledStroke>About</StyledStroke> */}
            <img src={thumbnail} alt="thumbnail" />
          </StrokeContainer>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
