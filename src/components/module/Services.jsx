import React, { useState } from "react";
import { ServiceContainer } from "../styles/home";
// import { menuCards } from "../constant/home";
import twodVideo from "../../assets/2D_Cartoon_Triland.mp4";
import { services } from "../constant/home";
import collation from "../../assets/international.jpg";
import ThreeD from "./ThreeD";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Services = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <>
      <ServiceContainer>
        <h2 className="title">Our Services</h2>

        <div className="wrapper">
          <ThreeD />
          <ThreeD />
          <ThreeD />
        </div>
        <h2 className="title">Show Reel</h2>
        <div
          className="wrapper"
          style={{
            position: "relative",
          }}
        >
          {playVideo ? (
            <video controls src={twodVideo} style={{ width: 1200 }} onPause={() => setPlayVideo(false)} />
          ) : (
            <>
              <img
                src={collation}
                width={1200}
                style={{
                  objectFit: "cover",
                }}
              />
              <IconButton
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  background: "#fff",
                }}
                onClick={() => setPlayVideo(true)}
              >
                <PlayArrowIcon />
              </IconButton>
            </>
          )}
        </div>
      </ServiceContainer>
    </>
  );
};

export default Services;
