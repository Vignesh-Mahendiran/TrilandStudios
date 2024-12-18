import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { Drawer, keyframes, Modal, styled } from "@mui/material";

export const BannerContainer = styled("div")({
  ".banner": {
    // maxWidth: 1700,
    // display: "flex",
    // width: "90%",
    overflow: "hidden",
    gap: 50,
    alignItems: "center",
    // margin: "0 auto",
    p: { color: "#fff", fontSize: "1.2rem", lineHeight: 1.5 },
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
    ".leftBanner": {
      position: "relative",
      height: "100vh",
      background: "#00000087",
      display: "flex",
      alignItems: "center",
    },
    // ".rightBanner": {
    //   width: "50%",
    // },
  },
  h1: { fontSize: "3.2rem", color: "#fff", fontFamily: "Roboto Condensed", marginBottom: 20 },
  h2: { fontSize: "2.6rem", color: "#fff", fontFamily: "Roboto Condensed", marginBottom: 20 },

  "@media screen and (max-width: 768px)": {
    height: "100%",
    ".banner": {
      paddingBlock: "80px !important",
      maxWidth: 500,
      p: { fontSize: "1rem" },
    },
    h1: { fontSize: "2.4rem" },
  },
  "@media screen and (max-width: 600px)": {
    h1: { fontSize: "1.8rem" },
  },
});

export const PopoverContainer = styled("div")({
  background: "transparent",
  padding: 10,
  position: "relative",
  zIndex: 999,
  ".container": {
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.8)",
    width: "max-content",
    minWidth: 180,
    background: "#fff",
    color: "#000",
    padding: 10,
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    fontWeight: 600,
    borderRadius: 6,
  },
  li: {
    textTransform: "uppercase",
    display: "flex",
    padding: "15px 20px",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
  },
  a: {
    color: "#000",
    textTransform: "uppercase",
    textDecoration: "none",
    letterSpacing: "0.15em",
    display: "inline-block",
    position: "relative",
  },
  "li:after": {
    background: "none repeat scroll 0 0 transparent",
    bottom: 0,
    content: "''",
    display: "block",
    height: "3px",
    left: "50%",
    position: "absolute",
    background: "#000",
    transition: "width 0.3s ease 0s, left 0.3s ease 0s",
    width: 0,
  },
  "li:hover:after": {
    width: "100%",
    left: 0,
  },
});
export const Navcontainer = styled("div")({
  ".menus": {
    display: "none",
  },
  // background: "#00000087",
  position: "absolute",
  zIndex: 999,
  width: "100%",
  svg: {
    color: "#fff",
    fontWeight: 900,
  },
  ul: {
    listStyle: "none",
    display: "flex",
    gap: 10,
  },
  li: {
    textTransform: "uppercase",
    display: "flex",
    padding: "15px 20px",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
  },
  a: {
    color: "#fff",
    textTransform: "uppercase",
    textDecoration: "none",
    letterSpacing: "0.15em",
    display: "inline-block",
    position: "relative",
  },
  "li:after": {
    background: "none repeat scroll 0 0 transparent",
    bottom: 0,
    content: "''",
    display: "block",
    height: "2px",
    left: "50%",
    position: "absolute",
    background: "#fff",
    transition: "width 0.3s ease 0s, left 0.3s ease 0s",
    width: 0,
  },
  "li:hover:after": {
    width: "100%",
    left: 0,
  },
  img: {
    width: 200,
    marginTop: 20,
  },
  "@media screen and (max-width: 1200px)": {
    width: "calc(100% - 40px) !important",
  },
  "@media screen and (max-width: 768px)": {
    nav: { display: "none" },
    width: "100%",
    ".menus": { display: "block", cursor: "pointer", position: "absolute", right: 10, top: 20 },
  },
  "@media screen and (max-width: 600px)": {
    justifyContent: "center",
  },
});

export const FooterContainer = styled("div")({
  background: "#000",
  color: "#fff",
  ".logo img": {
    width: 200,
  },
  "@media screen and (max-width: 768px)": {
    ".logo": {
      width: "max-content",
      margin: "0 auto",
    },
  },

  marginTop: 50,
  paddingTop: 80,
  ".footerContent": {
    display: "flex",
    width: "90%",
    margin: "20px auto",
    justifyContent: "flex-end",
    gap: 40,
    div: {
      maxWidth: 400,
      minWidth: 300,
    },
  },
  ".contactus div": {
    display: "flex",
    gap: 10,
    marginBlock: 20,
    textAlign: "left",
  },
  p: { color: "#fff", fontSize: "1rem", lineHeight: 1.5 },
  ".copyrights": {
    borderTop: "1px solid rgba(215, 248, 243, 0.1)",
    marginTop: 80,
    textAlign: "center",
    paddingBlock: 20,
  },

  "@media screen and (max-width: 1220px)": {
    ".footerContent": {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  },
});

const shake = keyframes`
  0% { left: -110%; top: 90%; }
  50% { left: 10%; top: -30%; }
  100% { left: -10%; top: -10%; }
`;

export const SocialMediaContainer = styled("div")({
  ".btn": {
    display: "inline-block",
    width: "50px",
    height: "50px",
    background: "#0d1817",
    margin: "10px",
    borderRadius: "50%",
    boxShadow: "0 5px 15px -5px #535c68",
    color: "#fff",
    border: "1px solid #fff",
    overflow: "hidden",
    position: "relative",
  },
  ".btn svg": {
    fontSize: "20px",
    margin: "15px 15px",
    transition: "0.2s linear",
  },
  ".btn:hover svg": {
    transform: "scale(1.3)",
    color: "#0d1817",
  },
  ".btn::before": {
    content: "''",
    position: "absolute",
    width: "120%",
    height: "120%",
    background: "#fff",
    transform: "rotate(45deg)",
    left: "-110%",
    top: "90%",
  },
  ".btn:hover::before": {
    animation: `${shake} 1s 1`,
    top: "-10%",
    left: "-10%",
  },
});

export const StyledDrawer = styled(Drawer)({
  "& .MuiPaper-root": {
    background: "#0d1817",
  },
  ".content": {
    width: 300,
    background: "#0d1817",
  },
  ul: {
    listStyle: "none",
    padding: "30px 0 0",
  },
  li: {
    textTransform: "uppercase",
    fontWeight: 700,
    borderBottom: "1px solid rgba(215, 248, 243, 0.1)",
    cursor: "pointer",
    display: "block",
    position: "relative",
  },
  a: {
    color: "#000",
    textTransform: "uppercase",
    textDecoration: "none",
    letterSpacing: "0.15em",
    display: "block",
    padding: "15px 20px",
    position: "relative",
  },
});

export const ServiceContainer = styled("div")({
  background: "#fff",
  position: "relative",
  width: "100%",
  ".wrapper": {
    display: "flex",
    justifyContent: "center",
    gap: 30,
  },
  ".title": {
    textAlign: "center",
    padding: "80px 0 30px",
    fontSize: 28,
  },
  ".card-wrapper": {
    display: "inline-block",
    perspective: "1000px",
  },
  ".card img, .card video": {
    width: 500,
    height: 500,
    objectFit: "cover",
    borderRadius: 5,
  },
  svg: {
    fontSize: 35,
    color: "#000",
    background: "#fff",
  },
  ".card": {
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    position: "relative",
    borderRadius: 5,
    width: "500px",
    height: "500px",
    cursor: "pointer",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s ease-in-out",
    p: {
      color: "#767474",
      fontSize: 18,
    },
    ".front,.back": {
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "4px",

      backfaceVisibility: "hidden",
    },
    ".front": {
      color: "#fc545e",
      background: "#ffffff",
      fontWeight: 700,
      fontSize: "1rem",
      zIndex: 2,
      transform: "rotate3d(0, 0, 0, 0deg)",
    },
    ".back": {
      color: "#000",
      background: "#fff",
      fontSize: "1.5rem",
      transform: "rotate3d(1, 1, 0, 180deg)",
    },
  },
  ".card-wrapper.flip-diagonal-right:hover .card": {
    transform: "rotate3d(1, 1, 0, 180deg)",
  },
});

export const StyledModal = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  padding: 20,
  boxShadow: 24,
  outline: 0,
  background: "#fff",
  img: { width: 320, height: 320 },
  ".title": {
    textAlign: "center",
    marginBottom: 20,
  },
  ".subtitle": {
    textAlign: "center",
    marginBottom: 20,
  },
  ".container": { display: "flex", justifyContent: "space-between" },
});
