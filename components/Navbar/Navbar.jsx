'use client';
import React, { useState } from 'react';
import './Navbar.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/assets/Logo/Transparent/Logo-Transparent(1).png';

const Navbar = ({ id }) => {
  const nav_mid_btns_list = [
    { id: 1, btn: 'Home', link: '/' },
    { id: 2, btn: 'Course', link: '/' },
    { id: 3, btn: 'About Us', link: '/' },
    { id: 4, btn: 'Testimonials', link: '/' },
    { id: 5, btn: 'Contact Now', link: '/' },
    { id: 6, btn: 'FAQs', link: '/' }
  ];

  let nav_mid_btns = [];

  for (let i = 0; i < nav_mid_btns_list.length; i++) {
    if (id > 4) {
      (nav_mid_btns_list[i].id < 4 || nav_mid_btns_list[i].id == id) &&
      nav_mid_btns.length <= 4
        ? nav_mid_btns.push(nav_mid_btns_list[i])
        : '';
    } else {
      nav_mid_btns_list[i].id <= 4 && nav_mid_btns.length <= 4
        ? nav_mid_btns.push(nav_mid_btns_list[i])
        : '';
    }
  }

  return (
    <nav>
      <Image src={Logo} alt="Vigyan logo" priority />
      <div>
        {nav_mid_btns.map((data) => (
          <Link
            key={data.id}
            href={data.link}
            style={{
              color: data.id == id ? '#e8e8e8' : ''
            }}
            className="nav_mid_btns"
          >
            <span style={{ color: '#fa541c' }}>{data.id == id ? '·' : ''}</span>
            {data.id == id ? ` ${data.btn}` : data.btn}
          </Link>
        ))}
      </div>
      <div>
        <button className="body-medium-tag">Log In</button>
        <button className="body-medium-tag">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
