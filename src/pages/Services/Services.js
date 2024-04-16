import Box from "@mui/material/Box";

import FirstImage from "./FirstImage";
import SecondServices from "./SecondServices";
import ThirdProcess from "./ThirdProcess";
import FourthTestimonial from "./FourthTestimonial";
import LastPart from "../../components/LastPart";

import LogoAppBar from "../../components/LogoAppBar";

import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <Box>
      <Helmet>
        <title data-react-helmet="true">Services - ANG Services Corp</title>
      </Helmet>
      <LogoAppBar location="services" />
      <FirstImage />
      <SecondServices />
      <ThirdProcess />
      <FourthTestimonial />
      <LastPart />
    </Box>
  );
}
