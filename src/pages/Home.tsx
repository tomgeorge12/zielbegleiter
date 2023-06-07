import "../App.css";
import Banner from "../components/home/banner/Banner";
import ContactForm from "../components/home/contactForm/ContactForm";
import General from "../components/home/general/General";
import Photos from "../components/home/photos/Photos";
import ProgrammesAndEligibility from "../components/home/programmes/ProgrammesAndEligibility";
import WhyUs from "../components/home/whyUs/WhyUs";

const Home = () => {
  return (
    <>
      <Banner />
      <General />
      <ProgrammesAndEligibility />
      <WhyUs />
      <Photos />
      <ContactForm />
    </>
  );
};

export default Home;
