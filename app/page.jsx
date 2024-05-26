import React from 'react';
import Colleges_Seats from '@components/Colleges_Seats/Colleges_Seats';
import Landing_Hero from '@components/Landing_Hero/Landing_Hero';
import Navbar from '@components/Navbar/Navbar';
import Courses_Home from '@components/Courses_Home/Courses_Home';

const Home = () => {
  return (
    <>
      <Navbar id={1} />
      <Landing_Hero />
      <Colleges_Seats />
      <Courses_Home />
    </>
  );
};

export default Home;
