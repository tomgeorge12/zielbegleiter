import { Fab, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "../App.css";
import Banner from "../components/home/banner/Banner";
import ContactForm from "../components/home/contactForm/ContactForm";
import General from "../components/home/general/General";
import Photos from "../components/home/photos/Photos";
import ProgrammesAndEligibility from "../components/home/programmes/ProgrammesAndEligibility";
import WhyUs from "../components/home/whyUs/WhyUs";
import Footer from "../components/home/footer/Footer";
import FloatingContactForm from "../components/home/floatingContactForm/FloatingContactForm";

const Home = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Banner />
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          overflowX: "hidden",
          backgroundImage: "radial-gradient(white, #F9B872)",
        }}
      >
        <General />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: "#F9B872",
          backgroundImage: "radial-gradient(white, #F9B872)",
        }}
      >
        <ProgrammesAndEligibility />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: "#F9B872",
          backgroundImage: "radial-gradient(white, #F9B872)",
          overflowX: "hidden",
        }}
      >
        <WhyUs />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: "#F9B872",
          backgroundImage: "radial-gradient(white, #F9B872)",
        }}
      >
        <Photos />
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: "#0B3866", padding: "10px" }}>
        <ContactForm />
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: "#212730", color: "white" }}>
        <Footer />
      </Grid>
      {/* <FloatingContactForm /> */}
    </Grid>
  );
};

export default Home;
