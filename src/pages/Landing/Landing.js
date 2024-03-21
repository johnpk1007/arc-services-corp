import Box from "@mui/material/Box";
import FirstImage from "./FirstImage";
import SecondService from "./SecondService";
import ThirdWhy from "./ThirdWhy";
import FourthArea from "./FourthArea";
import LastPart from "../../components/LastPart";
import LogoAppBar from "../../components/LogoAppBar";

export default function Landing() {
  return (
    <Box>
      <LogoAppBar />
      <FirstImage />
      <SecondService />
      <ThirdWhy />
      <FourthArea />
      <LastPart />
    </Box>
  );
}
