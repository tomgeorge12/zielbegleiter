import React from 'react';
import banner from '../banner.jpg';
import '../App.css';
import Navbar from '../components/navbar/Navbar';
import styled from 'styled-components';
import Banner from '../components/home/banner/Banner';
import General from '../components/home/general/General';

const Home = () => {
  return (
    <>
        <Banner />
        <General />
    </>

  );
}

export default Home;
