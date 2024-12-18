import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import { navItems } from "../constant/home";
import { useNavigate } from "react-router-dom";

const StyledAccordian = styled(Accordion)({
  "&::before": {
    display: "none",
  },
  ul: {
    padding: "0px 0 0",
  },
  a: {
    textTransform: "uppercase",
    fontWeight: 600,
  },
  ".Mui-expanded": {
    margin: 0,
  },
  ".MuiAccordionSummary-content": {
    margin: 0,
  },
  ".MuiAccordionDetails-root": { padding: 0 },
});
const AppDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (isOpen) => () => {
    setDrawerOpen(isOpen);
  };

  const navigate = useNavigate();
  const renderMenu = (menu) => {
    if (menu.sub) {
      return (
        <StyledAccordian
          style={{
            boxShadow: "none",
          }}
          key={menu.id}
        >
          <AccordionSummary
            style={{ padding: 0 }}
            expandIcon={<ExpandMoreIcon />}
          >
            <a
              style={{
                textTransform: "uppercase",
              }}
            >
              {menu.name}
            </a>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {menu.sub.map((subItem) => (
                <ListItemButton key={subItem.id}>
                  <a
                    style={{ padding: 0 }}
                    href={`#${subItem.id}`}
                    onClick={() => {
                      if (subItem.navigate) {
                        navigate(subItem.navigate);
                      }
                    }}
                  >
                    {subItem.name}
                  </a>
                </ListItemButton>
              ))}
            </List>
          </AccordionDetails>
        </StyledAccordian>
      );
    }

    return (
      <a
        key={menu.id}
        href={`#${menu.id}`}
        style={{ fontWeight: 600 }}
        onClick={() => {
          if (menu.navigate) {
            navigate(menu.navigate);
          }
        }}
      >
        {menu.name}
      </a>
    );
  };

  return (
    <div
      style={{
        width: 250,
        padding: "16px",
      }}
    >
      <List>{navItems.map((menu) => renderMenu(menu))}</List>
    </div>
  );
};

export default AppDrawer;
