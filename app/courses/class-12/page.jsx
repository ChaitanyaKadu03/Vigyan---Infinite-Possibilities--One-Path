import React from 'react';
import Nav_sec from '@components/Navbar/Navbar';
import Instructor from '@components/Instructor/Instructor';
import Testimonials from '@components/Testimonials/Testimonials';
import Faqs from '@components/Faqs/Faqs';
import Footer from '@components/Footer/Footer';
import Course_Hero from '@components/Course_Hero/Course_Hero';
import Curriculum from '@components/Curriculum/Curriculum';

export const metadata = {
  title: `Class 12th - Physics Concept Course`,
  description: `Explore the essentials of electric charges and forces, and learn how electric fields are created and manipulated.`,
  keywords: [
    'Courses', 'Advanced Physics', 'JEE preparation', 'Indian students', 'Physics education', 'JEE exams', 'ex-IITian', 'best platform', 'IIT', 'Kota', 'best JEE coaching', 'JEE Physics courses'
  ]
};

const Home = () => {
  return (
    <>
      <Nav_sec id={2} />
      <Course_Hero id={1} />
      <Curriculum id={1} />
      <Instructor />
      <Testimonials id={0} />
      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
