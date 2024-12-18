import React, { useState } from "react";
import twoD1 from "../../assets/twoD1.png";
import twodVideo from "../../assets/2D_Cartoon_Triland.mp4";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, IconButton, Modal } from "@mui/material";
import { StyledModal } from "../styles/home";
import ReactPlayer from "react-player/vimeo";

const ThreeD = ({ isLower, title, content, output, subItem }) => {
  const [open, setOpen] = useState(false);
  const [inneropen, setinnerOpen] = useState(false);

  return (
    <>
      <div className="card-wrapper flip-diagonal-right">
        <div className="card" style={{ top: isLower ? 60 : 0 }}>
          <div className="front">
            <img src={output} alt="twoDimensions" />
          </div>
          <div className="back">
            <h3>{title}</h3>
            <p>{content}</p>

            <div id="container" onClick={() => setOpen(true)}>
              <IconButton>
                <PlayArrowIcon />
              </IconButton>
              <div class="dot"></div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <StyledModal>
          <h2 className="title">{title}</h2>
          <div className="container">
            {subItem?.map((item) => (
              <div>
                <h4 className="subtitle">{item?.title}</h4>
                <img
                  src={item?.imageSrc}
                  alt="twoDimensions"
                  onClick={() => {
                    setinnerOpen(true);
                    setOpen(false);
                  }}
                />
              </div>
            ))}
          </div>
        </StyledModal>
      </Modal>
      <Modal open={inneropen} onClose={() => setinnerOpen(false)}>
        <StyledModal
          style={{
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            padding: 0,
            background: "transparent",
          }}
        >
          <div style={{}}>
            <ReactPlayer
              url="https://vimeo.com/1040361248"
              playing={true}
              controls={true}
              muted={true}
              width="100%"
              height="500px"
            />
          </div>
        </StyledModal>
      </Modal>
    </>
  );
};

export default ThreeD;
