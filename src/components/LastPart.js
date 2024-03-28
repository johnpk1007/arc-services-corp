import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ColorLogo from "../images/logo/colorLogo.svg";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function ThirdWhy() {
  return (
    <Box
      sx={{
        height: "500px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "200px",
      }}
    >
      <Typography fontSize={32} fontWeight="bold" gutterBottom>
        Get In Touch
      </Typography>
      <Typography
        fontSize={20}
        fontWeight="regular"
        color="text.secondary"
        marginBottom="80px"
        textAlign="center"
        width="80%"
      >
        For inquiries, estimates, or to schedule a service, please don't
        hesitate to reach out to us. Our team is here to assist you with all
        your home improvement needs.
      </Typography>
      <Button
        variant="contained"
        sx={{
          width: { xs: "90%", sm: "160px" },
          bgcolor: "#F14C48",
          fontSize: 20,
          marginBottom: "90px",
          "&:hover": {
            backgroundColor: "#d84440",
          },
        }}
        disableElevation
      >
        Contact us
      </Button>
      <Divider sx={{ width: "100%", marginBottom: "90px" }} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "10px" }}
      >
        <img src={ColorLogo} alt="color logo" />
        <Typography
          fontSize={20}
          fontWeight="regular"
          color="text.secondary"
          textAlign="center"
          width="80%"
          marginLeft="10px"
          paddingTop="20px"
        >
          All rights reserved ©ANG Services Corp
        </Typography>
      </Box>
    </Box>
  );
}
