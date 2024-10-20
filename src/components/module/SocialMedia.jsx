import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { SocialMediaContainer } from "../styles/home";
const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <div class="container">
        <a class="btn" href="#">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a class="btn" href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a class="btn" href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a class="btn" href="#">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </SocialMediaContainer>
  );
};

export default SocialMedia;
