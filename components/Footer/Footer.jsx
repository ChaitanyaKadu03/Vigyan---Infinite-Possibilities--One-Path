'use client';
import React, { useEffect, useRef } from 'react';
import './Footer.css';
import Image from 'next/image';
import logo from '../../public/assets/Logo/Transparent/Logo-Transparent(4).png';
import youtube from '../../public/assets/youtube-white.svg';
import instagram from '../../public/assets/instagram-white.svg';
import linkedin from '../../public/assets/linkedin-white.svg';
import x from '../../public/assets/x-white.svg';
import gmail from '../../public/assets/gmail-white.svg';
import banner1 from '../../public/assets/course_1.jpg';
import Course_Card_Data from '@components/Data/Course_Card_Data';
import Link from 'next/link';

const Footer = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.1 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <div className="footer" ref={sectionRef}>
      <div className="footer-p1">
        <div className="fp1-p1">
          <Image src={logo} alt="logo" />
          <p className="body-medium--tag neutral-70">
            Vigyan is dedicated to transforming physics education for aspiring
            engineers and doctors. Our innovative online courses, designed by
            renowned academician Sandeep Roy, offer comprehensive learning
            experiences that pave the way for academic excellence and success in
            competitive exams.
          </p>
          <p className="body-medium--tag neutral-70">
            We strive to respond to all enquiries between Mon-Fri (9AM-5PM) IST
            .
          </p>
        </div>
        <div className="fp1-p2">
          <h4 className="h4-tag">Courses</h4>
          <div className="fp1p2-div">
            {Course_Card_Data.map((data) => (
              <Link
                href={data.link}
                style={{ textDecoration: 'none' }}
                className="fp1p1d-div"
                key={data.id}
              >
                <Image src={data.poster} alt="course banner" />
                <div>
                  <p className="body-medium-tag fp1p1d-div-heading">
                    {data.heading}
                  </p>
                  <p className="body-small-tag neutral-70">
                    {data.sub_heading}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="fp1-p3">
          <div className="fp1p3-div">
            <h4 className="h4-tag">Notes</h4>
            <div>
              <Link
                href={'/'}
                style={{ textDecoration: 'none' }}
                className="body-small-tag neutral-70"
              >
                Physics
              </Link>
              <Link
                href={'/'}
                style={{ textDecoration: 'none' }}
                className="body-small-tag neutral-70"
              >
                Chemistry
              </Link>
              <Link
                href={'/'}
                style={{ textDecoration: 'none' }}
                className="body-small-tag neutral-70"
              >
                Mathematics
              </Link>
            </div>
          </div>
          <div className="fp1p3-div">
            <h4 className="h4-tag">Others</h4>
            <div>
              <Link
                href={'https://www.youtube.com/watch?v=wd2gVNavLCo'}
                style={{ textDecoration: 'none' }}
                className="body-small-tag neutral-70"
                target="_blank"
              >
                Demo Video
              </Link>
              <Link
                href={'https://www.youtube.com/@VigyanJeeSandeepRoy'}
                style={{ textDecoration: 'none' }}
                className="body-small-tag neutral-70"
                target="_blank"
              >
                Youtube
              </Link>
              <Link
                href={'/'}
                style={{ textDecoration: 'none' }}
                className="body-small-tag neutral-70"
              >
                Sandeep Roy
              </Link>
            </div>
          </div>
          <div className="fp1p3-div">
            <h4 className="h4-tag">Pages</h4>
            <div>
              <Link
                href={'/'}
                style={{ textDecoration: 'none' }}
                className="body-small-tag neutral-70"
              >
                Home
              </Link>
              <Link
                href={'/courses'}
                style={{ textDecoration: 'none' }}
                className="body-small-tag neutral-70"
              >
                Courses
              </Link>
              <Link
                href={'/about-us'}
                style={{ textDecoration: 'none' }}
                className="body-small-tag neutral-70"
              >
                About Us
              </Link>
              <Link
                href={'/testimonials'}
                style={{ textDecoration: 'none' }}
                className="body-small-tag neutral-70"
              >
                Testimonials
              </Link>
              <Link
                href={'/faqs'}
                style={{ textDecoration: 'none' }}
                className="body-small-tag neutral-70"
              >
                FAQs
              </Link>
            </div>
          </div>
          <div className="fp1p3-div">
            <h4 className="h4-tag">PYQs</h4>
            <div>
              <Link
                href={'/'}
                style={{ textDecoration: 'none' }}
                className="body-small-tag neutral-70"
              >
                Physics
              </Link>
              <Link
                href={'/'}
                style={{ textDecoration: 'none' }}
                className="body-small-tag neutral-70"
              >
                Chemistry
              </Link>
              <Link
                href={'/'}
                style={{ textDecoration: 'none' }}
                className="body-small-tag neutral-70"
              >
                Mathematics
              </Link>
            </div>
          </div>
        </div>
      </div>
      <span className="footer-p-line" />
      <div className="footer-p2">
        <p className="body-medium-tag neutral-70">
          © 2024 Vigyan. All rights reserved.
        </p>
        <div>
          <Link href={'/'}>
            <Image src={instagram} alt="icon" />
          </Link>
          <Link href={'/'}>
            <Image src={gmail} alt="icon" />
          </Link>
          <Link href={'/'}>
            <Image src={linkedin} alt="icon" />
          </Link>
          <Link href={'/'}>
            <Image src={youtube} alt="icon" />
          </Link>
          <Link href={'/'}>
            <Image src={x} alt="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
