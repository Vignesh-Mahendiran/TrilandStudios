import React from "react";
import thumbnail from "../../assets/thumnail.jpg";
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
  overflow: "hidden",
  p: { marginBottom: 30 },
  ".content": {
    width: "48%",
  },
  ".aboutUs": {
    width: "50%",
    paddingLeft: 100,
  },
  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
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
const StyledText = styled("p")({
  color: "#4c8dff",
  fontWeight: 600,
  fontSize: 18,
  marginBottom: 20,
});
const Title = styled("p")({
  fontWeight: 700,
  letterSpacing: "-1px",
  margin: "5px 0 20px",
  lineHeight: 1,
  fontSize: 42,
});
const StrokeContainer = styled("div")({
  width: "100%",
  position: "relative",
  margin: "0 auto 50px",
  img: {
    borderRadius: 20,
    objectFit: "cover",
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
    <>
      <h1 id="aboutUs" style={{ textAlign: "center", margin: "80px 0 20px" }}>
        About Us
      </h1>

      <Container>
        <div className="content">
          <StyledText>WHO WE ARE</StyledText>
          <Title>
            From concept to creation, we bring your vision to life as we speak.
          </Title>
          <p>
            At our Triland Animation Studios, every idea is an opportunity to
            create something extraordinary. We take your concepts and transform
            them into dynamic visual experiences, capturing the essence of your
            vision. With seamless creativity and cutting-edge techniques, we
            craft stories that engage and inspire. From start to finish, we turn
            your ideas into reality, one frame at a time.
          </p>
          <StyledButton
            className="button"
            style={{ borderColor: "#000" }}
            onClick={() => {
              navigate(ROUTE_PATHS.services);
              scrollToTop();
            }}
          >
            Discover more
          </StyledButton>
        </div>
        <div className="aboutUs">
          <StrokeContainer>
            <StyledStroke>About</StyledStroke>
            <img src={thumbnail} height={400} alt="thumbnail" />
          </StrokeContainer>
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
