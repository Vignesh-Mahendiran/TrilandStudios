import React from "react";
import thumbnail from "../../assets/thumnail.jpg";
import { styled } from "@mui/material";
export const StyledButton = styled("div")({
  border: "2px solid #fff",
  padding: "10px 20px",
  borderRadius: 5,
  fontSize: 12,
  width: "max-content",
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
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "80px 0 20px" }}>About Us</h1>

      <Container>
        <div className="content">
          <StyledText>WHO WE ARE</StyledText>
          <Title>Let Your Animation Do The Walking.</Title>
          <p>
            In etiam tempus donec morbi dignissim montes conubia. Fermentum
            risus dapibus rutrum cubilia cras purus. Pede vel vivamus maximus
            venenatis elementum vestibulum curabitur.
          </p>
          <StyledButton className="button" style={{ borderColor: "#000" }}>
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
