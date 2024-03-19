import Bar from "../../components/Bar";
import LandingImage from "../../images/landing.jpg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function FirstImage() {
  return (
    <Box>
      <Bar />
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
          justifyContent: "center",
          pl: 10,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography fontSize={64} fontWeight="bold" color="white" mr={2}>
            The
          </Typography>
          <Typography fontSize={64} fontWeight="bold" color="#F14C48" mr={2}>
            quality
          </Typography>
          <Typography fontSize={64} fontWeight="bold" color="white">
            you expect
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography fontSize={64} fontWeight="bold" color="white" mr={2}>
            The
          </Typography>
          <Typography fontSize={64} fontWeight="bold" color="#F14C48" mr={2}>
            service
          </Typography>
          <Typography fontSize={64} fontWeight="bold" color="white">
            you deserve
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex" }}>
            <Typography fontSize={24} fontWeight="regular" color="white" mr={1}>
              Trust
            </Typography>
            <Typography
              fontSize={24}
              fontWeight="regular"
              color="#F14C48"
              mr={1}
            >
              ANG Service Corp
            </Typography>
            <Typography fontSize={24} fontWeight="regular" color="white">
              for all your
            </Typography>
          </Box>
          <Typography fontSize={24} fontWeight="regular" color="white">
            repair and renovation needs,
          </Typography>
          <Typography fontSize={24} fontWeight="regular" color="white">
            with comprehensive expertise in
          </Typography>
          <Typography fontSize={24} fontWeight="regular" color="white">
            services tailored to you
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
