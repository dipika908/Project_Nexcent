import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./Section/Hero";
import Clients from "./Section/Clients";
import BussinessReinvent from "./Section/BussinessReinvent";
import Design from "./Section/Design";
import CustReview from "./Section/CustReview";
import Demo from "./Section/Demo";
import Pixelgrade from "./Section/Pixelgrade";
import ManageSection from "./Section/ManageSection";
import Marketing from "./Section/Marketing";

import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 500,
    });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <ManageSection />
      <Pixelgrade />
      <BussinessReinvent/>
      <Design />
      <CustReview />
      <Marketing />
      <Demo />
      <Footer/>
    </>
  );
}

export default App;
