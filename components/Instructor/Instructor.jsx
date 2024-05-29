import React from 'react';
import './Instructor.css';
import teacher from '../../public/assets/teacher 2.jpg';
import Image from 'next/image';
import linkedln from '../../public/assets/linkedin.svg';
import meta from '../../public/assets/meta.svg';
import instagram from '../../public/assets/instagram.svg';
import Link from 'next/link';

const Instructor = () => {
  const social_media_list = [
    { id: 1, img: { linkedln }, link: '' },
    { id: 2, img: { meta }, link: '' },
    { id: 3, img: { instagram }, link: '' }
  ];
  return (
    <div className="instructor-div standard-padding">
      <div className="instructor-div-p1">
        <h3 className="h3-tag neutral-100">Meet Your Instructor</h3>
        <p className="body-medium-tag neutral-70">
          Learn from Sandeep Roy, an Esteemed Academician with a Passion for
          Physics
        </p>
      </div>
      <div className="instructor-div-p2">
        <Image src={teacher} alt="Sandeep Roy teaching" className="idp2-img" />
        <div className="idp2-div">
          <div className='idp2-div-p1'>
            <h2 className="h2-tag neutral-100">Sandeep Roy</h2>
            <p className="body-small-tag neutral-70">
              Founder of Vigyan and an Ex-IItian
            </p>
          </div>
          <p className="body-medium-tag neutral-80">
            At Vigyan, we believe that the key to mastering physics lies in
            learning from the best. Our courses are designed and delivered by an
            expert who has dedicated his life to helping students achieve their
            academic goals. With a profound understanding of physics and a
            passion for teaching, our instructor bridges the gap between complex
            theories and practical understanding. His innovative teaching
            methods, honed over decades of experience, ensure that students not
            only grasp the fundamental concepts but also excel in competitive
            exams. Our goal is to make learning physics an enjoyable and
            rewarding experience, paving the way for our students to secure
            admissions to top engineering and medical colleges in India.
            Discover the difference that expert guidance can make in your
            academic journey.
          </p>
          <div className='idp2-div-p2'>
            <Link href={"/"} className='idp2-div-p2-link'>
              <Image src={linkedln} alt="icon" />
            </Link>
            <Link href={"/"} className='idp2-div-p2-link'>
              <Image src={meta} alt="icon" />
            </Link>
            <Link href={"/"} className='idp2-div-p2-link'>
              <Image src={instagram} alt="icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
