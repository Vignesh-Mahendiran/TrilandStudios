import React, { useEffect, useState } from "react";
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
import ReactPlayer from "react-player";

const Services = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <ServiceContainer>
        <h2 className="title">Our Services</h2>
        <div className="wrapper">
          <ThreeD
            contentId={"3dAnimation"}
            title={"3D Animations"}
            content={"Where Imagination Meets Precision"}
            output={threeDOutput}
          />
          <ThreeD
            contentId={"2dAnimation"}
            title={"2D Animations"}
            content={"Telling Stories Through 2D Motion"}
            output={twoDOutput}
            isLower
          />
          <ThreeD
            title={"Digital Marketing & Advertisements"}
            content={"Building Bridges Between You and Your Customers"}
            contentId={"digitalMarketing"}
            output={digimar}
          />
        </div>
        <div className="wrapper">
          <ThreeD
            title={"Audio / Video Editing"}
            content={"Transforming Raw Footage Into Art"}
            contentId={"vfxEditing"}
            output={editing}
          />
          <ThreeD
            title={"Cinematic Advertisement"}
            content={"Because Your Brand Deserves the Spotlight"}
            contentId={"digitalMarketing"}
            output={gaming}
            isLower
          />
          <ThreeD
            title={"Visual Effects"}
            content={"Because Reality Isn’t Enough"}
            contentId={"vfxEditing"}
            output={vfx}
          />
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
            <ReactPlayer
              url={"https://vimeo.com/1042734577?share=copy"}
              playing={false}
              controls={true}
              muted={true}
              loop={true}
              width="100%"
              height={
                screenWidth > 1200
                  ? "800px"
                  : screenWidth > 800
                  ? "500px"
                  : screenWidth > 600
                  ? "300px"
                  : "250px"
              }
            />

            {/* {playVideo ? (
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
            )} */}
          </div>
        </div>
      </ServiceContainer>
    </>
  );
};

export default Services;
