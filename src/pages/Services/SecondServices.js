import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Drywall from "../../images/realImage/drywall.jpeg";
import Floor from "../../images/realImage/floor.jpeg";
import Janitorial from "../../images/realImage/janitorial.jpeg";
import Painting from "../../images/realImage/painting.jpeg";
import Wallpaper from "../../images/realImage/wallpaper.jpeg";
import GeneralRepair from "../../images/realImage/general.jpeg";

export default function SecondServices() {
  return (
    <Box
      sx={{
        minHeight: "800px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f6f6f6",
        paddingTop: "130px",
      }}
    >
      <Typography fontSize={32} fontWeight="bold" gutterBottom>
        Handyman Services
      </Typography>
      <Typography
        fontSize={20}
        fontWeight="regular"
        color="#777777"
        marginBottom="80px"
        textAlign="center"
        width="80%"
      >
        Explore our diverse range of expert handyman services designed to
        address all your home improvement needs
      </Typography>

      <Grid container justifyContent="center" sx={{ marginBottom: "180px" }}>
        <Grid item xs={10} sm={11} md={7} lg={10} xl={8}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Card>
                <CardMedia
                  sx={{ height: 200 }}
                  image={Floor}
                  title="floor installation"
                />
                <CardContent
                  sx={{
                    height: 100,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontSize={16}
                    component="div"
                    textAlign="center"
                    fontWeight="medium"
                    sx={{ mb: 2 }}
                  >
                    FLOOR INSTALLATION
                  </Typography>
                  <Typography
                    fontSize={14}
                    color="text.secondary"
                    fontWeight="regular"
                    textAlign="center"
                    lineHeight="1"
                  >
                    Installation services for wood, vinyl tile, tile, and gym
                    floors.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Card
                sx={{
                  minHeight: 300,
                }}
              >
                <CardMedia
                  sx={{ height: 200 }}
                  image={Wallpaper}
                  title="wallpaper installation"
                />
                <CardContent
                  sx={{
                    height: 100,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontSize={16}
                    component="div"
                    textAlign="center"
                    fontWeight="medium"
                    sx={{ mb: 2 }}
                  >
                    WALLPAPER INSTALLATION
                  </Typography>
                  <Typography
                    fontSize={14}
                    color="text.secondary"
                    fontWeight="regular"
                    textAlign="center"
                    lineHeight="1"
                  >
                    Removal of old wallpaper, patching, and installation of new
                    wallpaper.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Card
                sx={{
                  minHeight: 300,
                }}
              >
                <CardMedia
                  sx={{ height: 200 }}
                  image={Painting}
                  title="painting service"
                />
                <CardContent
                  sx={{
                    height: 100,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontSize={16}
                    component="div"
                    textAlign="center"
                    fontWeight="medium"
                    sx={{ mb: 2 }}
                  >
                    PAINTING SERVICES
                  </Typography>
                  <Typography
                    fontSize={14}
                    color="text.secondary"
                    fontWeight="regular"
                    textAlign="center"
                    lineHeight="1"
                  >
                    Patching, Sanding, and applying fresh coats of paint.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Card
                sx={{
                  minHeight: 300,
                }}
              >
                <CardMedia
                  sx={{ height: 200 }}
                  image={Drywall}
                  title="drywall repair"
                />
                <CardContent
                  sx={{
                    height: 100,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontSize={16}
                    component="div"
                    textAlign="center"
                    fontWeight="medium"
                    sx={{ mb: 2 }}
                  >
                    DRYWAL REPAIR
                  </Typography>
                  <Typography
                    fontSize={14}
                    color="text.secondary"
                    fontWeight="regular"
                    textAlign="center"
                    lineHeight="1"
                  >
                    Partial repair or total drywall replacement.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Card
                sx={{
                  minHeight: 300,
                }}
              >
                <CardMedia
                  sx={{ height: 200, backgroundColor: "gray" }}
                  image={GeneralRepair}
                  title="general repair"
                />
                <CardContent
                  sx={{
                    height: 100,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontSize={16}
                    component="div"
                    textAlign="center"
                    fontWeight="medium"
                    sx={{ mb: 2 }}
                  >
                    GENERAL REPAIR
                  </Typography>
                  <Typography
                    fontSize={14}
                    color="text.secondary"
                    fontWeight="regular"
                    textAlign="center"
                    lineHeight="1"
                  >
                    General handyman services and janitorial & maintenance
                    services for condos under contract.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Card
                sx={{
                  minHeight: 300,
                }}
              >
                <CardMedia
                  sx={{ height: 200, backgroundColor: "gray" }}
                  //   image={Drywall}
                  title="pressure cleaning"
                />
                <CardContent
                  sx={{
                    height: 100,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontSize={16}
                    component="div"
                    textAlign="center"
                    fontWeight="medium"
                    sx={{ mb: 2 }}
                  >
                    PRESSURE CLEANING
                  </Typography>
                  <Typography
                    fontSize={14}
                    color="text.secondary"
                    fontWeight="regular"
                    textAlign="center"
                    lineHeight="1"
                  >
                    Commercial and residential pressure cleaning services.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Card
                sx={{
                  minHeight: 300,
                }}
              >
                <CardMedia
                  sx={{ height: 200 }}
                  image={Janitorial}
                  title="janitorial services"
                />
                <CardContent
                  sx={{
                    height: 100,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontSize={16}
                    component="div"
                    textAlign="center"
                    fontWeight="medium"
                    sx={{ mb: 2 }}
                  >
                    JANITORIAL SERVICES
                  </Typography>
                  <Typography
                    fontSize={14}
                    color="text.secondary"
                    fontWeight="regular"
                    textAlign="center"
                    lineHeight="1"
                  >
                    Commercial and residential janitorial services.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Card
                sx={{
                  minHeight: 300,
                }}
              >
                <CardMedia
                  sx={{ height: 200, backgroundColor: "gray" }}
                  //   image={Drywall}
                  title="plumbing"
                />
                <CardContent
                  sx={{
                    height: 100,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontSize={16}
                    component="div"
                    textAlign="center"
                    fontWeight="medium"
                    sx={{ mb: 2 }}
                  >
                    PLUMBING
                  </Typography>
                  <Typography
                    fontSize={14}
                    color="text.secondary"
                    fontWeight="regular"
                    textAlign="center"
                    lineHeight="1"
                  >
                    All plumbing installation and repairs
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
