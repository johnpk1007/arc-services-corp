import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "@fontsource/roboto/300.css";

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
      <Helmet>
        <title data-react-helmet="true">
          Page not found - ANG Services Corp
        </title>
        <meta
          name="description"
          data-react-helmet="true"
          content="The page you are looking for might have been removed or had its name changed"
        />
        <meta name="keywords" data-react-helmet="true" content="404, error" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Page not found - ANG Services Corp"
        />
        <meta
          property="og:description"
          content="The page you are looking for might have been removed or had its name changed"
        />
        {/* <meta property="og:url" content="https://www.angservices.com" />
<meta property="og:image" content="https://www.angservices.com/images/firstImage/landing.jpg" /> */}
      </Helmet>
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
