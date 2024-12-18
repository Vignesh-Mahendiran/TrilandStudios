import React from "react";
import triland from "../../assets/trilandStudio.svg";
import { FooterContainer } from "../styles/home";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SocialMedia from "./SocialMedia";
const Footer = () => {
  return (
    <FooterContainer id="contact">
      <div className="wrapper">
        <div className="logo">
          <img src={triland} alt="trilandStudios" />
        </div>
        <div className="footerContent">
          <div>
            <p>
              Triland Animation Studio's top priority is always to take care of
              our customers and meet their goals. We deliver top-notch animation
              within your project time and budget.
            </p>
          </div>
          <div className="contactus">
            <h2>Contact Info</h2>
            <div>
              <PlaceIcon />
              <p>Vinayagapuram, Surapet, Chennai - 600099</p>
            </div>
            <div>
              <EmailIcon />
              <p>trilandanimationstudios@gmail.com</p>
            </div>
            <div>
              <PhoneIcon />
              <p>+91 8248002829</p>
            </div>
          </div>
          <div>
            <h2>Follow us</h2>
            <div>
              <SocialMedia />
            </div>
          </div>
        </div>
        <p className="copyrights">
          © 2024 || Triland Animation Studios || All rights reserved.
        </p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
