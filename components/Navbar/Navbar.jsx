'use client';
import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/assets/Logo/Transparent/Logo-Transparent(1).png';
import menu from '../../public/assets/menu.svg';
import Course_Card_Data from '@components/Data/Course_Card_Data';
import dot from '../../public/assets/dot.svg';
import Footer_Cards from '@components/Footer_Cards/Footer_Cards';
import arrow from '../../public/assets/arrow.svg';

const Navbar = ({ id }) => {
  const nav_mid_btns_list = [
    { num: 1, btn: 'Home', link: '/' },
    { num: 2, btn: 'Course', link: '/courses' },
    { num: 3, btn: 'About Us', link: '/about-us' },
    { num: 4, btn: 'Testimonials', link: '/testimonials' },
    { num: 5, btn: 'Contact Now', link: '/contact' },
    { num: 6, btn: 'FAQs', link: '/faqs' }
  ];

  let nav_mid_btns = [];

  for (let i = 0; i < nav_mid_btns_list.length; i++) {
    if (id > 4) {
      (nav_mid_btns_list[i].num < 4 || nav_mid_btns_list[i].num == id) &&
      nav_mid_btns.length <= 4
        ? nav_mid_btns.push(nav_mid_btns_list[i])
        : '';
    } else {
      nav_mid_btns_list[i].num <= 4 && nav_mid_btns.length <= 4
        ? nav_mid_btns.push(nav_mid_btns_list[i])
        : '';
    }
  }

  let [coursebtnclick, setcoursebtnclick] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdown = () => {
    setcoursebtnclick(!coursebtnclick);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setcoursebtnclick(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  let [navbaropen, setnavbaropen] = useState(false);

  function naviconclick() {
    let a = navbaropen;
    setnavbaropen(!a);
  }

  return (
    <nav>
      <div className="nav-menu">
        <Image
          src={menu}
          alt="menu icon"
          className="nav-menu-icon"
          onClick={() => {
            naviconclick();
          }}
        />
        <ul
          className="navbar_mob"
          style={{ display: navbaropen ? '' : 'none' }}
        >
          <li>
            {id == 1 ? <Image src={dot} alt="icn" className="nav-dot" /> : ''}
            <Link
              href={'/'}
              style={{
                color: id == 1 ? '#000' : '#575757',
                textDecoration: 'none'
              }}
            >
              Home
            </Link>
          </li>
          <li
            onClick={() => {
              handleDropdown();
            }}
            ref={dropdownRef}
          >
            {id == 2 ? <Image src={dot} alt="icn" className="nav-dot" /> : ''}
            <Link
              href={'/courses'}
              style={{
                color: id == 2 ? '#000' : '#575757',
                textDecoration: 'none'
              }}
            >
              Courses{' '}
            </Link>
          </li>
          <li>
            {id == 3 ? <Image src={dot} alt="icn" className="nav-dot" /> : ''}
            <Link
              href={'/about-us'}
              style={{
                color: id == 3 ? '#000' : '#575757',
                textDecoration: 'none'
              }}
            >
              About Us
            </Link>
          </li>
          <li>
            {id == 4 ? <Image src={dot} alt="icn" className="nav-dot" /> : ''}
            <Link
              href={'/testimonials'}
              style={{
                color: id == 5 ? '#000' : '#575757',
                textDecoration: 'none'
              }}
            >
              Testimonials
            </Link>
          </li>
          <li>
            {id == 5 ? <Image src={dot} alt="icn" className="nav-dot" /> : ''}
            <Link
              href={'/contact'}
              style={{
                color: id == 5 ? '#000' : '#575757',
                textDecoration: 'none'
              }}
            >
              Contact Now
            </Link>
          </li>
          <li>
            {id == 6 ? <Image src={dot} alt="icn" className="nav-dot" /> : ''}
            <Link
              href={'/faqs'}
              style={{
                color: id == 6 ? '#000' : '#575757',
                textDecoration: 'none'
              }}
            >
              FAQs
            </Link>
          </li>
        </ul>
      </div>
      <Link href={'/'}>
        <Image src={Logo} alt="Vigyan logo" className="nav-logo" />
      </Link>
      <ul className="nav-p2" style={{ textDecoration: 'none' }}>
        <li className="nav-p-li body-medium-tag">
          {id == 1 ? <Image src={dot} alt="icn" className="nav-dot" /> : ''}
          <Link
            href={'/'}
            className={id == 1 ? ' nav-clicked-btn' : ''}
            style={{ color: id == 1 ? '#e8e8e8' : '#afafaf' }}
          >
            Home
          </Link>
        </li>
        <li
          className="nav-p-li body-medium-tag "
          onClick={() => {
            handleDropdown();
          }}
          ref={dropdownRef}
        >
          {id == 2 ? <Image src={dot} alt="icn" className="nav-dot" /> : ''}
          <a style={{ color: id == 2 ? '#e8e8e8' : '#afafaf' }}>
            Courses{' '}
            <Image
              src={arrow}
              alt="icon"
              className="nav-arrow"
              style={{
                transform: coursebtnclick ? 'rotate(0deg)' : 'rotate(180deg)'
              }}
            />
          </a>
          {coursebtnclick && <Footer_Cards />}
        </li>
        <li className="nav-p-li body-medium-tag">
          {id == 3 ? <Image src={dot} alt="icn" className="nav-dot" /> : ''}
          <Link
            href={'/about-us'}
            style={{ color: id == 3 ? '#e8e8e8' : '#afafaf' }}
          >
            About Us
          </Link>
        </li>
        <li className="nav-p-li body-medium-tag">
          {id == 4 || id == 5 || id == 6 ? (
            <Image src={dot} alt="icn" className="nav-dot" />
          ) : (
            ''
          )}
          <Link
            href={'/testimonials'}
            style={{
              color: id == 4 || id == 5 || id == 6 ? '#e8e8e8' : '#afafaf'
            }}
          >
            {nav_mid_btns_list[id - 1].btn}
          </Link>
        </li>
      </ul>
      {/* {nav_mid_btns.map((data) => (
          <Link
            key={data.num}
            href={data.link}
            style={{
              color: data.num == id ? '#e8e8e8' : ''
            }}
            className="nav_mid_btns"
            onClick={() => {
              data.num == 2 ? clicked() : '';
            }}
            onMouseOver={() => {
              data.num == 2 ? handleMouseOver() : '';
            }}
          >
            <div className="nmmb-div">
              {data.num == id ? (
                <Image src={dot} alt="icn" className="nav-dot" />
              ) : (
                ''
              )}
              <div
                className={
                  data.num == 2 ? `nmmbd-p1 nmmbd-p1-course` : `nmmbd-p1`
                }
              >
                {data.num == id ? `${data.btn}` : data.btn}
                {data.num == 2 && coursebtnclick ? <Footer_Cards /> : ''}
              </div>
              {data.num == 2 ? (
                <Image src={arrow} alt="icn" className="nav-arrow" />
              ) : (
                ''
              )}
            </div>
          </Link>
        ))} */}
      <div className="nav-p3">
        <button className="body-medium-tag">Log In</button>
        <button className="body-medium-tag button-33">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
