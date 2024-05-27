import React from 'react';
import './Contact_Form.css';
import Image from 'next/image';
import img from '../../public/assets/contact img.png';

const Contact_Form = () => {
  return (
    <div className="contact-form">
      <Image src={img} alt="Image" />
      <div className="contact-form-p1">
        <div className="cfp1-p1">
          <h3 className="h3-tag neutral-100">Drop Us A Message</h3>
          <p className="body-medium-tag neutral-70">
            We normally respond within 2 business days
          </p>
        </div>
        <form></form>
        <button>Send Request</button>
      </div>
    </div>
  );
};

export default Contact_Form;
