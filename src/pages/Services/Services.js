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
        <title>Services - ANG Services Corp</title>
        <meta
          name="description"
          content="At ANG Service Corp, it's About More Than Just Services. Explore our Process and Hear from Satisfied Clients"
        />
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
