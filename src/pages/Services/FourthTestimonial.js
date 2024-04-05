import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CssBaseline } from "@mui/material";
import Divider from "@mui/material/Divider";

import Typing1 from "../../images/testimony/typing1.jpeg";
import Typing2 from "../../images/testimony/typing2.jpeg";
import Typing3 from "../../images/testimony/typing3.jpeg";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function FourthTestimonial() {
  return (
    <Box
      sx={{
        minHeight: "800px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CssBaseline />
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
          variant="h2"
          sx={{ fontSize: { xs: 24, sm: 26, md: 28, lg: 32 } }}
          fontWeight="bold"
          gutterBottom
        >
          Testimonial
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
          fontWeight="regular"
          color="text.secondary"
          marginBottom="110px"
          textAlign="center"
          width="80%"
        >
          Here are a few testimonials from satisfied customers
        </Typography>
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={11} sm={10} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card sx={{ position: "relative" }}>
                <CardMedia
                  sx={{
                    height: 260,
                    width: "100%",
                    filter: "brightness(80%)",
                  }}
                  image={Typing1}
                  title="typing1"
                />
                <Box
                  data-aos="fade-left"
                  data-aos-once="true"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 260,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    padding: "20px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: 16, sm: 18, md: 20, lg: 22 } }}
                    textAlign="right"
                    color="white"
                    fontWeight="400"
                  >
                    Kingston Square Condominium
                  </Typography>
                  <Typography
                    textAlign="right"
                    fontWeight="300"
                    color="white"
                    sx={{
                      width: "100%",
                      fontSize: { xs: 14, sm: 15, md: 16, lg: 18 },
                    }}
                  >
                    ANG Services Corp consistently delivers exceptional results
                    in handling general repairs and maintenance for our condo.
                    Their communication is clear, and they consistently complete
                    tasks with utmost proficiency. Working with them is
                    genuinely enjoyable, and I wholeheartedly recommend their
                    services.
                  </Typography>

                  <Divider sx={{ width: "50%", backgroundColor: "white" }} />
                  <Typography
                    sx={{ fontSize: { xs: 16, sm: 18, md: 20, lg: 22 } }}
                    fontWeight="500"
                    color="white"
                  >
                    Mark Woodson, Board Member
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ position: "relative" }}>
                <CardMedia
                  sx={{
                    height: 260,
                    width: "100%",
                    filter: "brightness(80%)",
                  }}
                  image={Typing2}
                  title="typing2"
                />
                <Box
                  data-aos="fade-right"
                  data-aos-once="true"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 260,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "20px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: 16, sm: 18, md: 20, lg: 22 } }}
                    textAlign="left"
                    color="white"
                    fontWeight="400"
                  >
                    Proin cursus feugiat tortor
                  </Typography>
                  <Typography
                    fontSize={20}
                    textAlign="left"
                    fontWeight="300"
                    color="white"
                    sx={{
                      width: "100%",
                      fontSize: { xs: 14, sm: 15, md: 16, lg: 18 },
                    }}
                  >
                    Proin cursus feugiat tortor, ac mattis erat. Sed nibh
                    sapien, congue eget facilisis vitae, consequat luctus ante.
                  </Typography>

                  <Divider sx={{ width: "40%", backgroundColor: "white" }} />
                  <Typography
                    sx={{ fontSize: { xs: 16, sm: 18, md: 20, lg: 22 } }}
                    fontWeight="500"
                    color="white"
                  >
                    John Doe
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ position: "relative" }}>
                <CardMedia
                  sx={{
                    height: 260,
                    width: "100%",
                    filter: "brightness(80%)",
                  }}
                  image={Typing3}
                  title="typing3"
                />
                <Box
                  data-aos="fade-left"
                  data-aos-once="true"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 260,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    padding: "20px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: 16, sm: 18, md: 20, lg: 22 } }}
                    textAlign="right"
                    color="white"
                    fontWeight="400"
                  >
                    Proin cursus feugiat tortor
                  </Typography>
                  <Typography
                    fontSize={20}
                    textAlign="right"
                    fontWeight="300"
                    color="white"
                    sx={{
                      width: "100%",
                      fontSize: { xs: 14, sm: 15, md: 16, lg: 18 },
                    }}
                  >
                    Proin cursus feugiat tortor, ac mattis erat. Sed nibh
                    sapien, congue eget facilisis vitae, consequat luctus ante.
                  </Typography>

                  <Divider sx={{ width: "40%", backgroundColor: "white" }} />
                  <Typography
                    sx={{ fontSize: { xs: 16, sm: 18, md: 20, lg: 22 } }}
                    textAlign="right"
                    fontWeight="500"
                    color="white"
                  >
                    John Doe
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
