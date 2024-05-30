import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Course_Card_Data from '@components/Data/Course_Card_Data';

const Footer_Cards = () => {
  return (
    <div className="course-dropdown">
      {Course_Card_Data.map((data) => (
        <Link
          href={data.link}
          style={{ textDecoration: 'none' }}
          className="fp1p1d-div"
          key={data.id}
        >
          <Image src={data.poster} alt="course banner" />
          <div>
            <p className="body-medium-tag fp1p1d-div-heading">{data.heading}</p>
            <p className="body-small-tag neutral-70">{data.sub_heading}</p>
          </div>
        </Link>
      ))}
      <Link
        href={'/courses'}
        className="cdpn-course-btn-nav body-medium-tag neutral-70"
      >
        Courses
      </Link>
    </div>
  );
};

export default Footer_Cards;
