import Banner from "../components/home/banner/Banner";
import ContactForm from "../components/home/contactForm/ContactForm";
import General from "../components/home/general/General";
import Photos from "../components/home/photos/Photos";
import ProgrammesAndEligibility from "../components/home/programmes/ProgrammesAndEligibility";
import WhyUs from "../components/home/whyUs/WhyUs";
import Footer from "../components/home/footer/Footer";
import { GridLegacy } from "@mui/material";

const Home = () => {
  return (
    <GridLegacy container direction="row" justifyContent="center" alignItems="center">
      <GridLegacy item xs={12}>
        <Banner />
      </GridLegacy>
      <GridLegacy
        item
        xs={12}
        sx={{
          overflowX: "hidden",
          backgroundImage: "radial-gradient(white, #F9B872)",
        }}
      >
        <General />
      </GridLegacy>
      <GridLegacy
        item
        xs={12}
        sx={{
          backgroundImage: "radial-gradient(white, #F9B872)",
        }}
      >
        <ProgrammesAndEligibility />
      </GridLegacy>
      <GridLegacy
        item
        xs={12}
        sx={{
          backgroundImage: "radial-gradient(white, #F9B872)",
          overflow: "hidden",
        }}
      >
        <WhyUs />
      </GridLegacy>
      <GridLegacy
        item
        xs={12}
        sx={{
          backgroundImage: "radial-gradient(white, #F9B872)",
        }}
      >
        <Photos />
      </GridLegacy>
      <GridLegacy item xs={12} sx={{ backgroundColor: "#0B3866", padding: "10px" }}>
        <ContactForm />
      </GridLegacy>
      <GridLegacy item xs={12} sx={{ backgroundColor: "#212730", color: "white" }}>
        <Footer />
      </GridLegacy>
    </GridLegacy>
  );
};

export default Home;
