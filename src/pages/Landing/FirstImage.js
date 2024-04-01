import LandingImage from "../../images/firstImage/landing.jpg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function FirstImage() {
  return (
    <Box
      // data-aos="first-image-zoom-in"
      sx={{
        backgroundImage: `url(${LandingImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 800,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: { xs: "flex-end", sm: "center" },
      }}
    >
      <Box
        data-aos="fade-right"
        data-aos-once="true"
        sx={{ display: "flex", flexDirection: "column", ml: { xs: 5, md: 10 } }}
      >
        <Typography
          sx={{ fontSize: { xs: 32, sm: 40, md: 48, lg: 64 } }}
          fontWeight="700"
          color="white"
          mr={2}
        >
          The <span style={{ color: "#F14C48" }}>quality</span> you expect
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 32, sm: 40, md: 48, lg: 64 } }}
          fontWeight="700"
          color="white"
          mr={2}
        >
          The <span style={{ color: "#F14C48" }}>service</span> you deserve
        </Typography>
      </Box>

      <Box
        data-aos="fade-right"
        data-aos-once="true"
        sx={{
          display: "flex",
          flexDirection: "column",
          ml: { xs: 5, md: 10 },
          mb: 10,
        }}
      >
        <Typography
          sx={{ fontSize: { xs: 18, sm: 20, md: 22, lg: 24 } }}
          fontWeight="regular"
          color="white"
          mr={1}
        >
          Trust <span style={{ color: "#F14C48" }}>ANG Services Corp</span> for
          all your
        </Typography>

        <Typography
          sx={{ fontSize: { xs: 18, sm: 20, md: 22, lg: 24 } }}
          fontWeight="regular"
          color="white"
        >
          repair and renovation needs,
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 18, sm: 20, md: 22, lg: 24 } }}
          fontWeight="regular"
          color="white"
        >
          with comprehensive expertise in
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 18, sm: 20, md: 22, lg: 24 } }}
          fontWeight="regular"
          color="white"
        >
          services tailored to you
        </Typography>
      </Box>
    </Box>
  );
}
