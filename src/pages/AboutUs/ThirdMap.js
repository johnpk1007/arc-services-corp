import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

import Map from "./OpenStreetMap";

import CurvedMap from "../../images/map/curvedMap.svg";

export default function ThirdMap() {
  return (
    <Box
      sx={{
        minHeight: 600,
        width: "100%",
        paddingY: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f6f6f6",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
          width: { xs: "80%", lg: "60%" },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: { xs: "300px", md: "400px" },
            paddingY: "30px",
            paddingLeft: "30px",
          }}
        >
          <Box>
            <Typography fontWeight="bold" fontSize={32} gutterBottom>
              Contact Us
            </Typography>
            <Typography fontSize={20}>
              Our home office is located in Brickell
            </Typography>
            <Typography fontSize={20}>
              You may contact us day or night
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize={20}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <CallIcon fontSize="small" sx={{ marginRight: "10px" }} />
              (305) 632-1377
            </Typography>
            <Typography
              fontSize={20}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <EmailIcon fontSize="small" sx={{ marginRight: "10px" }} />
              nancygarcia1970@gmail.com
            </Typography>
          </Box>
        </CardContent>
        <CardMedia
          sx={{
            width: { xs: "100%", md: "60%" },
            height: "400px",
            position: "relative",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              position: "absolute",
              top: 1,
              left: -1,
              zIndex: 500,
              backgroundColor: "transparent",
              display: { xs: "none", md: "block" },
            }}
          >
            <img
              src={CurvedMap}
              alt="curved map"
              style={{
                width: "100px",
                height: "400px",
              }}
            />
          </Paper>
          <Map />
        </CardMedia>
      </Card>
    </Box>
  );
}
