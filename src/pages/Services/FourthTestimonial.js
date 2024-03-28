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
      <Typography fontSize={32} fontWeight="bold" gutterBottom>
        Testimonial
      </Typography>
      <Typography
        fontSize={20}
        fontWeight="regular"
        color="text.secondary"
        marginBottom="110px"
        textAlign="center"
        width="80%"
      >
        Here are a few testimonials from satisfied customers
      </Typography>
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
                    fontSize={24}
                    textAlign="right"
                    color="white"
                    fontWeight="bold"
                  >
                    Proin cursus feugiat tortor
                  </Typography>
                  <Typography
                    fontSize={20}
                    textAlign="right"
                    fontWeight="light"
                    color="white"
                    sx={{ width: { xs: "100%", sm: "70%", md: "50%" } }}
                  >
                    Proin cursus feugiat tortor, ac mattis erat. Sed nibh
                    sapien, congue eget facilisis vitae, consequat luctus ante.
                  </Typography>

                  <Divider sx={{ width: "40%", backgroundColor: "white" }} />
                  <Typography fontSize={24} fontWeight="regular" color="white">
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
                  image={Typing2}
                  title="typing2"
                />
                <Box
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
                    fontSize={24}
                    textAlign="left"
                    color="white"
                    fontWeight="bold"
                    gutterBottom
                  >
                    Proin cursus feugiat tortor
                  </Typography>
                  <Typography
                    fontSize={20}
                    textAlign="left"
                    fontWeight="light"
                    color="white"
                    sx={{ width: { xs: "100%", sm: "70%", md: "50%" } }}
                  >
                    Proin cursus feugiat tortor, ac mattis erat. Sed nibh
                    sapien, congue eget facilisis vitae, consequat luctus ante.
                  </Typography>

                  <Divider sx={{ width: "40%", backgroundColor: "white" }} />
                  <Typography fontSize={24} fontWeight="regular" color="white">
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
                    fontSize={24}
                    textAlign="right"
                    color="white"
                    fontWeight="bold"
                    gutterBottom
                  >
                    Proin cursus feugiat tortor
                  </Typography>
                  <Typography
                    fontSize={20}
                    textAlign="right"
                    fontWeight="light"
                    color="white"
                    sx={{ width: { xs: "100%", sm: "70%", md: "50%" } }}
                  >
                    Proin cursus feugiat tortor, ac mattis erat. Sed nibh
                    sapien, congue eget facilisis vitae, consequat luctus ante.
                  </Typography>

                  <Divider sx={{ width: "40%", backgroundColor: "white" }} />
                  <Typography
                    fontSize={24}
                    textAlign="right"
                    fontWeight="regular"
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
