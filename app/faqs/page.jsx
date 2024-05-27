import React from 'react';
import Navbar from '@components/Navbar/Navbar';
import Pages_Hero from '@components/Pages_Hero/Pages_Hero';
import Faqs from '@components/Faqs/Faqs';
import Footer from '@components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar id={6} />
      <Pages_Hero id={1}/>
      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
