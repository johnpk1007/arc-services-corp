import Box from "@mui/material/Box";

import LogoAppBar from "../../components/LogoAppBar";
import FirstImage from "../AboutUs/FirstImage";
import SecondDescription from "./SecondDescription";
import ThirdMap from "./ThirdMap";
import FourthTeam from "./FourthTeam";
import LastPart from "../../components/LastPart";

import { Helmet } from "react-helmet-async";

export default function AboutUs() {
  return (
    <Box>
      <Helmet>
        <title>About Us | Handyman & Repair Services in Miami, FL</title>
        <meta
          name="description"
          content="At ANG Services Corp, we are more than just a handyman service. We're your trusted partner in creating the home of your dreams."
        />
      </Helmet>
      <LogoAppBar location="aboutus" />
      <FirstImage />
      <SecondDescription />
      <ThirdMap />
      <FourthTeam />
      <LastPart />
    </Box>
  );
}
