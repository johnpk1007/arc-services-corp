import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import HandymanIcon from "@mui/icons-material/Handyman";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import RemodelingIcon from "../../images/remodelingIcon.svg";
import InstallationIcon from "../../images/installationIcon.svg";

export default function SecondService() {
  return (
    <Box
      sx={{
        mt: "140px",
        height: "700px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
      >
        Explore the range of handyman services we bring to your doorstep.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "80%",
          marginBottom: "80px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 250,
            marginX: "10px",
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
            fontWeight="regular"
            color="#777777"
            align="center"
          >
            Discover convenience and quality with our expert installation
            service
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 250,
            marginX: "10px",
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
            fontWeight="regular"
            color="#777777"
            align="center"
          >
            Renovate your space seamlessly with our professional remodeling
            expertise
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 250,
            marginX: "10px",
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
          <Typography fontSize={16} fontWeight="regular" color="#777777">
            Trust our experts to handle your repairs with precision and care
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 250,
            marginX: "10px",
          }}
        >
          <Avatar
            sx={{ bgcolor: "#F14C48", width: 60, height: 60, mb: "20px" }}
          >
            <CleaningServicesIcon sx={{ width: 35, height: 35 }} />
          </Avatar>{" "}
          <Typography fontSize={20} fontWeight="regular" marginBottom="20px">
            CLEANING
          </Typography>
          <Typography
            fontSize={16}
            fontWeight="regular"
            color="#777777"
            align="center"
          >
            Experience a spotless home with our expert cleaning solutions
          </Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{ bgcolor: "#F14C48", fontSize: 20 }}
        disableElevation
      >
        Learn more
      </Button>
    </Box>
  );
}
