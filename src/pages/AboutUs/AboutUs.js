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
        <title data-react-helmet="true">About us - ARC Services Corp</title>
        <meta
          name="description"
          data-react-helmet="true"
          content="At ANG Services Corp, we are more than just a handyman service. We're your trusted partner in creating the home of your dreams."
        />
        <meta
          name="keywords"
          data-react-helmet="true"
          content="company, team, map, location"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About us - ARC Services Corp" />
        <meta
          property="og:description"
          content="At ANG Services Corp, we are more than just a handyman service. We're your trusted partner in creating the home of your dreams."
        />
        <meta property="og:url" content="https://www.angservicescorp.com/aboutus" />
        <meta property="og:image" content="https://angservicescorp.com/static/media/aboutus.462d494df1fb472a4353.jpg" />
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
