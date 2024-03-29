import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

import AboutUs from "../../images/firstImage/aboutus.jpg";

export default function FirstImage() {
  return (
    <Box>
      <CssBaseline />
      <Box
        sx={{
          height: 800,
          width: "100%",
          backgroundImage: `url(${AboutUs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(80%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 800,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "flex-start", sm: "flex-end" },
          justifyContent: { xs: "flex-end", sm: "center" },
          paddingRight: 10,
          paddingBottom: 10,
        }}
      >
        <Typography
          sx={{ fontSize: { xs: 32, sm: 40, md: 48, lg: 64 } }}
          fontWeight="bold"
          color="white"
        >
          We're a<span style={{ color: "#F14C48" }}> different </span>
          kind of
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 32, sm: 40, md: 48, lg: 64 } }}
          fontWeight="bold"
          color="white"
        >
          handyman service
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 18, sm: 20, md: 22, lg: 24 },
            width: { xs: "100%", sm: "50%" },
          }}
          fontWeight="regular"
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
