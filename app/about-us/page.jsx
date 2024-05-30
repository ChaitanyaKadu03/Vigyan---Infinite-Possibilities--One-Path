import React from 'react';
import Nav_sec from '@components/Navbar/Navbar';
import Pages_Hero from '@components/Pages_Hero/Pages_Hero';
import Instructor from '@components/Instructor/Instructor';
import Footer from '@components/Footer/Footer';

export const metadata = {
  title: `About Us - Advanced Physics for JEE`,
  description: `Learn more about our mission to help Indian students excel in JEE exams through comprehensive Advanced Physics courses and expert-led lectures. Our team of ex-IITians from Kota provides the best platform for JEE preparation, ensuring personalized attention and the highest quality education. Discover how we are making a difference in the lives of aspiring IITians.`,
  keywords: [
    'About us',
    'Advanced Physics',
    'JEE preparation',
    'Indian students',
    'Physics education',
    'JEE exams',
    'ex-IITian',
    'best platform',
    'IIT',
    'Kota',
    'best JEE coaching',
    'JEE success stories'
  ]
};

const Home = () => {
  return (
    <>
      <Nav_sec id={3} />
      <Pages_Hero id={4} />
      <Instructor />
      <Footer />
    </>
  );
};

export default Home;
