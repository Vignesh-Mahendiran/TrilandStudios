import React from "react";
import { Button, Box, Typography, styled } from "@mui/material";
import threeDOutput from "../../assets/serv.png";

const Container = styled(Box)({
  ".serviceBanner": {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(2 2 2 / 63%)",
  },
  ".left": {
    width: "50%",
    paddingRight: 40,
  },
  ".right": {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ".content": {
    display: "flex",
    color: "#fff",
    position: "relative",
    padding: "60px 20px",
    zIndex: 10,
    maxWidth: 1200,
    width: "90%",
    margin: "60px auto",
  },
  background: `url(${threeDOutput}), no-repeat`,
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  position: "relative",
  "background-position-y": "75%",
  h1: {
    marginBottom: 30,
    fontFamily: "Bangers",
    fontSize: 38,
    letterSpacing: 3.5,
    lineHeight: 2,
    fontWeight: 700,
    span: {
      color: "#f1bf1e",
    },
  },
  ".textContent": { fontSize: 21, fontWeight: 600 },

  "@media screen and (max-width: 1280px)": {
    h1: { lineHeight: 1.2 },
    ".right": {
      scale: 0.9,
    },
  },
  "@media screen and (max-width: 768px)": {
    ".left": {
      width: "100%",
      textAlign: "center",
    },

    ".right": {
      width: "100%",
      flexDirection: "column",
    },
    ".content": {
      flexDirection: "column",
    },
    h1: { textAlign: "center", letterSpacing: 1.5 },
  },
});

const HighlightBox = styled(Box)(({ bgColor }) => ({
  backgroundColor: bgColor,
  color: "#fff",
  padding: "20px",
  textAlign: "left",
  h6: {
    fontFamily: "Bangers",
    fontSize: 26,
    letterSpacing: 2.5,
  },
  span: {
    display: "block",
    fontFamily: "Bangers",
    fontSize: 32,
    letterSpacing: 3.5,
  },
  borderBottomLeftRadius: 20,
  borderTopRightRadius: 20,
  margin: 10,
  width: "250px",
  "@media screen and (max-width: 1280px)": {
    width: "200px",
  },
}));

const ButtonStyled = styled(Button)({
  backgroundColor: "#3eb7ff",
  outline: "none",
  border: "none",
  color: "#fff",
  fontFamily: "Bangers",
  padding: "0px 40px",
  fontSize: 34,
  margin: "60px auto 20px",
  fontWeight: 100,
  borderRadius: 10,
  "-webkit-text-fill-color": "#fff",
  "-webkit-text-stroke": "0.5px #000",
});
const TopNotch = () => {
  return (
    <Container>
      <div className="serviceBanner"></div>
      <div className="content">
        <div className="left">
          <Typography variant="h1" gutterBottom>
            TOP-NOTCH ANIMATION STUDIO SERVICES. BUDGET-FRIENDLY RATES.
          </Typography>
          <p className="textContent">
            Empower your creative vision with our expert team. Flexible payment
            options. Just outstanding results.
          </p>
          <ButtonStyled onClick={() => (window.location.href = "/#home")}>
            GET STARTED
          </ButtonStyled>
        </div>
        <div className="right">
          <div>
            <HighlightBox
              bgColor="#fdb827"
              style={{ top: "50px", right: "150px" }}
            >
              <Typography variant="h6" fontWeight="bold">
                <span>50%</span> MORE AFFORDABLE
              </Typography>
              <Typography variant="body2">
                Experience premium quality at half the cost of traditional
                agencies.
              </Typography>
            </HighlightBox>
          </div>
          <div className="secondRight">
            <HighlightBox
              bgColor="#3eb7ff"
              style={{ top: "0px", right: "20px", marginBottom: 50 }}
            >
              <Typography variant="h6" fontWeight="bold">
                <span>24HR</span> PROJECT KICKOFF
              </Typography>
              <Typography variant="body2">
                Kickstart your project within 24 hours of briefing.
              </Typography>
            </HighlightBox>

            <HighlightBox
              bgColor="#3eb7ff"
              style={{ top: "150px", right: "20px" }}
            >
              <Typography variant="h6" fontWeight="bold">
                <span>4.9★</span> CLIENT SATISFACTION
              </Typography>
              <Typography variant="body2">
                Our clients rate us 4.9 stars on average for our exceptional
                service.
              </Typography>
            </HighlightBox>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TopNotch;
