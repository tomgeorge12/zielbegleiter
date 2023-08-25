import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Contact from './pages/Contact';
import styled from 'styled-components';
import banner from "./images/banner.jpg";

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
            <Route path='/' Component={Home} />
            <Route path='/home' Component={Home} />
            <Route path='/contact' Component={Contact} />
          </Routes>
        </Router>
  );
}

export default App;
