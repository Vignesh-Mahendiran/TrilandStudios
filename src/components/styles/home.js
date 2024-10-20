import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { Drawer, keyframes, styled } from "@mui/material";

export const BannerContainer = styled("div")({
  height: "82vh",
  ".banner": {
    maxWidth: 700,
    width: "90%",
    margin: "0 auto",
    paddingBlock: "20vh",
    textAlign: "center",
    p: { color: "#d7f8f3", fontSize: "1.2rem", lineHeight: 1.5 },
    button: {
      all: "unset",
      color: "#00debc",
      border: "1px solid #00debc",
      padding: "15px 25px",
      margin: 30,
      borderRadius: 40,
      fontWeight: 900,
      cursor: "pointer",
      background: "transparent",
    },
  },
  h1: { fontSize: "3.2rem", marginBottom: 20 },

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
  background: "radial-gradient(50% 100% at 49.1% 0%,rgba(0,222,188,.15) 0%,rgba(12,23,22,0) 100%)",
});

export const Navcontainer = styled("div")({
  background: "radial-gradient(50% 100% at 49.1% 100%,rgba(0,222,188,.15) 0%,rgba(12,23,22,0) 100%)",
  ".menus": {
    display: "none",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    gap: 10,
  },
  li: {
    textTransform: "uppercase",
    fontWeight: 700,
    cursor: "pointer",
    display: "inline-block",
    position: "relative",
  },
  a: {
    color: "#fff",
    textTransform: "uppercase",
    textDecoration: "none",
    letterSpacing: "0.15em",
    display: "inline-block",
    padding: "15px 20px",
    position: "relative",
  },
  "a:after": {
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
  "a:hover:after": {
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

export const ContentContainer = styled("div")({
  "& .youtube": {
    maxWidth: 912,
    height: 513,
    width: "90%",
    margin: "0 auto",
    position: "relative",
  },

  "& .youtube iframe": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  textAlign: "center",
  ".colored": {
    color: "#00debc",
  },
  h1: {
    margin: 30,
  },
  p: {
    color: "#d7f8f3",
    fontSize: "1.1rem",
    margin: 30,
  },
  ".menucard": {
    width: 400,
    margin: "40px auto",
    borderRadius: 20,
  },
  img: {
    objectFit: "cover",
    width: "100%",
    borderRadius: "20px",
  },
  "@media screen and (max-width: 768px)": {
    "& .youtube": {
      height: "360px !important",
    },
    p: {
      fontSize: "1rem !important",
    },
  },
  "@media screen and (max-width: 500px)": {
    "& .youtube": {
      height: "240px !important",
    },
    ".menucard": {
      width: 300,
    },
  },
});

export const FooterContainer = styled("div")({
  ".logo img": {
    width: 200,
  },
  "@media screen and (max-width: 768px)": {
    ".logo": {
      width: "max-content",
      margin: "0 auto",
    },
  },

  background:
    "radial-gradient(54.12% 66% at 50% 90.1%, rgba(0, 222, 188, 0.15) 0%, rgba(12, 23, 22, 0) 100%)",
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
  p: { color: "#d7f8f3", fontSize: "1rem", lineHeight: 1.5 },
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
    color: "rgba(0, 222, 188)",
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

    background: "rgba(0, 222, 188)",
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
    color: "#fff",
    textTransform: "uppercase",
    textDecoration: "none",
    letterSpacing: "0.15em",
    display: "block",
    padding: "15px 20px",
    position: "relative",
  },
});
