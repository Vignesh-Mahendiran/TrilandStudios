import React, { useEffect, useState } from "react";
import trilandStudios from "../../assets/trilandStudio.png";
import { Navcontainer, StyledDrawer } from "../styles/home";
import MenuIcon from "@mui/icons-material/Menu";
import { navItems } from "../constant/home";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navcontainer>
        <div
          className="wrapper"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={trilandStudios} alt="trilandStudioLogo" />
          <nav>
            <ul>
              {navItems.map((item) => (
                <li>
                  <a href={`#${item.id}`}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="menus" onClick={() => setOpen(true)}>
            <MenuIcon />
          </div>
        </div>
      </Navcontainer>
      <StyledDrawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="content">
          <ul>
            {navItems.map((item) => (
              <li>
                <a onClick={() => setOpen(false)} href={`#${item.id}`}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </StyledDrawer>
    </>
  );
};

export default Navbar;
