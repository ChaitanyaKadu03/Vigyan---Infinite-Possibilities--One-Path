import React from 'react';
import Colleges_Seats from '@components/Colleges_Seats/Colleges_Seats';
import Landing_Hero from '@components/Landing_Hero/Landing_Hero';
import Nav_sec from '@components/Navbar/Navbar';
import Courses_Home from '@components/Courses_Home/Courses_Home';
import Instructor from '@components/Instructor/Instructor';
import Testimonials from '@components/Testimonials/Testimonials';
import Faqs from '@components/Faqs/Faqs';
import Footer from '@components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Nav_sec id={1} />
      <div className="nav-space" />
      <Landing_Hero />
      <Colleges_Seats />
      <Courses_Home />
      <Instructor />
      <Testimonials id={0} />
      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
