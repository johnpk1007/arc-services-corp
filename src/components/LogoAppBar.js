import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { Link } from "react-router-dom";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

import { cloneElement, useState } from "react";

import WhiteLogo from "../images/logo/whiteLogo.svg";
import ColorLogo from "../images/logo/colorLogo.svg";

function Scroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "#F14C48" : "transparent",
      color: trigger ? "white" : "black",
    },
  });
}

export default function LogoAppBar({ color, location }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box>
      <Scroll>
        <AppBar
          sx={{
            height: "64px",
            paddingLeft: { xs: "0%", sm: "10%" },
          }}
        >
          <Toolbar sx={{ width: { xs: "90%", sm: "80%" } }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              component={Link}
              to="/"
            >
              <img src={WhiteLogo} alt="company secondary logo" />
            </IconButton>
            <div style={{ flexGrow: 1 }}></div>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: color ? "inherit" : "white",
                display:
                  location === "services"
                    ? "none"
                    : { xs: "none", sm: "block" },
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              component={Link}
              to="/services"
            >
              SERVICES
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: color ? "inherit" : "white",
                display:
                  location === "aboutus" ? "none" : { xs: "none", sm: "block" },
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              component={Link}
              to="/aboutus"
            >
              ABOUT US
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: color ? "inherit" : "white",
                display:
                  location === "contactus"
                    ? "none"
                    : { xs: "none", sm: "block" },
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              component={Link}
              to="/contactus"
            >
              CONTACT US
            </Button>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "block", sm: "none" },
                "&:hover": {
                  backgroundColor: "transparent",
                },
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
            <ListItem
              disablePadding
              sx={{ display: location === "services" ? "none" : "block" }}
            >
              <ListItemButton component={Link} to="/services">
                <ListItemText primary="SERVICES" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: location === "aboutus" ? "none" : "block" }}
            >
              <ListItemButton component={Link} to="/aboutus">
                <ListItemText primary="ABOUT US" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: location === "contactus" ? "none" : "block" }}
            >
              <ListItemButton component={Link} to="/contactus">
                <ListItemText primary="CONTACT US" />
              </ListItemButton>
            </ListItem>
          </List>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", mr: 2, mb: 1 }}
          >
            <img
              src={ColorLogo}
              alt="company main logo"
              style={{ width: 70 }}
            />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
