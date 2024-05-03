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
        <title>Services | Handyman & Repair Services in Miami, FL</title>
        <meta
          name="description"
          content="Explore our Process and Hear from Satisfied Clients"
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
