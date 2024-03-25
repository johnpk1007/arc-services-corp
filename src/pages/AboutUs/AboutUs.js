import Box from "@mui/material/Box";

import LogoAppBar from "../../components/LogoAppBar";
import FirstImage from "../AboutUs/FirstImage";
import SecondDescription from "./SecondDescription";

export default function Landing() {
  return (
    <Box>
      <LogoAppBar />
      <FirstImage />
      <SecondDescription />
    </Box>
  );
}
