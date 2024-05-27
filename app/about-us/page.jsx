import React from 'react';
import Navbar from '@components/Navbar/Navbar';
import Pages_Hero from '@components/Pages_Hero/Pages_Hero';
import Instructor from '@components/Instructor/Instructor';
import Footer from '@components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar id={3} />
      <Pages_Hero id={4}/>
      <Instructor />
      <Footer />
    </>
  );
};

export default Home;
