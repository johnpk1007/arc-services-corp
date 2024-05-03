import ServiceImage from "../../images/firstImage/services.jpg";
import ServiceImageMobile from "../../images/firstImage/servicesMobile.jpeg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useEffect } from "react";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

export default function FirstImage() {
  useEffect(() => {
    const img = new Image();
    img.src = ServiceImage;
  }, []);
  return (
    <Box>
      <Box
        sx={{
          height: 800,
          width: "100%",
          backgroundImage: {
            xs: `url(${ServiceImageMobile})`,
            sm: `url(${ServiceImage})`,
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(80%)",
        }}
      />
      <Box
        data-aos-delay="700"
        data-aos="custom-fade"
        data-aos-once="true"
        sx={{
          boxSizing: "border-box",
          position: "absolute",
          top: 0,
          left: 0,
          height: 800,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: { xs: "flex-end", sm: "center" },
          paddingX: 3,
          paddingBottom: { xs: 20, sm: 0 },
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: 32, sm: 40, md: 48, lg: 64 } }}
          fontWeight="700"
          color="white"
          gutterBottom
        >
          Let's get to
          <span style={{ color: "#F14C48" }}> work</span>
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 18, sm: 20, md: 22, lg: 24 },
          }}
          fontWeight="400"
          color="white"
          textAlign="center"
        >
          At
          <span style={{ color: "#F14C48" }}> ANG Service Corp, </span>
          it's About More Than Just Services.
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: 18, sm: 20, md: 22, lg: 24 },
          }}
          fontWeight="400"
          color="white"
          textAlign="center"
        >
          Explore our Process and Hear from Satisfied Clients
        </Typography>
      </Box>
    </Box>
  );
}
