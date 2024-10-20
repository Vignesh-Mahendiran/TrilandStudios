import React, { useEffect, useState } from "react";
import trilandStudios from "../../assets/trilandStudio.png";
import { Navcontainer, StyledDrawer } from "../styles/home";
import MenuIcon from "@mui/icons-material/Menu";
import { navItems } from "../constant/home";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 800);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navcontainer
        style={
          isSticky
            ? {
                position: "sticky",
                top: 0,
                left: 0,
                zIndex: 999,
                background: "rgba(13, 24, 23, 0.7)",
              }
            : {}
        }
      >
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
