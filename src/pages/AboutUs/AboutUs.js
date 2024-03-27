import Box from "@mui/material/Box";

import LogoAppBar from "../../components/LogoAppBar";
import FirstImage from "../AboutUs/FirstImage";
import SecondDescription from "./SecondDescription";
import ThirdMap from "./ThirdMap";
import FourthTeam from "./FourthTeam";
import LastPart from "../../components/LastPart";

export default function Landing() {
  return (
    <Box>
      <LogoAppBar />
      <FirstImage />
      <SecondDescription />
      <ThirdMap />
      <FourthTeam />
      <LastPart />
    </Box>
  );
}
