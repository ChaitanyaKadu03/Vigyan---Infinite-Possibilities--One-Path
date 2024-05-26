import React from 'react';
import './Testimonials.css';
import Testimoial_Card from '@components/Testimonial_Card/Testimonial_Card';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-p1">
        <h3 className="h3-tag neutral-100">Testimonials </h3>
        <p className="body-medium-tag neutral-70">
          Discover How Vigyan Has Transformed the Academic Journeys of Aspiring
          Engineers and Doctors
        </p>
      </div>
      <div className="testimonials-p2">
        <Testimoial_Card />
        <Testimoial_Card />
        <Testimoial_Card />
        <Testimoial_Card />
        <Testimoial_Card />
        <Testimoial_Card />
        <Testimoial_Card />
        <Testimoial_Card />
        <Testimoial_Card />
      </div>
    </div>
  );
};

export default Testimonials;
