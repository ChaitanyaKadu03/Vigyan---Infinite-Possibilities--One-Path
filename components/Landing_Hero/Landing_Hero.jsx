import React from 'react';
import './Landing_Hero.css';
import Image from 'next/image';
import teacher from '../../public/assets/teacher-1.png';

const Landing_Hero = () => {
  const stats_data = [
    {
      id: 1,
      type: 'Students',
      count: 896,
      suffix: ' +'
    },
    {
      id: 2,
      type: 'Course',
      count: 3,
      suffix: ''
    },
    {
      id: 3,
      type: 'Watch Time',
      count: 326,
      suffix: ' +'
    }
  ];

  return (
    <div className="landing-hero">
      <div className="l-h-p1">
        <h1 className="h1-tag">
          Infinite <span className='grey-gradient-font'>Possibilities</span> <span className='orange-gradient-font'>One</span> Path{' '}
        </h1>
        <h2 className="body-large-tag">
          Master Physics with Expert-led Courses for JEE, NEET, and Beyond
        </h2>
        <div className="demo-video">
          <svg
            viewBox="-3 0 28 28"
            version="1.1"
            fill="#000000"
            stroke="#000000"
            className="play-icon"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>play</title>
              <desc>Created with Sketch Beta.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Icon-Set-Filled"
                  transform="translate(-419.000000, -571.000000)"
                  fill="#6285fd"
                >
                  <path
                    d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554"
                    id="play"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <p className="body-medium-tag">Demo Video</p>
        </div>
        <span className="line-br" />
        <div className="stats">
          {stats_data.map((data) => {
            return (
              <div key={data.id}>
                <p className="h4-tag">
                  {data.count} {data.suffix}
                </p>
                <p className="body-large-tag">{data.type}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="l-h-p2">
        <Image src={teacher} alt="Sandeep Roy" priority />
      </div>
    </div>
  );
};

export default Landing_Hero;
