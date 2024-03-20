import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import CleanService from "../../images/cleanService.jpg";
import ProfessionalService from "../../images/professionalService.jpg";
import FreeService from "../../images/freeService.jpg";
import QuickService from "../../images/quickService.jpg";

export default function ThirdWhy() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0, // 기본 값
        sm: 600, // 변경된 값
        md: 750, // 변경된 값
        lg: 1100, // 변경된 값
        xl: 1920, // 기본 값
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
      <Typography fontSize={32} fontWeight="bold" gutterBottom>
        Why Hire Us
      </Typography>
      <Typography
        fontSize={20}
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

      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ width: "90%", marginBottom: "80px" }}
        >
          <Grid item xs={12} sm={8} md={5} lg={3} xl={2}>
            <Card
              sx={{
                minHeight: 400,
              }}
            >
              <CardMedia
                sx={{ height: 240 }}
                image={CleanService}
                title="clean service"
              />
              <CardContent sx={{ marginTop: "20px" }}>
                <Typography
                  gutterBottom
                  fontSize={20}
                  component="div"
                  textAlign="center"
                  fontWeight="medium"
                >
                  CLEAN
                </Typography>
                <Typography
                  fontSize={16}
                  color="text.secondary"
                  fontWeight="regular"
                  textAlign="center"
                  lineHeight="1"
                >
                  We ensure your home, business, or condo is left immaculate
                  after every project or repair.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={3} xl={2}>
            <Card
              sx={{
                minHeight: 400,
              }}
            >
              <CardMedia
                sx={{ height: 240 }}
                image={ProfessionalService}
                title="professional service"
              />
              <CardContent sx={{ marginTop: "20px" }}>
                <Typography
                  gutterBottom
                  fontSize={20}
                  component="div"
                  textAlign="center"
                  fontWeight="medium"
                >
                  PROFESSIONAL
                </Typography>
                <Typography
                  fontSize={16}
                  color="text.secondary"
                  fontWeight="regular"
                  textAlign="center"
                  lineHeight="1"
                >
                  Our team consists of diligent professionals who maintain a
                  high standard of professionalism.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={3} xl={2}>
            <Card
              sx={{
                minHeight: 400,
              }}
            >
              <CardMedia
                sx={{ height: 240 }}
                image={FreeService}
                title="free service"
              />
              <CardContent sx={{ marginTop: "20px" }}>
                <Typography
                  gutterBottom
                  fontSize={20}
                  component="div"
                  textAlign="center"
                  fontWeight="medium"
                >
                  FREE ESTIMATE
                </Typography>
                <Typography
                  fontSize={16}
                  color="text.secondary"
                  fontWeight="regular"
                  textAlign="center"
                  lineHeight="1"
                >
                  We offer complimentary estimates for all your repair or
                  renovation requirements.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={3} xl={2}>
            <Card
              sx={{
                minHeight: 400,
              }}
            >
              <CardMedia
                sx={{ height: 240 }}
                image={QuickService}
                title="quick service"
              />
              <CardContent sx={{ marginTop: "20px" }}>
                <Typography
                  gutterBottom
                  fontSize={20}
                  component="div"
                  textAlign="center"
                  fontWeight="medium"
                >
                  QUICK RESPONSE
                </Typography>
                <Typography
                  fontSize={16}
                  color="text.secondary"
                  fontWeight="regular"
                  textAlign="center"
                  lineHeight="1"
                >
                  We are committed to promptly addressing your service
                  inquiries.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
      <Button
        variant="outlined"
        sx={{
          borderColor: "#F14C48",
          color: "#F14C48",
          fontSize: 20,
          marginBottom: "80px",
        }}
        disableElevation
      >
        Learn more
      </Button>
    </Box>
  );
}
