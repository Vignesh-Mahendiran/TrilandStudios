import React, { useState } from "react";
import twoD1 from "../../assets/twoD1.png";
import twodVideo from "../../assets/2D_Cartoon_Triland.mp4";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton } from "@mui/material";
import ReactPlayer from "react-player/vimeo";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes/routePath";

const ThreeD = ({ contentId, isLower, title, content, output }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="card-wrapper flip-diagonal-right">
        <div className="card" style={{ top: isLower ? 60 : 0 }}>
          <div className="front">
            <img src={output} alt="twoDimensions" />
          </div>
          <div
            className="back"
            onClick={() => navigate(`${ROUTE_PATHS.services}#${contentId}`)}
          >
            <h3>{title}</h3>
            <p>{content}</p>

            <div id="container">
              <IconButton>
                <PlayArrowIcon />
              </IconButton>
              <div class="dot"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <ReactPlayer
              url="https://vimeo.com/1040361248"
              playing={true}
              controls={true}
              muted={true}
              width="100%"
              height="500px"
            /> */}
    </>
  );
};

export default ThreeD;
