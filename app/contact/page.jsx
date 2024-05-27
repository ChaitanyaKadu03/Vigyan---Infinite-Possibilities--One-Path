import React from 'react';
import Navbar from '@components/Navbar/Navbar';
import Pages_Hero from '@components/Pages_Hero/Pages_Hero';
import Footer from '@components/Footer/Footer';
import Contact_Form from '@components/Contact_Form/Contact_Form';

const Home = () => {
  return (
    <>
      <Navbar id={5} />
      <Pages_Hero id={0}/>
      <Contact_Form />
      <Footer />
    </>
  );
};

export default Home;
