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
        <meta
          name="description"
          data-react-helmet="true"
          content="At ANG Service Corp, it's About More Than Just Services. Explore our Process and Hear from Satisfied Clients"
        />
        <meta
          name="keywords"
          data-react-helmet="true"
          content="floor installation, wallpaper installation, painting services, drywall repair, general repair, pressure cleaning, janitorial services, plumbing"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Services - ANG Services Corp" />
        <meta
          property="og:description"
          content="At ANG Service Corp, it's About More Than Just Services. Explore our Process and Hear from Satisfied Clients"
        />
        <meta property="og:url" content="https://www.angservicescorp.com/services" />
        <meta property="og:image" content="https://angservicescorp.com/static/media/services.160f4053d5d99c4559ce.jpg" />
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
