import { styled } from "@mui/material";
import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { newServices } from "../constant/home";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const Container = styled("div")({
  "& h1": {
    marginBottom: 30,
    fontSize: 36,
    textAlign: "center",
  },
  ".videoContainer": {
    maxWidth: 800,
    width: "40%",
    margin: "0 auto",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    borderRadius: 20,
    marginBottom: 50,
    background: "#ececec",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "left",
    position: "relative",
  },
  ".playerWrapper": {
    position: "relative",
    width: "100%",
    paddingTop: "56.25%", // 16:9 Aspect Ratio
  },
  ".controlButton": {
    position: "absolute",
    bottom: "50%",
    left: "50%",
    transform: "translate(-50%, 50%)",
    width: 50,
    height: 50,
    background: "rgba(0, 0, 0, 0.6)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 30,
    cursor: "pointer",
    transition: "0.3s",
    opacity: 1,
    "&:hover": {
      background: "rgba(0, 0, 0, 0.8)",
    },
  },
  ".soundButton": {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    width: 40,
    height: 40,
    background: "rgba(0, 0, 0, 0.6)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 24,
    cursor: "pointer",
    transition: "0.3s",
    opacity: 0,
  },
  ".videoContainer:hover .soundButton": {
    opacity: 1, // Show sound button on hover
  },
  ".hidden": {
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
  },
  ".videoContainer:hover .controlButton": {
    opacity: 1, // Show play/pause button when hovered
  },
  ".react-player": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100% !important",
    height: "100% !important",
  },
  ".videoDetails": {
    padding: 15,
  },
  "& h3": {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  "& p": {
    fontSize: 16,
    color: "#555",
  },
  "@media screen and (max-width: 1024px)": {
    ".videoContainer": {
      width: "48%",
    },
  },
  "@media screen and (max-width: 768px)": {
    ".videoContainer": {
      width: "100%",
    },
  },
});

const Services = () => {
  const [playingVideos, setPlayingVideos] = useState({});
  const [mutedVideos, setMutedVideos] = useState({});
  const videoRefs = useRef({});

  const togglePlayPause = (url) => {
    setPlayingVideos(url);
  };

  const toggleMute = (url) => {
    setMutedVideos(url);
  };

  const handleVideoEnd = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].seekTo(0); // Reset video to start
    }
    setPlayingVideos((prev) => ({ ...prev, [index]: false })); // Pause the video
  };

  return (
    <Container id="services">
      <div className="wrapper">
        <h1>Services</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          {newServices.map((item, index) => (
            <div key={index} className="videoContainer" id={item.id}>
              <div className="playerWrapper">
                <ReactPlayer
                  ref={(player) => (videoRefs.current[index] = player)}
                  className="react-player"
                  url={`${item.url}`}
                  playing={playingVideos === item.url || false}
                  muted={mutedVideos === item.url || false}
                  controls={false}
                  width="100%"
                  height="100%"
                  onEnded={() => handleVideoEnd(index)} // Reset when finished
                />
                <div
                  className={`controlButton ${
                    playingVideos[index] ? "hidden" : ""
                  }`}
                  onClick={() =>
                    togglePlayPause(item.url === playingVideos ? "" : item.url)
                  }
                >
                  {playingVideos === item.url ? (
                    <PauseIcon fontSize="large" />
                  ) : (
                    <PlayArrowIcon fontSize="large" />
                  )}
                </div>
                <div
                  className="soundButton"
                  onClick={() =>
                    toggleMute(item.url === mutedVideos ? "" : item.url)
                  }
                >
                  {mutedVideos === item.url ? (
                    <VolumeOffIcon fontSize="small" />
                  ) : (
                    <VolumeUpIcon fontSize="small" />
                  )}
                </div>
              </div>
              <div className="videoDetails">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Services;
