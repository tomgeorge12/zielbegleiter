import { Grid } from "@mui/material";
import styled from "styled-components";
import ContactForm from "../components/home/contactForm/ContactForm";
import Footer from "../components/home/footer/Footer";

const Container = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  padding: 20px;
  width: 80vw;
  height: 450px;
  margin: auto;
  > iframe {
    width: inherit;
    height: inherit;
  }
`;

function Contact() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid
        item
        xs={12}
        sx={{ backgroundColor: "#0B3866", padding: "10px", marginTop: "100px" }}
      >
        <ContactForm />
      </Grid>
      <Grid item xs={12}>
        <Container>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.7764261389184!2d76.0718751661429!3d11.73481632594545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5e1a61ebc6f03%3A0x19f1e47d059202a7!2sziel%20begleiter!5e0!3m2!1sen!2sin!4v1692975401888!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Container>
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: "#212730", color: "white" }}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default Contact;
