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
        <meta
          name="description"
          data-react-helmet="true"
          content="Look no further! We offer an array of handyman and repair services under the meticulous care of our licensed professionals. Call or email to get your free quote today!"
        />
        <meta
          name="keywords"
          data-react-helmet="true"
          content="handyman,installation,remodeling,repair,cleaning,miami,florida"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="  General Repairs, Handyman & Cleaning Services in Miami and South Florida"
        />
        <meta
          property="og:description"
          content="Look no further! We offer an array of handyman and repair services under the meticulous care of our licensed professionals. Call or email to get your free quote today!"
        />
        <meta property="og:url" content="https://www.angservicescorp.com" />
        <meta property="og:image" content="https://www.angservicescorp.com/images/firstImage/landing.jpg" />
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
