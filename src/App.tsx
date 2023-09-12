import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import banner from "./assets/images/banner.jpg";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export const Body = styled.div`
  background-image: url(${banner});
`;

export const TransBody = styled.div`
  opacity: 0.6;
`;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
