import { styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { newServices } from "../constant/home";
import { OtherHouses } from "@mui/icons-material";

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
  },
  ".playerWrapper": {
    position: "relative",
    width: "100%",
  },
  img: {
    maxWidth: "100%",
  },
  ".react-player, .playerWrapper img": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100% !important",
    height: "100% !important",
    objectFit: "cover", // Ensures the image fills the space like a video
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
              <div
                className="playerWrapper"
                style={{
                  paddingTop: "56.25%",
                }}
              >
                {item.imgUrl ? (
                  <img src={item.imgUrl} />
                ) : (
                  <ReactPlayer
                    className="react-player"
                    url={item.url}
                    playing={false}
                    controls={true}
                    muted={true}
                    loop={true}
                    width="100%"
                    height="100%"
                  />
                )}
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
