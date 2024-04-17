import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

import CallIcon from "@mui/icons-material/Call";
import ForumIcon from "@mui/icons-material/Forum";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HandymanIcon from "@mui/icons-material/Handyman";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function SecondServices() {
  return (
    <Box
      sx={{
        minHeight: "600px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "130px",
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
          How The Process Works
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
          fontWeight="regular"
          color="text.secondary"
          marginBottom="110px"
          textAlign="center"
          width="80%"
        >
          Discover our streamlined process for efficient, transparent, and
          satisfying home improvement.
        </Typography>
      </Box>
      <div id="parent" />
      <Grid
        container
        sx={{
          width: "80%",
          display: { xs: "none", lg: "flex" },
        }}
      >
        <Grid item lg={2} sx={{ display: { xs: "none", lg: "block" } }} />
        <Grid
          item
          sx={{
            display: { xs: "none", lg: "block" },
          }}
          lg={8}
          position="relative"
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: 10,
              width: 10,
              backgroundColor: "white",
            }}
          />
          <div
            data-aos-anchor="#parent"
            data-aos="grow-animation-row"
            data-aos-delay="0"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            style={{
              border: "solid #F14C48",
            }}
          />
        </Grid>
        <Grid item lg={2} sx={{ display: { xs: "none", lg: "block" } }} />
      </Grid>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        sx={{
          width: "80%",
          marginBottom: "80px",
          marginLeft: { xs: 0, sm: "20%", lg: 0 },
        }}
      >
        <Grid item xs={12} lg={1}></Grid>
        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ height: "100%" }}>
            <Box
              data-aos="grow-animation-column"
              data-aos-delay="200"
              data-aos-duration="400"
              data-aos-once="true"
              sx={{
                borderLeft: { xs: "solid #F14C48 5px", lg: "none" },
              }}
            />
          </Box>
          <Box
            data-aos-anchor="#parent"
            data-aos="zoom-in"
            data-aos-delay="0"
            data-aos-duration="400"
            data-aos-once="true"
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
                top: { xs: -10, lg: -30 },
                left: { xs: -30, lg: "inherit" },
              }}
            >
              <CallIcon sx={{ width: 35, height: 35 }} />
            </Avatar>
            <Typography
              fontWeight="medium"
              gutterBottom
              align="center"
              sx={{
                mt: { xs: 0, lg: "70px" },
                ml: { xs: 5, lg: 0 },
                fontSize: { xs: 16, sm: 17, md: 18, lg: 20 },
              }}
            >
              CONTACT US
            </Typography>
            <Typography
              fontWeight="regular"
              color="text.secondary"
              sx={{
                ml: { xs: 5, lg: 0 },
                textAlign: { xs: "left", lg: "center" },
                fontSize: { xs: 12, sm: 13, md: 14, lg: 16 },
              }}
            >
              Contact us via phone or email for any inquiries.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ height: "100%" }}>
            <Box
              data-aos="grow-animation-column"
              data-aos-delay="600"
              data-aos-duration="400"
              data-aos-once="true"
              sx={{
                borderLeft: { xs: "solid #F14C48 5px", lg: "none" },
              }}
            />
          </Box>
          <Box
            data-aos-anchor="#parent"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="400"
            data-aos-once="true"
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
                top: { xs: -10, lg: -30 },
                left: { xs: -30, lg: "inherit" },
              }}
            >
              <ForumIcon sx={{ width: 35, height: 35 }} />
            </Avatar>
            <Typography
              fontWeight="medium"
              gutterBottom
              align="center"
              sx={{
                mt: { xs: 0, lg: "70px" },
                ml: { xs: 5, lg: 0 },
                fontSize: { xs: 16, sm: 17, md: 18, lg: 20 },
              }}
            >
              DISCUSS
            </Typography>
            <Typography
              fontWeight="regular"
              color="text.secondary"
              sx={{
                ml: { xs: 5, lg: 0 },
                textAlign: { xs: "left", lg: "center" },
                fontSize: { xs: 12, sm: 13, md: 14, lg: 16 },
              }}
            >
              We'll reach out to you to go over the details of the job
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ height: "100%" }}>
            <Box
              data-aos="grow-animation-column"
              data-aos-delay="1000"
              data-aos-duration="400"
              data-aos-once="true"
              sx={{
                borderLeft: { xs: "solid #F14C48 5px", lg: "none" },
              }}
            />
          </Box>
          <Box
            data-aos-anchor="#parent"
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-duration="400"
            data-aos-once="true"
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
                top: { xs: -10, lg: -30 },
                left: { xs: -30, lg: "inherit" },
              }}
            >
              <MoneyOffIcon sx={{ width: 35, height: 35 }} />
            </Avatar>
            <Typography
              fontWeight="medium"
              gutterBottom
              align="center"
              sx={{
                mt: { xs: 0, lg: "70px" },
                ml: { xs: 5, lg: 0 },
                fontSize: { xs: 16, sm: 17, md: 18, lg: 20 },
              }}
            >
              FREE ESTIMATE
            </Typography>
            <Typography
              fontWeight="regular"
              color="text.secondary"
              sx={{
                ml: { xs: 5, lg: 0 },
                textAlign: { xs: "left", lg: "center" },
                fontSize: { xs: 12, sm: 13, md: 14, lg: 16 },
              }}
            >
              Pending your approval, you'll receive a cost-free estimate.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ height: "100%" }}>
            <Box
              data-aos="grow-animation-column"
              data-aos-delay="1400"
              data-aos-duration="400"
              data-aos-once="true"
              sx={{
                borderLeft: { xs: "solid #F14C48 5px", lg: "none" },
              }}
            />
          </Box>
          <Box
            data-aos-anchor="#parent"
            data-aos="zoom-in"
            data-aos-delay="1200"
            data-aos-duration="400"
            data-aos-once="true"
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
                top: { xs: -10, lg: -30 },
                left: { xs: -30, lg: "inherit" },
              }}
            >
              <EventAvailableIcon sx={{ width: 35, height: 35 }} />
            </Avatar>
            <Typography
              fontWeight="medium"
              gutterBottom
              align="center"
              sx={{
                mt: { xs: 0, lg: "70px" },
                ml: { xs: 5, lg: 0 },
                fontSize: { xs: 16, sm: 17, md: 18, lg: 20 },
              }}
            >
              DATE
            </Typography>
            <Typography
              fontWeight="regular"
              color="text.secondary"
              sx={{
                ml: { xs: 5, lg: 0 },
                textAlign: { xs: "left", lg: "center" },
                fontSize: { xs: 12, sm: 13, md: 14, lg: 16 },
              }}
            >
              We'll provide you with our schedule and request you to select a
              date.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ height: "100%" }}>
            <Box
              sx={{
                borderLeft: { xs: "none" },
              }}
            />
          </Box>
          <Box
            data-aos-anchor="#parent"
            data-aos="zoom-in"
            data-aos-delay="1600"
            data-aos-duration="400"
            data-aos-once="true"
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
                top: { xs: -10, lg: -30 },
                left: { xs: -30, lg: "inherit" },
              }}
            >
              <HandymanIcon sx={{ width: 35, height: 35 }} />
            </Avatar>
            <Typography
              fontWeight="medium"
              gutterBottom
              align="center"
              sx={{
                mt: { xs: 0, lg: "70px" },
                ml: { xs: 5, lg: 0 },
                fontSize: { xs: 16, sm: 17, md: 18, lg: 20 },
              }}
            >
              WORK
            </Typography>
            <Typography
              fontWeight="regular"
              color="text.secondary"
              sx={{
                ml: { xs: 5, lg: 0 },
                textAlign: { xs: "left", lg: "center" },
                fontSize: { xs: 12, sm: 13, md: 14, lg: 16 },
              }}
            >
              Our team will get started on the project right away.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={1}></Grid>
      </Grid>
    </Box>
  );
}
