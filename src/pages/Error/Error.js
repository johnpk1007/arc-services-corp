import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Error() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "800px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          marginTop: "150px",
          height: { xs: 200, sm: 270, md: 320, lg: 380 },
          fontSize: { xs: 150, sm: 200, md: 250, lg: 300 },
          fontWeight: 300,
          color: "transparent",
          background:
            "linear-gradient(45deg, rgba(255,165,0,1) 0%, rgba(241,76,72,1) 50%)",
          backgroundClip: "text",
        }}
      >
        404
      </Typography>
      <Typography
        sx={{ fontWeight: 300, fontSize: { xs: 20, sm: 24, md: 28, lg: 32 } }}
      >
        PAGE NOT FOUND
      </Typography>
      <Typography
        sx={{
          fontWeight: 300,
          fontSize: { xs: 10, sm: 12, md: 14, lg: 16 },
          maxWidth: "60%",
          textAlign: "center",
        }}
      >
        THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED OR HAD ITS NAME
        CHANGED
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          bgcolor: "#F14C48",
          fontSize: { xs: 16, sm: 17, md: 18, lg: 20 },
          mt: "50px",
          "&:hover": {
            backgroundColor: "#d84440",
          },
        }}
        disableElevation
      >
        BACK TO HOME
      </Button>
    </Box>
  );
}
