import React from 'react';
import Navbar from '@components/Navbar/Navbar';
import Instructor from '@components/Instructor/Instructor';
import Testimonials from '@components/Testimonials/Testimonials';
import Faqs from '@components/Faqs/Faqs';
import Footer from '@components/Footer/Footer';
import Course_Hero from '@components/Course_Hero/Course_Hero';
import Curriculum from '@components/Curriculum/Curriculum';

const Home = () => {
  return (
    <>
      <Navbar id={2} />
      <Course_Hero id={0} />
      <Curriculum id={0} />
      <Instructor />
      <Testimonials id={0} />
      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
