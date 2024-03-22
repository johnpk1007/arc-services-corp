import ServiceImage from "../../images/firstImage/services.jpg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 800,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            Let's get to
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 32, sm: 40, md: 48, lg: 64 } }}
            fontWeight="bold"
            color="#F14C48"
            mr={2}
          >
            work
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
              At
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 18, sm: 20, md: 22, lg: 24 } }}
              fontWeight="regular"
              color="#F14C48"
              mr={1}
            >
              ANG Service Corp,
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 18, sm: 20, md: 22, lg: 24 } }}
              fontWeight="regular"
              color="white"
            >
              it's About More Than Just Services.
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: { xs: 18, sm: 20, md: 22, lg: 24 } }}
            fontWeight="regular"
            color="white"
          >
            Explore our Process and Hear from Satisfied Clients
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
