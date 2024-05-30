import React from 'react';
import Nav_sec from '@components/Navbar/Navbar';
import Pages_Hero from '@components/Pages_Hero/Pages_Hero';
import Testimonials from '@components/Testimonials/Testimonials';
import Faqs from '@components/Faqs/Faqs';
import Footer from '@components/Footer/Footer';
import Courses_Course from '@components/Courses_Course/Courses_Course';

export const metadata = {
  title: `Premium Courses by Vigyan`,
  description: `Explore our range of Advanced Physics courses tailored for Indian students aiming to excel in JEE exams. Get expert guidance from ex-IITians, comprehensive study materials, and proven strategies to master the JEE syllabus. Our courses are designed to provide the best platform for your JEE preparation journey, ensuring you achieve top ranks and secure a place in IIT.`,
  keywords: [
    'Courses', 'Advanced Physics', 'JEE preparation', 'Indian students', 'Physics education', 'JEE exams', 'ex-IITian', 'best platform', 'IIT', 'Kota', 'best JEE coaching', 'JEE Physics courses'
  ]
};

const Home = () => {
  return (
    <>
      <Nav_sec id={2} />
      <Pages_Hero id={3} />
      <Courses_Course />
      <Testimonials id={0} />
      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
