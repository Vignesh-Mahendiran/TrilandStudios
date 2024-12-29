import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { StyledModal } from "../styles/home";

const ServicesShow = ({ url, title }) => {
  const [currentUrl, setCurrentUrl] = useState(null);
  const [open, setOpen] = useState(false);
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
      <div className="servicesContainer" onClick={() => setOpen(true)}>
        <div
          style={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius: 20,
            overflow: "hidden",
          }}
          onMouseEnter={() => {
            setCurrentUrl(url);
          }}
          onMouseLeave={() => {
            setCurrentUrl(null);
          }}
        >
          <div className="videoContainer">
            <ReactPlayer
              url={url}
              playing={currentUrl === url}
              controls={false}
              muted={true}
              loop={true}
              style={{
                marginTop: screenWidth > 768 ? "-19%" : "-22%",
                pointerEvents: "none",
              }}
              width="100%"
              height={
                screenWidth > 768
                  ? "420px"
                  : screenWidth > 450
                  ? "350px"
                  : screenWidth > 380
                  ? "310px"
                  : "280px"
              }
            />
          </div>
          <p className="subtitle">{title}</p>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <StyledModal>
          <ReactPlayer
            url={url}
            playing={true}
            controls={true}
            muted={true}
            loop={true}
            width="100%"
            height={"500px"}
          />
        </StyledModal>
      </Modal>
    </>
  );
};

export default ServicesShow;
