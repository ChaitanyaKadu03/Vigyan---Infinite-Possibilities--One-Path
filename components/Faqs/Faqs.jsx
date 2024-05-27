import React from 'react';
import './Faqs.css';
import Image from 'next/image';
import plus from '../../public/assets/plus.svg';
import Faqs_Data from '@components/Data/Faqs_Data';

const Faqs = () => {
  return (
    <div className="faqs">
      <div className="faqs-p1">
        <h3 className="h3-tag neutral-100">Frequently asked questions</h3>
        <p className="body-medium-tag neutral-70">
          Find Answers to Common Queries About Our Courses and Teaching Methods
        </p>
      </div>
      <div className="faqs-p2">
        {Faqs_Data.map((data) => (
          <div className="faqs-qa-div" key={data.id}>
            <div className="faqs-qa-div-p1">
              <p className="body-large-tag neutral-100">{data.question}</p>
              <Image src={plus} alt="icon" />
            </div>
            <p className="body-small-tag neutral-80 faqs-qa-div-p2">
              {data.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
