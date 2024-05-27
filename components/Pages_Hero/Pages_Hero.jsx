import React from 'react';
import Image from 'next/image';
import '../Landing_Hero/Landing_Hero.css';
import './Pages_Hero.css';
import Pages_Hero_Data from '@components/Data/Pages_Hero_Data';

const Pages_Hero = ({ id }) => {
  let data = Pages_Hero_Data[id];
  return (
    <div className="pages-hero blackish-gradient">
      <div className="pages-hero-p1">
        <h1 className="h1-tag" dangerouslySetInnerHTML={{ __html: data.Heading }}></h1>
        <h2 className="body-large-tag neutral-70">{data.Paragraph}</h2>
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
      </div>
      <div className="pages-hero-p2">
        <Image src={data.poster} alt="poster" />
      </div>
    </div>
  );
};

export default Pages_Hero;
