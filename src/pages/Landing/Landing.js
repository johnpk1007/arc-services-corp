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
        <title data-react-helmet="true">
          General Repairs, Handyman & Cleaning Services in Miami and South
          Florida
        </title>
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
