import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import CssBaseline from "@mui/material/CssBaseline";

import { useState } from "react";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

import LogoAppBar from "../../components/LogoAppBar";

import ContactUs from "../../images/firstImage/contactus.jpg";
import ColorLogo from "../../images/logo/colorLogo.svg";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Contact() {
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "1400px",
      }}
    >
      <CssBaseline />
      <LogoAppBar color="black" location="contactus" />
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Box
            sx={{
              height: { xs: "800px", sm: "100%" },
              width: "100%",
              backgroundImage: `url(${ContactUs})`,
              backgroundSize: "cover",
              backgroundPosition: "75%",
              filter: { xs: "brightness(80%)", sm: "none" },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              height: 800,
              width: "100%",
              display: { xs: "flex", sm: "none" },
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              paddingX: 5,
              paddingBottom: 10,
            }}
          >
            <Typography
              color="white"
              fontSize={32}
              fontWeight="bold"
              gutterBottom
            >
              Contact Us
            </Typography>
            <Typography
              fontSize={20}
              textAlign="left"
              color="white"
              fontWeight="regular"
            >
              Don’t hesitate to reach out to us for your complimentary estimate
              or any general inquiries.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1} md={2} lg={3} />
        <Grid
          component="form"
          item
          xs={10}
          sm={7}
          md={5}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography
            fontSize={32}
            fontWeight="bold"
            gutterBottom
            sx={{ display: { xs: "none", sm: "block" }, paddingTop: "250px" }}
          >
            Contact Us
          </Typography>
          <Typography
            fontSize={20}
            sx={{ display: { xs: "none", sm: "block" } }}
            textAlign="center"
            fontWeight="regular"
            color="text.secondary"
          >
            Don’t hesitate to reach out to us for your complimentary estimate or
            any general inquiries.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              width: "100%",
              marginTop: "100px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", sm: "column" },
                justifyContent: { xs: "space-between", sm: "center" },
                marginBottom: { xs: "30px", sm: "100px" },
              }}
            >
              <Typography
                sx={{ fontSize: { xs: 16, sm: 18, md: 20, lg: 20 } }}
                fontWeight="bold"
              >
                Call Us
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 14, sm: 15, lg: 16 } }}
                color="text.secondary"
                fontWeight="medium"
              >
                (305) 632-1377
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#F14C48",
                fontSize: { xs: 16, sm: 17, md: 18, lg: 20 },
                height: "50px",
                marginBottom: { xs: "100px", sm: "0px" },
                width: { xs: "100%", sm: "180px" },
                "&:hover": {
                  backgroundColor: "#d84440",
                },
              }}
              disableElevation
              endIcon={<CallIcon />}
            >
              CALL NOW
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: 16, sm: 18, md: 20, lg: 20 } }}
              fontWeight="bold"
            >
              Send A Message
            </Typography>
          </Box>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                sx={{ width: "100%" }}
                id="first-name-textfield"
                name="firstname"
                label="First Name"
                variant="outlined"
                onBlur={changeHandler}
                error={!formState.firstname.match(/^(?:[a-zA-Z]+|)$/)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: "100%" }}
                id="last-name-textfield"
                name="lastname"
                label="Last Name"
                variant="outlined"
                onBlur={changeHandler}
                error={!formState.lastname.match(/^(?:[a-zA-Z]+|)$/)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                id="your-email-address"
                name="email"
                label="Your Email Address"
                variant="outlined"
                onBlur={changeHandler}
                error={
                  !formState.email.match(
                    /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$|^$/
                  )
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                id="message"
                name="message"
                label="Message"
                variant="outlined"
                multiline
                rows={10}
                onBlur={changeHandler}
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "space-between", sm: "flex-end" },
              width: "100%",
              marginTop: "20px",
              marginBottom: "120px",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "#F14C48",
                fontSize: { xs: 16, sm: 17, md: 18, lg: 20 },
                height: "50px",
                width: { xs: "100%", sm: "180px" },
                "&:hover": {
                  backgroundColor: "#d84440",
                },
              }}
              disableElevation
              endIcon={<EmailIcon />}
            >
              SEND NOW
            </Button>
          </Box>
        </Grid>
        <Grid item xs={1} md={2} lg={3} />
      </Grid>
      <Divider sx={{ width: "100%" }} />
      <Box
        sx={{ width: "100%" }}
        height="200px"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <img src={ColorLogo} alt="color logo" />
        <Typography
          sx={{ fontSize: { xs: 16, sm: 17, md: 18, lg: 20 } }}
          fontWeight="regular"
          color="#777777"
          textAlign="center"
          marginLeft="10px"
          paddingTop="20px"
        >
          All rights reserved ©ANG Services Corp
        </Typography>
      </Box>
    </Box>
  );
}
