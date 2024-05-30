import React from 'react';
import Nav_sec from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import img from '../public/assets/404.svg';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Nav_sec id={1} />
      <Image
        src={img}
        alt="Page not found. 404 Error."
        style={{ height: '400px', width: '400px', objectFit: 'cover',left:'50%', position:'relative', transform:'translateX(-50%)' }}
      />
      <Footer />
    </>
  );
};

export default Home;
