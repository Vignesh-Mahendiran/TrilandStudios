import React from "react";
import triland from "../../assets/trilandStudio.svg";
import trilandLogo from "../../assets/firstLogo.png";
import { FooterContainer } from "../styles/home";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SocialMedia from "./SocialMedia";
import { ROUTE_PATHS } from "../../routes/routePath";
import { useNavigate } from "react-router-dom";
import ContactForm from "./Form";
const Footer = () => {
  const navigate = useNavigate();
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This enables smooth scrolling to the top
    });
  }
  return (
    <FooterContainer id="contact">
      <div className="content"></div>
      <div className="dialog">
        <div className="wrapper">
          <div className="footerContent">
            <div>
              <div className="logo">
                {/* <img src={trilandLogo} className="trilandLogo" /> */}
                <img
                  className="triland"
                  src={triland}
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate(ROUTE_PATHS.home);
                    scrollToTop();
                  }}
                  alt="trilandStudios"
                />
              </div>
              <p>
                Triland Animation Studio's top priority is always to take care
                of our customers and meet their goals. We deliver top-notch
                animation within your project time and budget.
              </p>
              <div style={{ marginTop: 10 }}>
                <h2>Follow us</h2>
                <div>
                  <SocialMedia />
                </div>
              </div>
            </div>
            <div className="contactus">
              <h2>Contact Info</h2>
              <div>
                <PlaceIcon />
                <p>
                  Old Door No.6, New Door No.20, Andavar Nagar, 3rd Street,
                  Kodambakkam, Chennai - 600024
                </p>
              </div>
              <div>
                <EmailIcon />
                <p>contact@trilandstudios.in</p>
              </div>
              <div>
                <PhoneIcon />
                <p>+91 8248002829</p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
          <p className="copyrights">
            © 2024 || Triland Animation Studios || All rights reserved.
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
