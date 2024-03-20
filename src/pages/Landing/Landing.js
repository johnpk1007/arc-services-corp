import Box from "@mui/material/Box";
import FirstImage from "./FirstImage";
import SecondService from "./SecondService";
import ThirdWhy from "./ThirdWhy";
import FourthArea from "./FourthArea";
import LastPart from "../../components/LastPart";

export default function Landing() {
  return (
    <Box>
      <FirstImage />
      <SecondService />
      <ThirdWhy />
      <FourthArea />
      {/* <LastPart /> */}
    </Box>
  );
}
