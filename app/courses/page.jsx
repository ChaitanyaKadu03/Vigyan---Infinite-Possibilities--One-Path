import React from 'react';
import Navbar from '@components/Navbar/Navbar';
import Pages_Hero from '@components/Pages_Hero/Pages_Hero';
import Testimonials from '@components/Testimonials/Testimonials';
import Faqs from '@components/Faqs/Faqs';
import Footer from '@components/Footer/Footer';
import Courses_Course from '@components/Courses_Course/Courses_Course';

const Home = () => {
  return (
    <>
      <Navbar id={2} />
      <Pages_Hero id={3} />
      <Courses_Course />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
