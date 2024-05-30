import React from 'react';
import Nav_sec from '@components/Navbar/Navbar';
import Instructor from '@components/Instructor/Instructor';
import Testimonials from '@components/Testimonials/Testimonials';
import Faqs from '@components/Faqs/Faqs';
import Footer from '@components/Footer/Footer';
import Course_Hero from '@components/Course_Hero/Course_Hero';
import Curriculum from '@components/Curriculum/Curriculum';

export const metadata = {
  title: `Ace JEE with Advanced Physics Mastery`,
  description: `Dive deep into complex topics and master the skills needed to excel in one of India's toughest entrance exams.`,
  keywords: [
    'Courses', 'Advanced Physics', 'JEE preparation', 'Indian students', 'Physics education', 'JEE exams', 'ex-IITian', 'best platform', 'IIT', 'Kota', 'best JEE coaching', 'JEE Physics courses'
  ]
};

const Home = () => {
  return (
    <>
      <Nav_sec id={2} />
      <Course_Hero id={2} />
      <Curriculum id={2} />
      <Instructor />
      <Testimonials id={0} />
      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
