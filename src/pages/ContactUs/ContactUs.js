import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

import { useState } from "react";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

import LogoAppBar from "../../components/LogoAppBar";

import ContactUs from "../../images/firstImage/contactus.jpg";
import ContactUsMobile from "../../images/firstImage/contactusMobile.jpeg";
import ColorLogo from "../../images/logo/colorLogo.svg";

import HCaptcha from "@hcaptcha/react-hcaptcha";

import { Helmet } from "react-helmet-async";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Contact() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  const [captcha, setCaptcha] = useState(false);

  const onHCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
    setCaptcha(true);
  };

  const [firstName, setFirstName] = useState({ value: "", error: undefined });
  const [lastName, setLastName] = useState({ value: "", error: undefined });
  const [emailAddress, setEmailAddress] = useState({
    value: "",
    error: undefined,
  });
  const [message, setMessage] = useState({ value: "", error: undefined });

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
    message.error === false,
    captcha === true
  );

  const resetCustom = () => {
    console.log("reset worked!");
    setFirstName({ value: "", error: undefined });
    setLastName({ value: "", error: undefined });
    setEmailAddress({ value: "", error: undefined });
    setMessage({ value: "", error: undefined });
  };

  const [successOpen, setSuccessOpen] = useState(false);

  const handleSuccessOpen = () => {
    setSuccessOpen(true);
  };

  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccessOpen(false);
  };

  const [errorOpen, setErrorOpen] = useState(false);

  const handleErrorOpen = () => {
    setErrorOpen(true);
  };

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorOpen(false);
  };

  const { submit: onSubmit } = useWeb3Forms({
    access_key: process.env.REACT_APP_EMAIL_KEY,
    onSuccess: (msg, data) => {
      console.log("success", msg, data);
      resetCustom();
      handleSuccessOpen();
    },
    onError: (msg, data) => {
      console.log("error", msg, data);
      handleErrorOpen();
    },
  });

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "1400px",
      }}
    >
      <Helmet>
        <title data-react-helmet="true">Contact us - ARC Services Corp</title>
        <meta
          name="description"
          data-react-helmet="true"
          content="Don’t hesitate to reach out to us for your complimentary estimate or any general inquiries."
        />
        <meta name="keywords" data-react-helmet="true" content="phone, email" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact us - ARC Services Corp" />
        <meta
          property="og:description"
          content="Don’t hesitate to reach out to us for your complimentary estimate or any general inquiries."
        />
        <meta property="og:url" content="https://www.angservicescorp.com/contactus" />
        <meta property="og:image" content="https://www.angservicescorp.com/static/media/contactusMobile.4034ec345ada096125f6.jpeg" />
      </Helmet>
      <LogoAppBar color="black" location="contactus" />
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Box
            data-aos-delay="700"
            data-aos="fade-right"
            data-aos-once="true"
            sx={{
              height: "100%",
              width: "100%",
              backgroundImage: `url(${ContactUs})`,
              backgroundSize: "cover",
              backgroundPosition: "75%",
              display: { xs: "none", sm: "block" },
            }}
          />
          <Box
            sx={{
              height: "800px",
              width: "100%",
              backgroundImage: `url(${ContactUsMobile})`,
              backgroundSize: "cover",
              backgroundPosition: "75%",
              filter: "brightness(80%)",
              display: { xs: "block", sm: "none" },
            }}
          />
          <Box
            sx={{
              boxSizing: "border-box",
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
              paddingBottom: 20,
            }}
          >
            <Typography
              variant="h1"
              color="white"
              fontSize={32}
              fontWeight="700"
              gutterBottom
            >
              Contact Us
            </Typography>
            <Typography
              variant="h2"
              fontSize={20}
              textAlign="left"
              color="white"
              fontWeight="400"
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
            variant="h1"
            fontSize={32}
            fontWeight="700"
            gutterBottom
            sx={{ display: { xs: "none", sm: "block" }, paddingTop: "250px" }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h2"
            fontSize={20}
            sx={{ display: { xs: "none", sm: "block" } }}
            textAlign="center"
            fontWeight="400"
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
                fontWeight="700"
              >
                Call Us
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 14, sm: 15, lg: 16 } }}
                color="text.secondary"
                fontWeight="500"
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
              href="tel:305-632-1377"
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
                fontWeight="700"
              >
                Send A Message
              </Typography>
            </Box>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextField
                  type="text"
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
                  helperText={
                    firstName.error ? "Please write your first name" : ""
                  }
                  fullWidth
                  label="First Name"
                  {...register("Customer_First_Name")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="text"
                  value={lastName.value}
                  inputProps={{
                    onChange: (e) => {
                      lastNameChangeHandler(e);
                    },
                    onBlur: (e) => {
                      lastNameErrorHandler(e);
                    },
                  }}
                  error={lastName.error}
                  helperText={
                    lastName.error ? "Please write your last name" : ""
                  }
                  fullWidth
                  label="Last Name"
                  {...register("Customer_Last_Name")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  value={emailAddress.value}
                  inputProps={{
                    onChange: (e) => {
                      emailAddressChangeHandler(e);
                    },
                    onBlur: (e) => {
                      emailAddressErrorHandler(e);
                    },
                  }}
                  error={emailAddress.error}
                  helperText={
                    emailAddress.error
                      ? "Please write a valid email address"
                      : ""
                  }
                  fullWidth
                  label="Your Email Address"
                  {...register("Customer_Email_Address")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  value={message.value}
                  inputProps={{
                    onChange: (e) => {
                      messageChangeHandler(e);
                    },
                    onBlur: (e) => {
                      messageErrorHandler(e);
                    },
                  }}
                  error={message.error}
                  helperText={message.error ? "Please write your message" : ""}
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
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
                height: "200px",
                paddingTop: "10px",
              }}
            >
              <HCaptcha
                size="compact"
                sitekey={process.env.REACT_APP_HCAPTCHA_KEY}
                onVerify={onHCaptchaChange}
              />

              <Button
                disabled={isSubmitting ? true : !buttonDisabled}
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
                endIcon={isSubmitting ? <div /> : <EmailIcon />}
              >
                {isSubmitting ? <div class="loader"></div> : "SUBMIT"}
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
        <img src={ColorLogo} alt="company main logo" />
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
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={successOpen}
        autoHideDuration={5000}
        onClose={handleSuccessClose}
      >
        <Alert
          onClose={handleSuccessClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%", backgroundColor: "#F14C48" }}
        >
          Email has been sent successfully. We will contact you shortly.
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={errorOpen}
        autoHideDuration={5000}
        onClose={handleErrorClose}
      >
        <Alert
          onClose={handleErrorClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%", backgroundColor: "black" }}
        >
          Email has not been sent due to unknown reason
        </Alert>
      </Snackbar>
    </Box>
  );
}
