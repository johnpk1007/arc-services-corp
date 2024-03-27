import LandingImage from "../../images/firstImage/landing.jpg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function FirstImage() {
  return (
    <Box
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
      <Box sx={{ display: "flex", ml: { xs: 5, md: 10 } }}>
        <Typography
          sx={{ fontSize: { xs: 32, sm: 40, md: 48, lg: 64 } }}
          fontWeight="bold"
          color="white"
          mr={2}
        >
          The
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 32, sm: 40, md: 48, lg: 64 } }}
          fontWeight="bold"
          color="#F14C48"
          mr={2}
        >
          quality
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 32, sm: 40, md: 48, lg: 64 } }}
          fontWeight="bold"
          color="white"
        >
          you expect
        </Typography>
      </Box>
      <Box sx={{ display: "flex", ml: { xs: 5, md: 10 } }}>
        <Typography
          sx={{ fontSize: { xs: 32, sm: 40, md: 48, lg: 64 } }}
          fontWeight="bold"
          color="white"
          mr={2}
        >
          The
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 32, sm: 40, md: 48, lg: 64 } }}
          fontWeight="bold"
          color="#F14C48"
          mr={2}
        >
          service
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 32, sm: 40, md: 48, lg: 64 } }}
          fontWeight="bold"
          color="white"
        >
          you deserve
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          ml: { xs: 5, md: 10 },
          mb: 10,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{ fontSize: { xs: 18, sm: 20, md: 22, lg: 24 } }}
            fontWeight="regular"
            color="white"
            mr={1}
          >
            Trust
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 18, sm: 20, md: 22, lg: 24 } }}
            fontWeight="regular"
            color="#F14C48"
            mr={1}
          >
            ANG Service Corp
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 18, sm: 20, md: 22, lg: 24 } }}
            fontWeight="regular"
            color="white"
          >
            for all your
          </Typography>
        </Box>
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
