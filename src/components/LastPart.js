import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ColorLogo from "../images/logo/colorLogo.svg";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

import { Link } from "react-router-dom";

export default function ThirdWhy() {
  return (
    <Box
      sx={{
        minHeight: "400px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "200px",
      }}
    >
      <Box
        data-aos="fade-up"
        data-aos-once="true"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: 24, sm: 26, md: 28, lg: 32 } }}
          fontWeight="700"
          gutterBottom
        >
          Get In Touch
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
          fontWeight="400"
          color="text.secondary"
          marginBottom="80px"
          textAlign="center"
          width="80%"
        >
          For inquiries, estimates, or to schedule a service, please don't
          hesitate to reach out to us. Our team is here to assist you with all
          your home improvement needs.
        </Typography>
      </Box>
      <Button
        component={Link}
        to="/contactus"
        data-aos="fade-up"
        data-aos-once="true"
        variant="contained"
        sx={{
          width: { xs: "90%", sm: "160px" },
          bgcolor: "#F14C48",
          fontSize: { xs: 16, sm: 17, md: 18, lg: 20 },
          marginBottom: "90px",
          "&:hover": {
            backgroundColor: "#d84440",
          },
        }}
        disableElevation
      >
        Contact us <span style={{ display: "none" }}> so we can help you</span>
      </Button>
      <Divider sx={{ width: "100%" }} />
      <Box
        height="150px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img src={ColorLogo} alt="company main logo" />
        <Typography
          sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
          fontWeight="400"
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
