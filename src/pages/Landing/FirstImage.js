import LandingImage from "../../images/firstImage/landing.jpg";
import LandingImageMobile from "../../images/firstImage/landingMobile.jpeg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

export default function FirstImage() {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        backgroundImage: {
          xs: `url(${LandingImageMobile})`,
          sm: `url(${LandingImage})`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 800,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: { xs: "flex-end", sm: "center" },
        position: "relative",
        paddingBottom: { xs: 20, sm: 0 },
      }}
    >
      <Box
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-delay="700"
        sx={{
          display: "flex",
          flexDirection: "column",
          ml: { xs: 3, sm: 5, md: 10, xl: "10%" },
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: 32, sm: 40, md: 48, lg: 64 } }}
          fontWeight="700"
          color="white"
          mr={2}
        >
          The <span style={{ color: "#F14C48" }}>quality</span> you expect
        </Typography>
        <Typography
          gutterBottom
          variant="h2"
          sx={{ fontSize: { xs: 32, sm: 40, md: 48, lg: 64 } }}
          fontWeight="700"
          color="white"
          mr={2}
        >
          The <span style={{ color: "#F14C48" }}>service</span> you deserve
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: 18, sm: 20, md: 22, lg: 24 },
            width: { xs: "90%", sm: 500, lg: 400 },
          }}
          fontWeight="400"
          color="white"
          mr={1}
        >
          Trust <span style={{ color: "#F14C48" }}>ANG Services Corp</span> in
          Miami, FL for all your handyman and repair service needs, with
          comprehensive expertise in services tailored to you
        </Typography>
      </Box>
    </Box>
  );
}
