import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import HandymanIcon from "@mui/icons-material/Handyman";
import CleaningServicesIcon from "../../images/icon/clean.svg";
import RemodelingIcon from "../../images/icon/remodelingIcon.svg";
import InstallationIcon from "../../images/icon/installationIcon.svg";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Link } from "react-router-dom";

export default function SecondService() {
  return (
    <Box
      sx={{
        mt: "140px",
        minHeight: "700px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          fontWeight="700"
          gutterBottom
        >
          Handyman Services
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
          fontWeight="regular"
          color="text.secondary"
          marginBottom="80px"
          width="80%"
          textAlign="center"
        >
          Explore the range of handyman services we bring to your doorstep.
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ width: "90%", marginBottom: "80px" }}
      >
        <Grid
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-once="true"
          data-a0s-offset="100"
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ bgcolor: "#F14C48", width: 60, height: 60, mb: "20px" }}
          >
            <img src={InstallationIcon} alt="remodeling" />
          </Avatar>
          <Typography
            sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
            fontWeight="regular"
            marginBottom="20px"
          >
            INSTALLATION
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 14, sm: 15, lg: 16 } }}
            fontWeight="light"
            color="text.secondary"
            align="center"
          >
            Discover convenience and quality with our expert installation
            service
          </Typography>
        </Grid>
        <Grid
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
          data-a0s-offset="100"
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ bgcolor: "#F14C48", width: 60, height: 60, mb: "20px" }}
          >
            <img src={RemodelingIcon} alt="remodeling" />
          </Avatar>
          <Typography
            sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
            fontWeight="regular"
            marginBottom="20px"
          >
            REMODELING
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 14, sm: 15, lg: 16 } }}
            fontWeight="light"
            color="text.secondary"
            align="center"
          >
            Renovate your space seamlessly with our professional remodeling
            expertise
          </Typography>
        </Grid>
        <Grid
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
          data-a0s-offset="100"
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ bgcolor: "#F14C48", width: 60, height: 60, mb: "20px" }}
          >
            <HandymanIcon sx={{ width: 35, height: 35 }} />
          </Avatar>
          <Typography
            sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
            fontWeight="regular"
            marginBottom="20px"
            align="center"
          >
            REPAIR
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 14, sm: 15, lg: 16 } }}
            fontWeight="light"
            color="text.secondary"
            align="center"
          >
            Trust our experts to handle your repairs with precision and care
          </Typography>
        </Grid>
        <Grid
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-once="true"
          data-a0s-offset="100"
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ bgcolor: "#F14C48", width: 60, height: 60, mb: "20px" }}
          >
            <img src={CleaningServicesIcon} alt="cleaning" />
          </Avatar>
          <Typography
            sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
            fontWeight="regular"
            marginBottom="20px"
          >
            CLEANING
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 14, sm: 15, lg: 16 } }}
            fontWeight="light"
            color="text.secondary"
            align="center"
          >
            Experience a spotless home with our expert cleaning solutions
          </Typography>
        </Grid>
      </Grid>

      <Button
        component={Link}
        to="/services"
        data-aos="fade-up"
        data-aos-once="true"
        variant="contained"
        sx={{
          width: { xs: "90%", sm: "160px" },
          bgcolor: "#F14C48",
          fontSize: { xs: 16, sm: 17, md: 18, lg: 20 },
          mb: "80px",
          "&:hover": {
            backgroundColor: "#d84440",
          },
        }}
        disableElevation
      >
        Learn more
      </Button>
    </Box>
  );
}
