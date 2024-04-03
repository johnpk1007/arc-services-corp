import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import CssBaseline from "@mui/material/CssBaseline";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

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
  const { register, reset, handleSubmit } = useForm();

  const { submit: onSubmit } = useWeb3Forms({
    access_key: process.env.REACT_APP_EMAIL_KEY,
    onSuccess: (msg, data) => {
      console.log("success", msg, data);
    },
    onError: (msg, data) => {
      console.log("error", msg, data);
    },
  });

  const [firstName, setFirstName] = useState({ value: "", error: false });
  const [lastName, setLastName] = useState({ value: "", error: false });
  const [emailAddress, setEmailAddress] = useState({ value: "", error: false });
  const [message, setMessage] = useState({ value: "", error: false });

  const firstNameChangeHandler = (event) => {
    setFirstName({ ...firstName, value: event.target.value });
  };
  const firstNameErrorHandler = (event) => {
    setFirstName({
      ...firstName,
      error: !event.target.value.match(/^(?:[a-zA-Z]+|)$/),
    });
  };

  const lastNameChangeHandler = (event) => {
    setLastName({ ...lastName, value: event.target.value });
  };
  const lastNameErrorHandler = (event) => {
    setLastName({
      ...lastName,
      error: !event.target.value.match(/^(?:[a-zA-Z]+|)$/),
    });
  };

  const emailAddressChangeHandler = (event) => {
    setEmailAddress({ ...emailAddress, value: event.target.value });
  };
  const emailAddressErrorHandler = (event) => {
    setEmailAddress({
      ...emailAddress,
      error: !event.target.value.match(/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$|^$/),
    });
  };

  const messageChangeHandler = (event) => {
    setMessage({ ...message, value: event.target.value });
  };
  const messageErrorHandler = (event) => {
    const regex = new RegExp(/^\s+$/);
    setMessage({
      ...message,
      error: regex.test(event.target.value),
    });
  };

  const allTrue = (...values) => {
    return values.every((value) => value === true);
  };

  const buttonDisabled = allTrue(
    firstName.value !== "",
    lastName.value !== "",
    emailAddress.value !== "",
    message.value !== "",
    firstName.error === false,
    lastName.error === false,
    emailAddress.error === false,
    message.error === false
  );

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "1400px",
      }}
    >
      <LogoAppBar color="black" location="contactus" />
      <CssBaseline />
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

          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
                  value={firstName.value}
                  inputProps={{
                    onChange: (e) => {
                      firstNameChangeHandler(e);
                    },
                    onBlur: (e) => {
                      firstNameErrorHandler(e);
                    },
                  }}
                  error={firstName.error}
                  fullWidth
                  label="First Name"
                  {...register("Customer_First_Name")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  inputProps={{
                    onChange: (e) => {
                      lastNameChangeHandler(e);
                    },
                    onBlur: (e) => {
                      lastNameErrorHandler(e);
                    },
                  }}
                  error={lastName.error}
                  fullWidth
                  label="Last Name"
                  {...register("Customer_Last_Name")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputProps={{
                    onChange: (e) => {
                      emailAddressChangeHandler(e);
                    },
                    onBlur: (e) => {
                      emailAddressErrorHandler(e);
                    },
                  }}
                  error={emailAddress.error}
                  fullWidth
                  label="Your Email Address"
                  {...register("Customer_Email_Address")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputProps={{
                    onChange: (e) => {
                      messageChangeHandler(e);
                    },
                    onBlur: (e) => {
                      messageErrorHandler(e);
                    },
                  }}
                  error={message.error}
                  fullWidth
                  label="Message"
                  multiline
                  rows={10}
                  {...register("Message")}
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <Button
                disabled={!buttonDisabled}
                type="submit"
                variant="contained"
                sx={{
                  marginTop: "50px",
                  marginBottom: "100px",
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
                Submit
              </Button>
            </Box>
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
