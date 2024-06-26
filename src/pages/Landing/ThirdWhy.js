import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import CleanService from "../../images/why/cleanService.jpg";
import ProfessionalService from "../../images/why/professionalService.jpg";
import FreeService from "../../images/why/freeService.jpg";
import QuickService from "../../images/why/quickService.jpg";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Link } from "react-router-dom";

export default function ThirdWhy() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 750,
        lg: 1100,
        xl: 1920,
      },
    },
  });

  return (
    <Box
      sx={{
        minHeight: "800px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f6f6f6",
        paddingTop: "70px",
      }}
    >
      <Box
        data-aos="custom-fade"
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
          Why Hire Us
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
          fontWeight="regular"
          color="#777777"
          marginBottom="80px"
          textAlign="center"
          width="80%"
        >
          At ANG, we bring a personalized touch to every project. As a
          family-owned and operated business since 2017, we understand the
          importance of trust, reliability, and craftsmanship. Here's why you
          should choose us:
        </Typography>
      </Box>

      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ width: "90%", marginBottom: "80px" }}
        >
          <Grid
            data-aos="custom-fade"
            data-aos-delay="0"
            data-aos-once="true"
            data-a0s-offset="100"
            item
            xs={12}
            sm={8}
            md={5}
            lg={3}
            xl={2}
          >
            <Card
              sx={{
                minHeight: 420,
              }}
            >
              <CardMedia
                sx={{ height: 240 }}
                image={CleanService}
                title="clean service"
                component="img"
                loading="lazy"
              />
              <CardContent sx={{ marginTop: "20px" }}>
                <Typography
                  gutterBottom
                  sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
                  component="div"
                  textAlign="center"
                  fontWeight="medium"
                >
                  CLEAN
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: 14, sm: 15, lg: 16 } }}
                  color="text.secondary"
                  fontWeight="light"
                  textAlign="center"
                  lineHeight="19px"
                >
                  We ensure your home, business, or condo is left immaculate
                  after every project or repair.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            data-aos="custom-fade"
            data-aos-delay="100"
            data-aos-once="true"
            data-a0s-offset="100"
            item
            xs={12}
            sm={8}
            md={5}
            lg={3}
            xl={2}
          >
            <Card
              sx={{
                minHeight: 420,
              }}
            >
              <CardMedia
                sx={{ height: 240 }}
                image={ProfessionalService}
                title="professional service"
                component="img"
                loading="lazy"
              />
              <CardContent sx={{ marginTop: "20px" }}>
                <Typography
                  gutterBottom
                  sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
                  component="div"
                  textAlign="center"
                  fontWeight="medium"
                >
                  PROFESSIONAL
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: 14, sm: 15, lg: 16 } }}
                  color="text.secondary"
                  fontWeight="light"
                  textAlign="center"
                  lineHeight="19px"
                >
                  Our team consists of diligent professionals who maintain a
                  high standard of professionalism.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            data-aos="custom-fade"
            data-aos-delay="200"
            data-aos-once="true"
            data-a0s-offset="100"
            item
            xs={12}
            sm={8}
            md={5}
            lg={3}
            xl={2}
          >
            <Card
              sx={{
                minHeight: 420,
              }}
            >
              <CardMedia
                sx={{ height: 240 }}
                image={FreeService}
                title="free service"
                component="img"
                loading="lazy"
              />
              <CardContent sx={{ marginTop: "20px" }}>
                <Typography
                  gutterBottom
                  sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
                  component="div"
                  textAlign="center"
                  fontWeight="medium"
                >
                  FREE ESTIMATE
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: 14, sm: 15, lg: 16 } }}
                  color="text.secondary"
                  fontWeight="light"
                  textAlign="center"
                  lineHeight="19px"
                >
                  We offer complimentary estimates for all your repair or
                  renovation requirements.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            data-aos="custom-fade"
            data-aos-delay="300"
            data-aos-once="true"
            data-a0s-offset="100"
            item
            xs={12}
            sm={8}
            md={5}
            lg={3}
            xl={2}
          >
            <Card
              sx={{
                minHeight: 420,
              }}
            >
              <CardMedia
                sx={{ height: 240 }}
                image={QuickService}
                title="quick service"
                component="img"
                loading="lazy"
              />
              <CardContent sx={{ marginTop: "20px" }}>
                <Typography
                  gutterBottom
                  sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
                  component="div"
                  textAlign="center"
                  fontWeight="medium"
                >
                  QUICK RESPONSE
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: 14, sm: 15, lg: 16 } }}
                  color="text.secondary"
                  fontWeight="light"
                  textAlign="center"
                  lineHeight="19px"
                >
                  We are committed to promptly addressing your service
                  inquiries.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
      <Box
        data-aos="custom-fade"
        data-aos-once="true"
        style={{ width: "100%" }}
        display="flex"
        justifyContent="center"
      >
        <Button
          component={Link}
          to="/aboutus"
          variant="outlined"
          sx={{
            width: { xs: "90%", sm: "auto" },
            borderColor: "#F14C48",
            color: "#F14C48",
            fontSize: { xs: 16, sm: 17, md: 18, lg: 20 },
            marginBottom: "80px",
            "&:hover": {
              backgroundColor: "rgba(241, 76, 72, 0.04)",
              borderColor: "#d84440",
            },
          }}
          disableElevation
        >
          MEET OUR TEAM
        </Button>
      </Box>
    </Box>
  );
}
