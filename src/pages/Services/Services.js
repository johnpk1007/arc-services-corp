import Box from "@mui/material/Box";

import FirstImage from "./FirstImage";
import SecondServices from "./SecondServices";
import ThirdProcess from "./ThirdProcess";
import FourthTestimonial from "./FourthTestimonial";
import LastPart from "../../components/LastPart";

import LogoAppBar from "../../components/LogoAppBar";

export default function Landing() {
  return (
    <Box>
      <LogoAppBar />
      <FirstImage />
      <SecondServices />
      <ThirdProcess />
      <FourthTestimonial />
      <LastPart />
    </Box>
  );
}
