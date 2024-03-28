import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/services" element={<Services />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
    //    <div className="App">
    //       <Landing />
    //      <Services />
    //      <AboutUs />
    //       <ContactUs />
    //  </div>
  );
}
export default App;
