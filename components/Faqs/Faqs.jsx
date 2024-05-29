'use client';
import React, { useState } from 'react';
import './Faqs.css';
import Image from 'next/image';
import plus from '../../public/assets/plus.svg';
import Faqs_Data from '@components/Data/Faqs_Data';

const Faqs = () => {
  let [list, setList] = useState([1, 0, 0, 0, 0, 0]);
  const clicked = (position) => {
    const newList = [...list];
    newList[position - 1] = newList[position - 1] === 0 ? 1 : 0;
    setList(newList);
  };
  return (
    <div className="faqs standard-padding">
      <div className="faqs-p1">
        <h3 className="h3-tag neutral-100">Frequently asked questions</h3>
        <p className="body-medium-tag neutral-70">
          Find Answers to Common Queries About Our Courses and Teaching Methods
        </p>
      </div>
      <div className="faqs-p2">
        {Faqs_Data.map((data) => (
          <div
            className="faqs-qa-div"
            key={data.id}
            onClick={() => {
              clicked(data.id);
            }}
          >
            <div className="faqs-qa-div-p1">
              <p className="body-large-tag neutral-100">{data.question}</p>
              <Image src={plus} alt="icon" />
            </div>
            <p
              className="body-small-tag neutral-80 faqs-qa-div-p2"
              style={{
                display: list[data.id - 1] == 0 ? 'none' : 'flex'
              }}
            >
              {data.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
