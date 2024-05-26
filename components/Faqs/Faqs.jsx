import React from 'react';
import './Faqs.css';
import Image from 'next/image';
import plus from '../../public/assets/plus.svg';

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
        <div className="faqs-qa-div">
          <div className="faqs-qa-div-p1">
            <p className="body-large-tag neutral-100">
              What is the difference between JEE Main and JEE Advanced?
            </p>
            <Image src={plus} alt="icon" />
          </div>
          <p className="body-small-tag neutral-80 faqs-qa-div-p2">
            For candidates aspiring for B.Tech courses offered in NITs, IIITs,
            and other CFTIs, JEE Main is conducted. JEE Main can be considered
            as an eligibility test for candidates preparing for JEE Advanced,
            which paves the way to admission to IITs. The students can appear
            for JEE Main three consecutive times while only two consecutive
            chances are given to appear for JEE Advanced.
          </p>
        </div>
        <div className="faqs-qa-div">
          <div className="faqs-qa-div-p1">
            <p className="body-large-tag neutral-100">
              What is the difference between JEE Main and JEE Advanced?
            </p>
            <Image src={plus} alt="icon" />
          </div>
        </div>
        <div className="faqs-qa-div">
          <div className="faqs-qa-div-p1">
            <p className="body-large-tag neutral-100">
              What is the difference between JEE Main and JEE Advanced?
            </p>
            <Image src={plus} alt="icon" />
          </div>
        </div>
        <div className="faqs-qa-div">
          <div className="faqs-qa-div-p1">
            <p className="body-large-tag neutral-100">
              What is the difference between JEE Main and JEE Advanced?
            </p>
            <Image src={plus} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
