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
