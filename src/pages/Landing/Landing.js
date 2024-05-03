import Box from "@mui/material/Box";
import FirstImage from "./FirstImage";
import SecondService from "./SecondService";
import ThirdWhy from "./ThirdWhy";
import FourthArea from "./FourthArea";
import LastPart from "../../components/LastPart";
import LogoAppBar from "../../components/LogoAppBar";
import { Helmet } from "react-helmet-async";

export default function Landing() {
  return (
    <Box>
      <Helmet>
        <title>Handyman Services in Miami, FL</title>
        <meta
          name="description"
          content="Trust ANG Services Corp for all your repair and renovation needs, with comprehensive expertise in services tailored to you. We offer an array of handyman and repair services that you need in Miami, FL"
        />
      </Helmet>
      <LogoAppBar />
      <FirstImage />
      <SecondService />
      <ThirdWhy />
      <FourthArea />
      <LastPart />
    </Box>
  );
}
