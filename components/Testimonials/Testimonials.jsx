import React from 'react';
import './Testimonials.css';
import Testimonial_Card from '@components/Testimonial_Card/Testimonial_Card';
import Testimonials_Data from '@components/Data/Testimonials_Data';

const Testimonials = () => {
  return (
    <div className="testimonials standard-padding">
      <div className="testimonials-p1">
        <h3 className="h3-tag neutral-100">Testimonials</h3>
        <p className="body-medium-tag neutral-70">
          Discover How Vigyan Has Transformed the Academic Journeys of Aspiring
          Engineers and Doctors
        </p>
      </div>
      <div className="testimonials-p2">
        {Testimonials_Data.map((info) => (
          <Testimonial_Card key={info.id} data={info} />
        ))}
      </div>
      <button className="body-medium-tag button-33">Read More</button>
    </div>
  );
};

export default Testimonials;
