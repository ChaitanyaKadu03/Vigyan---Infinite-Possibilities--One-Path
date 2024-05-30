import React from 'react';
import Colleges_Seats from '@components/Colleges_Seats/Colleges_Seats';
import Nav_sec from '@components/Navbar/Navbar';
import Pages_Hero from '@components/Pages_Hero/Pages_Hero';
import Testimonials from '@components/Testimonials/Testimonials';
import Footer from '@components/Footer/Footer';

export const metadata = {
  title: `Testimonials - Success Stories of JEE Achievers`,
  description: `Read the success stories of Indian students who excelled in JEE exams with the help of our Advanced Physics course. Hear from our top performers about how our ex-IITian faculty from Kota helped them achieve their dreams. Join the best platform for JEE preparation and be inspired by the journeys of our successful students.`,
  keywords: [
    'Testimonials', 'Success stories', 'JEE achievers', 'Advanced Physics', 'JEE preparation', 'Indian students', 'ex-IITian', 'best platform', 'IIT', 'Kota', 'best JEE coaching', 'JEE success', 'stories'
  ]
};

const Home = () => {
  return (
    <>
      <Nav_sec id={4} />
      <Pages_Hero id={2} />
      <Testimonials id={1} />
      <Footer />
    </>
  );
};

export default Home;
