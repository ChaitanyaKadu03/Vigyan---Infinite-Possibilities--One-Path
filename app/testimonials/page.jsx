import React from 'react';
import Colleges_Seats from '@components/Colleges_Seats/Colleges_Seats';
import Navbar from '@components/Navbar/Navbar';
import Pages_Hero from '@components/Pages_Hero/Pages_Hero';
import Testimonials from '@components/Testimonials/Testimonials';
import Footer from '@components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar id={4} />
      <Pages_Hero id={2} />
      <Testimonials id={1} />
      <Footer />
    </>
  );
};

export default Home;
