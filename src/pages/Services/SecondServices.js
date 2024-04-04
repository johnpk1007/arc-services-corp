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
import Plumbing from "../../images/realImage/plumbing.jpeg";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
      <Box
        data-aos="fade-up"
        data-aos-once="true"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: 24, sm: 26, md: 28, lg: 32 } }}
          fontWeight="bold"
          gutterBottom
        >
          Handyman Services
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
          fontWeight="regular"
          color="#777777"
          marginBottom="80px"
          textAlign="center"
          width="80%"
        >
          Explore our diverse range of expert handyman services designed to
          address all your home improvement needs
        </Typography>
      </Box>

      <Grid container justifyContent="center" sx={{ marginBottom: "180px" }}>
        <Grid item xs={10} sm={11} md={7} lg={10} xl={8}>
          <Grid container spacing={3} justifyContent="center">
            <Grid
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-once="true"
              data-a0s-offset="100"
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <Card>
                <CardMedia
                  sx={{ height: 200 }}
                  image={Floor}
                  title="floor installation"
                />
                <CardContent
                  sx={{
                    height: 150,
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
                    lineHeight="19px"
                  >
                    Installation services for wood, vinyl tile, tile, and gym
                    floors.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-a0s-offset="100"
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <Card>
                <CardMedia
                  sx={{ height: 200 }}
                  image={Wallpaper}
                  title="wallpaper installation"
                />
                <CardContent
                  sx={{
                    height: 150,
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
                    lineHeight="19px"
                  >
                    Removal of old wallpaper, patching, and installation of new
                    wallpaper.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-a0s-offset="100"
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <Card>
                <CardMedia
                  sx={{ height: 200 }}
                  image={Painting}
                  title="painting service"
                />
                <CardContent
                  sx={{
                    height: 150,
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
                    lineHeight="19px"
                  >
                    Patching, Sanding, and applying fresh coats of paint.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              data-a0s-offset="100"
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <Card>
                <CardMedia
                  sx={{ height: 200 }}
                  image={Drywall}
                  title="drywall repair"
                />
                <CardContent
                  sx={{
                    height: 150,
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
                    lineHeight="19px"
                  >
                    Partial repair or total drywall replacement.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              data-a0s-offset="100"
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <Card>
                <CardMedia
                  sx={{ height: 200, backgroundColor: "gray" }}
                  image={GeneralRepair}
                  title="general repair"
                />
                <CardContent
                  sx={{
                    height: 150,
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
                    lineHeight="19px"
                  >
                    General handyman services and janitorial & maintenance
                    services for condos under contract.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              data-a0s-offset="100"
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <Card>
                <CardMedia
                  sx={{ height: 200, backgroundColor: "gray" }}
                  //   image={Drywall}
                  title="pressure cleaning"
                />
                <CardContent
                  sx={{
                    height: 150,
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
                    lineHeight="19px"
                  >
                    Commercial and residential pressure cleaning services.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              data-a0s-offset="100"
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <Card>
                <CardMedia
                  sx={{ height: 200 }}
                  image={Janitorial}
                  title="janitorial services"
                />
                <CardContent
                  sx={{
                    height: 150,
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
                    lineHeight="19px"
                  >
                    Commercial and residential janitorial services.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-once="true"
              data-a0s-offset="100"
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <Card>
                <CardMedia
                  sx={{ height: 200, backgroundColor: "gray" }}
                    image={Plumbing}
                  title="plumbing"
                />
                <CardContent
                  sx={{
                    height: 150,
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
                    lineHeight="19px"
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
