import React, { useState } from "react";
import trilandStudios from "../../assets/trilandStudio.png";
import { Navcontainer, StyledDrawer } from "../styles/home";
import MenuIcon from "@mui/icons-material/Menu";
import { navItems } from "../constant/home";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navcontainer className="wrapper" id="home">
        <img src={trilandStudios} alt="trilandStudioLogo" />
        <nav>
          <ul>
            {navItems.map((item) => (
              <li>
                <a href="#">{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="menus" onClick={() => setOpen(true)}>
          <MenuIcon />
        </div>
      </Navcontainer>
      <StyledDrawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="content">
          <ul>
            {navItems.map((item) => (
              <li>
                <a href={`#${item.id}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </StyledDrawer>
    </>
  );
};

export default Navbar;
