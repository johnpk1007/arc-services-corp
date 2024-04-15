import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Nancy from "../../images/team/nancy.jpeg";
import Ariel from "../../images/team/ariel.jpeg";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function FirstImage() {
  return (
    <Box
      sx={{
        minHeight: 300,
        width: "100%",
        paddingTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box data-aos="custom-fade" data-aos-once="true" sx={{ width: "100%" }}>
        <Typography
          variant="h2"
          fontSize={32}
          fontWeight="bold"
          sx={{ marginBottom: "80px", marginLeft: "10%" }}
        >
          Meet Our Team
        </Typography>
      </Box>
      <Grid container sx={{ width: "80%" }}>
        <Grid item xs={12} lg={6}>
          <Box
            data-aos="custom-fade"
            data-aos-once="true"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card
              elevation={0}
              sx={{ display: "flex", marginBottom: { xs: "100px", lg: "0px" } }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: 170, sm: 220, md: 270, lg: 340 },
                      width: { xs: 130, sm: 155, md: 180, lg: 260 },
                    }}
                  >
                    <Box
                      sx={{
                        height: "95%",
                        width: "95%",
                        backgroundColor: "#F14C48",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 0,
                      }}
                    />
                    <CardMedia
                      image={Nancy}
                      title="Nancy"
                      sx={{
                        height: "95%",
                        width: "95%",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        zIndex: 1,
                      }}
                      component="img"
                      loading="lazy"
                    />
                  </Box>
                  <CardContent
                    sx={{
                      width: "60%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                    }}
                  >
                    <Typography
                      fontWeight="regular"
                      sx={{ fontSize: { xs: 16, sm: 18, md: 20, lg: 24 } }}
                    >
                      President
                    </Typography>
                    <Typography
                      sx={{ fontSize: { xs: 24, sm: 28, md: 32, lg: 36 } }}
                      fontWeight="bold"
                    >
                      Nancy Garcia
                    </Typography>
                    <Typography
                      fontWeight="light"
                      sx={{
                        display: { xs: "none", sm: "block" },
                        fontSize: { sm: 17, md: 18, lg: 20 },
                      }}
                    >
                      Leads strategic planning, oversees all operations, manages
                      finances and personnel, and handles customer relations.
                    </Typography>
                  </CardContent>
                </Box>
                <CardContent
                  sx={{
                    width: "100%",
                    display: { xs: "flex", sm: "none" },
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <Typography fontSize={16} fontWeight="light">
                    Leads strategic planning, oversees all operations, manages
                    finances and personnel, and handles customer relations.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box
            data-aos="custom-fade"
            data-aos-delay="100"
            data-aos-once="true"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card elevation={0} sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: 170, sm: 220, md: 270, lg: 340 },
                      width: { xs: 130, sm: 155, md: 180, lg: 260 },
                    }}
                  >
                    <Box
                      sx={{
                        height: "95%",
                        width: "95%",
                        backgroundColor: "#F14C48",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 0,
                      }}
                    />
                    <CardMedia
                      image={Ariel}
                      title="Ariel"
                      sx={{
                        height: "95%",
                        width: "95%",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        zIndex: 1,
                      }}
                      component="img"
                      loading="lazy"
                    />
                  </Box>
                  <CardContent
                    sx={{
                      width: "60%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: { xs: 16, sm: 18, md: 20, lg: 24 } }}
                      fontWeight="regular"
                    >
                      General Manager
                    </Typography>
                    <Typography
                      sx={{ fontSize: { xs: 24, sm: 28, md: 32, lg: 36 } }}
                      fontWeight="bold"
                    >
                      Ariel Soto
                    </Typography>
                    <Typography
                      sx={{
                        display: { xs: "none", sm: "block" },
                        fontSize: { sm: 17, md: 18, lg: 20 },
                      }}
                      fontWeight="light"
                    >
                      Oversees day-to-day operations, coordinates projects,
                      performs repairs and maintenance tasks, and ensures work
                      quality.
                    </Typography>
                  </CardContent>
                </Box>
                <CardContent
                  sx={{
                    width: "100%",
                    display: { xs: "flex", sm: "none" },
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <Typography fontSize={16} fontWeight="light">
                    Oversees day-to-day operations, coordinates projects,
                    performs repairs and maintenance tasks, and ensures work
                    quality.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
