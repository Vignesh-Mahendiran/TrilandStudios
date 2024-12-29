import React, { useEffect, useState } from "react";
import trilandStudios from "../../assets/trilandStudio.svg";
import { Navcontainer, PopoverContainer, StyledDrawer } from "../styles/home";
import MenuIcon from "@mui/icons-material/Menu";
import { navItems } from "../constant/home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { List, Popper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import AppDrawer from "./test";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenu, setSubMenu] = useState([]);
  const navigate = useNavigate();
  return (
    <>
      <Navcontainer className="navbar">
        <div
          className="wrapper"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src={trilandStudios}
            style={{
              cursor: "pointer",
            }}
            alt="trilandStudioLogo"
            onClick={() => navigate("/")}
          />
          <nav>
            <ul>
              {navItems.map((item) => (
                <li
                  onMouseEnter={(e) => {
                    if (!!item?.sub?.length) {
                      setAnchorEl(e.currentTarget);
                      setMenuOpen(true);
                      setSubMenu(item?.sub);
                    }
                  }}
                  onMouseLeave={() => setMenuOpen(false)}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => {
                      if (item.navigate) {
                        navigate(item.navigate);
                      }
                    }}
                  >
                    {item.name}
                  </a>
                  {!!item?.sub?.length && <ExpandMoreIcon />}
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
        <AppDrawer />
      </StyledDrawer>

      <Popper
        id={menuOpen ? "simple-popover" : undefined}
        open={menuOpen}
        style={{ zIndex: 9999 }}
        anchorEl={anchorEl}
      >
        <PopoverContainer
          onMouseEnter={(e) => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <div className="container">
            {subMenu?.map((value) => (
              <li style={{ paddingBlock: 10 }}>
                <a
                  href={`#${value.id}`}
                  onClick={() => {
                    console.log(value);
                    if (value.navigate) {
                      navigate(value.navigate);
                    }
                  }}
                >
                  {value.name}
                </a>
              </li>
            ))}
          </div>
        </PopoverContainer>
      </Popper>
    </>
  );
};

export default Navbar;
