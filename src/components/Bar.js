import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

import WhiteLogo80 from "../images/whiteLogo80.svg";

export default function Bar() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 100,
          width: "100%",
          position: "absolute",
          zIndex: "tooltip",
        }}
      >
        <IconButton sx={{ marginLeft: "15%" }}>
          <img src={WhiteLogo80} alt="white Logo" />
        </IconButton>
        <Box sx={{ marginRight: "15%" }}>
          <Button
            variant="text"
            sx={{ fontWeight: "bold", color: "rgba(255, 255, 255, 0.8)" }}
          >
            Services
          </Button>
          <Button
            variant="text"
            sx={{ fontWeight: "bold", color: "rgba(255, 255, 255, 0.8)" }}
          >
            About Us
          </Button>
          <Button
            variant="text"
            sx={{ fontWeight: "bold", color: "rgba(255, 255, 255, 0.8)" }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </div>
  );
}
