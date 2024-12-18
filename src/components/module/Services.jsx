import React, { useState } from "react";
import { ServiceContainer } from "../styles/home";
// import { menuCards } from "../constant/home";
import twodVideo from "../../assets/2D_Cartoon_Triland.mp4";
import { services } from "../constant/home";
import collation from "../../assets/international.jpg";
import ThreeD from "./ThreeD";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import threeDOutput from "../../assets/3doutput.jpg";
import twoDOutput from "../../assets/2doutput.jpeg";
import three3done from "../../assets/three3done.png";
import digimar from "../../assets/digi.jpg";
import editing from "../../assets/editing.jpg";
import gaming from "../../assets/gaming.jpg";
import vfx from "../../assets/vfx.jpg";

const threeDsubmenu = [
  { title: "3D Watch Product Animation", videosrc: "", imageSrc: three3done },
  { title: "", videosrc: "", imageSrc: "" },
  { title: "", videosrc: "", imageSrc: "" },
];
const Services = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <>
      <ServiceContainer>
        <h2 className="title">Our Services</h2>
        <div className="wrapper">
          <ThreeD
            title={"3D A nimations"}
            content={""}
            output={threeDOutput}
            subItem={threeDsubmenu}
          />
          <ThreeD output={twoDOutput} isLower />
          <ThreeD output={digimar} />
        </div>
        <div className="wrapper">
          <ThreeD output={editing} />
          <ThreeD output={gaming} isLower />
          <ThreeD output={vfx} />
        </div>
        <h2 className="title">Show Reel</h2>
        <div
          className="wrapper"
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              width: "90%",
              margin: "0 auto",
              maxWidth: 1200,
            }}
          >
            {playVideo ? (
              <video
                controls
                src={twodVideo}
                style={{ width: "100%" }}
                onPause={() => setPlayVideo(false)}
              />
            ) : (
              <>
                <img
                  src={collation}
                  style={{
                    width: "100%",
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
        </div>
      </ServiceContainer>
    </>
  );
};

export default Services;
