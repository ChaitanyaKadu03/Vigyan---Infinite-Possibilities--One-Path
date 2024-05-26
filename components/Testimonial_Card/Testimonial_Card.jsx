import React from 'react';
import './Testimonial_Card.css'
import Image from 'next/image';
import user from '../../public/assets/user.svg';
import star from '../../public/assets/star.svg';

const Testimoial_Card = () => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-p1">
        <Image src={user} alt="icon" />
        <div className="tcp1-div">
          <h5 className="h5-tag neutral-100">Aarav Sharma</h5>
          <p className="body-small-tag neutral-70">IIT Bombay</p>
        </div>
      </div>
      <p className="body-medium-tag neutral-80">
        Vigyan's comprehensive and structured approach to teaching physics
        helped me clear my concepts and excel in JEE Advanced. The in-depth
        videos and instant doubt resolution were invaluable.
      </p>
      <div className="testimonial-card-p2">
        <Image src={star} alt="icon" />
        <Image src={star} alt="icon" />
        <Image src={star} alt="icon" />
        <Image src={star} alt="icon" />
        <Image src={star} alt="icon" />
      </div>
      <p className="body-medium-tag neutral-70">Submitted on April 30, 2024</p>
    </div>
  );
};

export default Testimoial_Card;
