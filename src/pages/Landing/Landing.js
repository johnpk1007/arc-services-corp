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
        <title>
          ANG Services Corp | Handyman & Repair Services in Miami, FL
        </title>
        <meta
          name="description"
          content="We offer an array of handyman and repair services that you need in Miami, FL with comprehensive expertise in services tailored to you"
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
