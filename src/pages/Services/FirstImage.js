import ServiceImage from "../../images/firstImage/services.jpg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function FirstImage() {
  return (
    <Box>
      <Box
        sx={{
          height: 800,
          width: "100%",
          backgroundImage: `url(${ServiceImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(80%)",
        }}
      />
      <Box
        data-aos="fade-up"
        data-aos-once="true"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 800,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: { xs: "flex-end", sm: "center" },
          paddingX: 3,
          paddingBottom: 10,
        }}
      >
        <Typography
          sx={{ fontSize: { xs: 32, sm: 40, md: 48, lg: 64 } }}
          fontWeight="bold"
          color="white"
          gutterBottom
        >
          Let's get to
          <span style={{ color: "#F14C48" }}> work</span>
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 18, sm: 20, md: 22, lg: 24 } }}
          fontWeight="regular"
          color="white"
        >
          At
          <span style={{ color: "#F14C48" }}> ANG Service Corp, </span>
          it's About More Than Just Services.
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 18, sm: 20, md: 22, lg: 24 } }}
          fontWeight="regular"
          color="white"
        >
          Explore our Process and Hear from Satisfied Clients
        </Typography>
      </Box>
    </Box>
  );
}
