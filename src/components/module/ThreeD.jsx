import React, { useState } from "react";
import twoD1 from "../../assets/twoD1.png";
import twodVideo from "../../assets/2D_Cartoon_Triland.mp4";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, IconButton, Modal } from "@mui/material";
import { StyledModal } from "../styles/home";

const ThreeD = () => {
  const [open, setOpen] = useState(false);
  const [inneropen, setinnerOpen] = useState(false);

  return (
    <>
      <div className="card-wrapper flip-diagonal-right">
        <div className="card">
          <div className="front">
            <img src={twoD1} alt="twoDimensions" />
          </div>
          <div className="back">
            <h3>2D Cartoon</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque laborum culpa
              recusandae
            </p>

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
          <h2 className="title">2d Animation</h2>
          {/* <video controls src={twodVideo} style={{ width: 800 }} /> */}
          <div className="container">
            <div>
              <h4 className="subtitle">2D Cartoon</h4>
              <img src={twoD1} alt="twoDimensions" onClick={() => setinnerOpen(true)} />
            </div>
            <div>
              <h4 className="subtitle">2D Cartoon</h4>
              <img src={twoD1} alt="twoDimensions" />
            </div>
            <div>
              <h4 className="subtitle">2D Cartoon</h4>
              <img src={twoD1} alt="twoDimensions" />
            </div>
          </div>
        </StyledModal>
      </Modal>
      <Modal open={inneropen} onClose={() => setinnerOpen(false)}>
        <StyledModal style={{ width: 800, padding: 0, background: "transparent" }}>
          <video controls src={twodVideo} style={{ width: 800 }} />
        </StyledModal>
      </Modal>
    </>
  );
};

export default ThreeD;
