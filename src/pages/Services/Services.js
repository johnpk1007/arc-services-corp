import Box from "@mui/material/Box";

import FirstImage from "./FirstImage";
import SecondServices from "./SecondServices";
import ThirdProcess from "./ThirdProcess";

import LogoAppBar from "../../components/LogoAppBar";

export default function Landing() {
  return (
    <Box>
      <LogoAppBar />
      <FirstImage />
      <SecondServices />
      <ThirdProcess />
    </Box>
  );
}
