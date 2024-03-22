import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import PlaceIcon from "@mui/icons-material/Place";
import Grid from "@mui/material/Grid";

import Brickell from "../../images/area/brickell.jpg";
import MiamiBeach from "../../images/area/miamiBeach.jpg";
import Kendall from "../../images/area/kendall.jpg";
import CoralGables from "../../images/area/coralGables.jpg";
import Hialeah from "../../images/area/hialeah.jpg";
import KeyLargo from "../../images/area/keyLargo.jpg";

export default function ThirdWhy() {
  return (
    <Box
      sx={{
        minHeight: "700px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "200px",
      }}
    >
      <Typography fontSize={32} fontWeight="bold" gutterBottom>
        Service Areas
      </Typography>
      <Typography
        fontSize={20}
        fontWeight="regular"
        color="#777777"
        marginBottom="80px"
        textAlign="center"
        width="80%"
      >
        We provide services spanning from Key Largo through Dade County to
        Broward County. Below are our top service areas in demand.
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={10} sm={8} md={10} lg={6}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ position: "relative" }}>
                <CardMedia
                  sx={{
                    height: 240,
                    width: "100%",
                    filter: "brightness(80%)",
                  }}
                  image={Brickell}
                  title="brickell"
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 240,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PlaceIcon sx={{ color: "white", width: 22, height: 22 }} />
                  <Typography
                    fontSize={24}
                    textAlign="center"
                    fontWeight="bold"
                    color="white"
                  >
                    Brickell
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ position: "relative" }}>
                <CardMedia
                  sx={{
                    height: 240,
                    width: "100%",
                    filter: "brightness(80%)",
                  }}
                  image={MiamiBeach}
                  title="miamiBeach"
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 240,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PlaceIcon sx={{ color: "white", width: 22, height: 22 }} />
                  <Typography
                    fontSize={24}
                    textAlign="center"
                    fontWeight="bold"
                    color="white"
                  >
                    Miami Beach
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ position: "relative" }}>
                <CardMedia
                  sx={{
                    height: 240,
                    width: "100%",
                    filter: "brightness(80%)",
                  }}
                  image={Kendall}
                  title="kendall"
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 240,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PlaceIcon sx={{ color: "white", width: 22, height: 22 }} />
                  <Typography
                    fontSize={24}
                    textAlign="center"
                    fontWeight="bold"
                    color="white"
                  >
                    Kendall
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ position: "relative" }}>
                <CardMedia
                  sx={{
                    height: 240,
                    width: "100%",
                    filter: "brightness(80%)",
                  }}
                  image={CoralGables}
                  title="coral gables"
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 240,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PlaceIcon sx={{ color: "white", width: 22, height: 22 }} />
                  <Typography
                    fontSize={24}
                    textAlign="center"
                    fontWeight="bold"
                    color="white"
                  >
                    Coral Gables
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ position: "relative" }}>
                <CardMedia
                  sx={{
                    height: 240,
                    width: "100%",
                    filter: "brightness(80%)",
                  }}
                  image={Hialeah}
                  title="hialeah"
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 240,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PlaceIcon sx={{ color: "white", width: 22, height: 22 }} />
                  <Typography
                    fontSize={24}
                    textAlign="center"
                    fontWeight="bold"
                    color="white"
                  >
                    Hialeah
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ position: "relative" }}>
                <CardMedia
                  sx={{
                    height: 240,
                    width: "100%",
                    filter: "brightness(80%)",
                  }}
                  image={KeyLargo}
                  title="Key Largo"
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 240,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PlaceIcon sx={{ color: "white", width: 22, height: 22 }} />
                  <Typography
                    fontSize={24}
                    textAlign="center"
                    fontWeight="bold"
                    color="white"
                  >
                    Key Largo
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
