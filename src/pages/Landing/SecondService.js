import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import HandymanIcon from "@mui/icons-material/Handyman";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import RemodelingIcon from "../../images/icon/remodelingIcon.svg";
import InstallationIcon from "../../images/icon/installationIcon.svg";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
      <Typography fontSize={32} fontWeight="700" gutterBottom>
        Handyman Services
      </Typography>
      <Typography
        fontSize={20}
        fontWeight="regular"
        color="text.secondary"
        marginBottom="80px"
        width="80%"
        textAlign="center"
      >
        Explore the range of handyman services we bring to your doorstep.
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ width: "90%", marginBottom: "80px" }}
      >
        <Grid
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
          <Typography fontSize={20} fontWeight="regular" marginBottom="20px">
            INSTALLATION
          </Typography>
          <Typography
            fontSize={16}
            fontWeight="light"
            color="text.secondary"
            align="center"
          >
            Discover convenience and quality with our expert installation
            service
          </Typography>
        </Grid>
        <Grid
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
          <Typography fontSize={20} fontWeight="regular" marginBottom="20px">
            REMODELING
          </Typography>
          <Typography
            fontSize={16}
            fontWeight="light"
            color="text.secondary"
            align="center"
          >
            Renovate your space seamlessly with our professional remodeling
            expertise
          </Typography>
        </Grid>
        <Grid
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
            fontSize={20}
            fontWeight="regular"
            marginBottom="20px"
            align="center"
          >
            REPAIR
          </Typography>
          <Typography
            fontSize={16}
            fontWeight="light"
            color="text.secondary"
            align="center"
          >
            Trust our experts to handle your repairs with precision and care
          </Typography>
        </Grid>
        <Grid
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
            <CleaningServicesIcon sx={{ width: 35, height: 35 }} />
          </Avatar>
          <Typography fontSize={20} fontWeight="regular" marginBottom="20px">
            CLEANING
          </Typography>
          <Typography
            fontSize={16}
            fontWeight="light"
            color="text.secondary"
            align="center"
          >
            Experience a spotless home with our expert cleaning solutions
          </Typography>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        sx={{
          bgcolor: "#F14C48",
          fontSize: 20,
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
