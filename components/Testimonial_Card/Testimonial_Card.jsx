import React from 'react';
import './Testimonial_Card.css';
import Image from 'next/image';
import star from '../../public/assets/star.svg';

const Testimonial_Card = ({ data, ismob }) => {
  return ismob ? (
    data.id < 5 ? (
      <div className="testimonial-card" key={data.id}>
        <div className="testimonial-card-p1">
          <Image src={data.profile} alt="icon" />
          <div className="tcp1-div">
            <h5 className="h5-tag neutral-100">{data.name}</h5>
            <p className="body-small-tag neutral-70">{data.college}</p>
          </div>
        </div>
        <p className="body-medium-tag neutral-80">{data.feedback}</p>
        <div className="testimonial-card-p2">
          <Image src={star} alt="icon" />
          <Image src={star} alt="icon" />
          <Image src={star} alt="icon" />
          <Image src={star} alt="icon" />
          <Image src={star} alt="icon" />
        </div>
        <p className="body-medium-tag neutral-70">{data.date}</p>
      </div>
    ) : (
      ''
    )
  ) : (
    <div className="testimonial-card" key={data.id}>
      <div className="testimonial-card-p1">
        <Image src={data.profile} alt="icon" />
        <div className="tcp1-div">
          <h5 className="h5-tag neutral-100">{data.name}</h5>
          <p className="body-small-tag neutral-70">{data.college}</p>
        </div>
      </div>
      <p className="body-medium-tag neutral-80">{data.feedback}</p>
      <div className="testimonial-card-p2">
        <Image src={star} alt="icon" />
        <Image src={star} alt="icon" />
        <Image src={star} alt="icon" />
        <Image src={star} alt="icon" />
        <Image src={star} alt="icon" />
      </div>
      <p className="body-medium-tag neutral-70">{data.date}</p>
    </div>
  );
};

export default Testimonial_Card;
