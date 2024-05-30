import React from 'react';
import Nav_sec from '@components/Navbar/Navbar';
import Pages_Hero from '@components/Pages_Hero/Pages_Hero';
import Faqs from '@components/Faqs/Faqs';
import Footer from '@components/Footer/Footer';

export const metadata = {
  title: `FAQs - Advanced Physics for JEE Preparation`,
  description: `Find answers to frequently asked questions about our Advanced Physics course and how it helps Indian students prepare for JEE exams. Learn more about our teaching methodology, the benefits of studying with ex-IITians, and why our platform is the best choice for JEE aspirants from Kota and beyond.`,
  keywords: [
    'FAQs', 'Frequently Asked Questions', 'JEE preparation', 'Advanced Physics', 'Indian students', 'JEE exams', 'ex-IITian', 'best platform', 'IIT', 'Kota', 'best JEE coaching', 'JEE FAQs'
  ]
};

const Home = () => {
  return (
    <>
      <Nav_sec id={6} />
      <Pages_Hero id={1}/>
      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
