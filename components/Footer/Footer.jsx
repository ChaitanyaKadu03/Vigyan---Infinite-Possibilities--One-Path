import React from 'react';
import './Footer.css';
import Image from 'next/image';
import logo from '../../public/assets/Logo/Transparent/Logo-Transparent(4).png';
import youtube from '../../public/assets/youtube-white.svg';
import instagram from '../../public/assets/instagram-white.svg';
import linkedin from '../../public/assets/linkedin-white.svg';
import x from '../../public/assets/x-white.svg';
import gmail from '../../public/assets/gmail-white.svg';
import banner1 from '../../public/assets/course_1.jpg';

const Footer = () => {
  return (
    <div className="footer">
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
            <div className="fp1p1d-div">
              <Image src={banner1} alt="course banner" />
              <div>
                <p className="body-medium-tag">Basics of Physics</p>
                <p className="body-small-tag neutral-70">
                  Building a Strong Foundation for Advanced Learning
                </p>
              </div>
            </div>
            <div className="fp1p1d-div">
              <Image src={banner1} alt="course banner" />
              <div>
                <p className="body-medium-tag">Basics of Physics</p>
                <p className="body-small-tag neutral-70">
                  Building a Strong Foundation for Advanced Learning
                </p>
              </div>
            </div>
            <div className="fp1p1d-div">
              <Image src={banner1} alt="course banner" />
              <div>
                <p className="body-medium-tag">Basics of Physics</p>
                <p className="body-small-tag neutral-70">
                  Building a Strong Foundation for Advanced Learning
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="fp1-p3">
          <div className="fp1p3-div">
            <h4 className="h4-tag">Notes</h4>
            <div>
              <p className="body-small-tag neutral-70">Physics</p>
              <p className="body-small-tag neutral-70">Chemistry</p>
              <p className="body-small-tag neutral-70">Mathematics</p>
            </div>
          </div>
          <div className="fp1p3-div">
            <h4 className="h4-tag">Scroll To</h4>
            <div>
              <p className="body-small-tag neutral-70">Home</p>
              <p className="body-small-tag neutral-70">Courses</p>
              <p className="body-small-tag neutral-70">Instructor</p>
              <p className="body-small-tag neutral-70">Testimonials</p>
              <p className="body-small-tag neutral-70">FAQs</p>
            </div>
          </div>
          <div className="fp1p3-div">
            <h4 className="h4-tag">Pages</h4>
            <div>
              <p className="body-small-tag neutral-70">Home</p>
              <p className="body-small-tag neutral-70">Courses</p>
              <p className="body-small-tag neutral-70">About Us</p>
              <p className="body-small-tag neutral-70">Testimonials</p>
              <p className="body-small-tag neutral-70">FAQs</p>
            </div>
          </div>
          <div className="fp1p3-div">
            <h4 className="h4-tag">PYQs</h4>
            <div>
              <p className="body-small-tag neutral-70">Physics</p>
              <p className="body-small-tag neutral-70">Chemistry</p>
              <p className="body-small-tag neutral-70">Mathematics</p>
            </div>
          </div>
        </div>
      </div>
      <span className="footer-p-line" />
      <div className="footer-p2">
        <p className="body-medium-tag neutral-70">© 2024 Vigyan. All rights reserved.</p>
        <div>
          <Image src={instagram} alt="icon" />
          <Image src={gmail} alt="icon" />
          <Image src={linkedin} alt="icon" />
          <Image src={youtube} alt="icon" />
          <Image src={x} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;