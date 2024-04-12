import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AboutUs from "../../images/firstImage/aboutus.jpg";
import AboutUsMobile from "../../images/firstImage/aboutusMobile.jpeg";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

export default function FirstImage() {
  return (
    <Box>
      <Box
        sx={{
          height: 800,
          width: "100%",
          backgroundImage: {
            xs: `url(${AboutUsMobile})`,
            sm: `url(${AboutUs})`,
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(80%)",
        }}
      />
      <Box
        data-aos-delay="500"
        data-aos="fade-left"
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
          alignItems: "flex-end",
          justifyContent: { xs: "flex-end", sm: "center" },
          paddingBottom: { xs: 20, sm: 0 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            marginRight: { xs: 5, sm: 10 },
            fontSize: { xs: 32, sm: 40, md: 48, lg: 64 },
            width: { xs: "90%", sm: "60%", lg: "50%" },
          }}
          fontWeight="700"
          color="white"
          textAlign="right"
          gutterBottom
        >
          We're a<span style={{ color: "#F14C48" }}> different </span>
          kind of handyman service
        </Typography>

        <Typography
          variant="h2"
          sx={{
            marginRight: { xs: 5, sm: 10 },
            fontSize: { xs: 18, sm: 20, md: 22, lg: 24 },
            width: { xs: "90%", sm: "50%" },
          }}
          fontWeight="400"
          color="white"
          textAlign="right"
        >
          At<span style={{ color: "#F14C48" }}> ANG Services Corp, </span> we
          are more than just a handyman service. We're your trusted partner in
          creating the home of your dreams.
        </Typography>
      </Box>
    </Box>
  );
}
