import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

import { cloneElement, useState } from "react";

import WhiteLogo from "../images/whiteLogo.svg";
import ColorLogo from "../images/colorLogo.svg";

function Scroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "#F14C48" : "transparent",
    },
  });
}

export default function LogoAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box>
      <Scroll>
        <AppBar sx={{ height: "64px", alignItems: "center" }}>
          <Toolbar sx={{ width: "80%" }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={WhiteLogo} alt="white Logo" />
            </IconButton>
            <div style={{ flexGrow: 1 }}></div>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "white",
                display: { xs: "none", sm: "block" },
              }}
            >
              SERVICES
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "white",
                display: { xs: "none", sm: "block" },
              }}
            >
              ABOUT US
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "white",
                display: { xs: "none", sm: "block" },
              }}
            >
              CONTACT US
            </Button>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Scroll>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        <Box
          onClick={handleDrawerToggle}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="SERVICES" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="ABOUT US" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="CONTACT US" />
              </ListItemButton>
            </ListItem>
          </List>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", mr: 2, mb: 1 }}
          >
            <img src={ColorLogo} alt="color logo" style={{ width: 70 }} />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
