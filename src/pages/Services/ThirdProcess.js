import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

import CallIcon from "@mui/icons-material/Call";
import ForumIcon from "@mui/icons-material/Forum";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HandymanIcon from "@mui/icons-material/Handyman";

export default function SecondServices() {
  return (
    <Box
      sx={{
        minHeight: "800px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "130px",
      }}
    >
      <Typography fontSize={32} fontWeight="bold" gutterBottom>
        How The Process Works
      </Typography>
      <Typography
        fontSize={20}
        fontWeight="regular"
        color="#777777"
        marginBottom="110px"
        textAlign="center"
        width="80%"
      >
        Discover our streamlined process for efficient, transparent, and
        satisfying home improvement.
      </Typography>
      <Grid
        container
        sx={{ width: "80%", display: { xs: "none", lg: "flex" } }}
      >
        <Grid item lg={2} sx={{ display: { xs: "none", lg: "block" } }} />
        <Grid
          item
          sx={{ border: "solid #F14C48", display: { xs: "none", lg: "block" } }}
          lg={2}
        />
        <Grid
          item
          sx={{ border: "solid #F14C48", display: { xs: "none", lg: "block" } }}
          lg={2}
        />
        <Grid
          item
          sx={{ border: "solid #F14C48", display: { xs: "none", lg: "block" } }}
          lg={2}
        />
        <Grid
          item
          sx={{ border: "solid #F14C48", display: { xs: "none", lg: "block" } }}
          lg={2}
        />
        <Grid item lg={2} sx={{ display: { xs: "none", lg: "block" } }} />
      </Grid>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        sx={{
          width: "80%",
          marginBottom: "80px",
        }}
      >
        <Grid item xs={12} lg={1}></Grid>
        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            minHeight: "100px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "flex-start", lg: "center" },
            borderLeft: { xs: "solid #F14C48 5px", lg: "none" },
          }}
        >
          <Avatar
            sx={{
              bgcolor: "#F14C48",
              width: 60,
              height: 60,
              mb: "20px",
              position: "absolute",
              top: { xs: 0, lg: -20 },
              left: { xs: -30, lg: "inherit" },
            }}
          >
            <CallIcon sx={{ width: 35, height: 35 }} />
          </Avatar>
          <Typography
            fontSize={20}
            fontWeight="regular"
            gutterBottom
            align="center"
            sx={{ mt: { xs: 0, lg: "70px" }, ml: { xs: 5, lg: 0 } }}
          >
            CONTACT US
          </Typography>
          <Typography
            fontSize={16}
            fontWeight="regular"
            color="#777777"
            sx={{
              ml: { xs: 5, lg: 0 },
              textAlign: { xs: "left", lg: "center" },
            }}
          >
            Contact us via phone or email for any inquiries.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            minHeight: "100px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "flex-start", lg: "center" },
            borderLeft: { xs: "solid #F14C48 5px", lg: "none" },
          }}
        >
          <Avatar
            sx={{
              bgcolor: "#F14C48",
              width: 60,
              height: 60,
              mb: "20px",
              position: "absolute",
              top: { xs: 0, lg: -20 },
              left: { xs: -30, lg: "inherit" },
            }}
          >
            <ForumIcon sx={{ width: 35, height: 35 }} />
          </Avatar>
          <Typography
            fontSize={20}
            fontWeight="regular"
            sx={{ mt: { xs: 0, lg: "70px" }, ml: { xs: 5, lg: 0 } }}
            gutterBottom
          >
            DISCUSS
          </Typography>
          <Typography
            fontSize={16}
            fontWeight="regular"
            color="#777777"
            align="center"
            sx={{
              ml: { xs: 5, lg: 0 },
              textAlign: { xs: "left", lg: "center" },
            }}
          >
            We'll reach out to you to go over the details of the job
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            minHeight: "100px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "flex-start", lg: "center" },
            borderLeft: { xs: "solid #F14C48 5px", lg: "none" },
          }}
        >
          <Avatar
            sx={{
              bgcolor: "#F14C48",
              width: 60,
              height: 60,
              mb: "20px",
              position: "absolute",
              top: { xs: 0, lg: -20 },
              left: { xs: -30, lg: "inherit" },
            }}
          >
            <MoneyOffIcon sx={{ width: 35, height: 35 }} />
          </Avatar>
          <Typography
            fontSize={20}
            fontWeight="regular"
            sx={{ mt: { xs: 0, lg: "70px" }, ml: { xs: 5, lg: 0 } }}
            gutterBottom
            align="center"
          >
            FREE ESTIMATE
          </Typography>
          <Typography
            fontSize={16}
            fontWeight="regular"
            color="#777777"
            align="center"
            sx={{
              ml: { xs: 5, lg: 0 },
              textAlign: { xs: "left", lg: "center" },
            }}
          >
            Pending your approval, you'll receive a cost-free estimate.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            minHeight: "100px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "flex-start", lg: "center" },
            borderLeft: { xs: "solid #F14C48 5px", lg: "none" },
          }}
        >
          <Avatar
            sx={{
              bgcolor: "#F14C48",
              width: 60,
              height: 60,
              mb: "20px",
              position: "absolute",
              top: { xs: 0, lg: -20 },
              left: { xs: -30, lg: "inherit" },
            }}
          >
            <EventAvailableIcon sx={{ width: 35, height: 35 }} />
          </Avatar>
          <Typography
            fontSize={20}
            fontWeight="regular"
            sx={{ mt: { xs: 0, lg: "70px" }, ml: { xs: 5, lg: 0 } }}
            gutterBottom
          >
            DATE
          </Typography>
          <Typography
            fontSize={16}
            fontWeight="regular"
            color="#777777"
            align="center"
            sx={{
              ml: { xs: 5, lg: 0 },
              textAlign: { xs: "left", lg: "center" },
            }}
          >
            We'll provide you with our schedule and request you to select a
            date.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            minHeight: "100px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "flex-start", lg: "center" },
          }}
        >
          <Avatar
            sx={{
              bgcolor: "#F14C48",
              width: 60,
              height: 60,
              mb: "20px",
              position: "absolute",
              top: { xs: 0, lg: -20 },
              left: { xs: -30, lg: "inherit" },
            }}
          >
            <HandymanIcon sx={{ width: 35, height: 35 }} />
          </Avatar>
          <Typography
            fontSize={20}
            fontWeight="regular"
            sx={{ mt: { xs: 0, lg: "70px" }, ml: { xs: 5, lg: 0 } }}
            gutterBottom
          >
            WORK
          </Typography>
          <Typography
            fontSize={16}
            fontWeight="regular"
            color="#777777"
            align="center"
            sx={{
              ml: { xs: 5, lg: 0 },
              textAlign: { xs: "left", lg: "center" },
            }}
          >
            Our team will get started on the project right away.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={1}></Grid>
      </Grid>
    </Box>
  );
}
