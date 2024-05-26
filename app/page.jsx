import React from 'react';
import Colleges_Seats from '@components/Colleges_Seats/Colleges_Seats';
import Landing_Hero from '@components/Landing_Hero/Landing_Hero';
import Navbar from '@components/Navbar/Navbar';
import Courses_Home from '@components/Courses_Home/Courses_Home';
import Instructor from '@components/Instructor/Instructor';
import Testimonials from '@components/Testimonials/Testimonials';
import Faqs from '@components/Faqs/Faqs';
import Footer from '@components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar id={1} />
      <Landing_Hero />
      <Colleges_Seats />
      <Courses_Home />
      <Instructor />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
