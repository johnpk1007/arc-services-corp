import { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Error from "./pages/Error/Error";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/services" element={<Services />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
export default App;
