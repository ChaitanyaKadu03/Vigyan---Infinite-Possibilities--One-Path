'use client'; 
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import './Curriculum.css';
import arrow from '../../public/assets/arrow.svg';
import clock from '../../public/assets/clock.svg';
import lesson from '../../public/assets/lesson.svg';
import module from '../../public/assets/module.svg';
import calender from '../../public/assets/calender.svg';
import language from '../../public/assets/language.svg';
import laptop from '../../public/assets/laptop.svg';
import youtube_grey from '../../public/assets/youtube grey.svg';
import youtube_orange from '../../public/assets/youtube orange.svg';
import Course_Curriculum_Data from '@components/Data/Course_Curriculum_Data';
import Link from 'next/link';
import soon from '../../public/assets/coming-soon.svg';

const Curriculum = ({ id }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.1 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  let data = Course_Curriculum_Data[id];
  let time_sum = 0;
  for (let i = 0; i < data.course.length; i++) {
    time_sum += data.course[i].time;
  }
  let lec_sum = 0;
  for (let i = 0; i < data.course.length; i++) {
    lec_sum += data.course[i].lectures.length;
  }
  let list_modList = [];
  for (let i = 0; i < data.course.length; i++) {
    list_modList.push(0);
  }
  let [modList, setModList] = useState(list_modList);
  let [expandBtn, setExpandBtn] = useState(true);
  const expandALLBtn = () => {
    let a = expandBtn;
    if (a) {
      for (let i = 0; i < list_modList.length; i++) {
        list_modList[i] = 1;
      }
    } else {
      for (let i = 0; i < list_modList.length; i++) {
        list_modList[i] = 0;
      }
    }
    setModList(list_modList);
    setExpandBtn(!a);
  };
  const modBtnClick = (rank) => {
    let updatedModList = [...modList];
    updatedModList[rank - 1] = updatedModList[rank - 1] === 0 ? 1 : 0;
    setModList(updatedModList);
  };
  return id != 2 ? (
    <div className="curriculum standard-padding" ref={sectionRef}>
      <div className="curriculum-p1">
        <div className="cp1-p1">
          <div className="cp1p1-p1">
            <h3 className="h3-tag neutral-100">Curriculum</h3>
            <p
              className="body-medium-tag orange"
              onClick={() => {
                expandALLBtn();
              }}
            >
              {expandBtn ? 'Expand all ' : 'Collapse all '}
              <span>
                <Image
                  src={arrow}
                  alt="icon"
                  style={{
                    transform: expandBtn ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                />
              </span>
            </p>
          </div>
          <div className="cp1p1-p2">
            <div className="cp1p1p2-div">
              <Image src={module} alt="icon" />
              <p className="body-medium-tag neutral-70">
                {data.course.length} Modules
              </p>
            </div>
            <div className="cp1p1p2-div2">
              <div>
                <Image src={clock} alt="icon" />
                <p className="body-medium-tag neutral-70">
                  {time_sum}+ hrs of content
                </p>
              </div>
              <div>
                <Image src={lesson} alt="icon" />
                <p className="body-medium-tag neutral-70">{lec_sum} Lectures</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cp1-p2">
          {data.course.map((info) => (
            <div className="cp1p2-p1" key={info.course_id}>
              <div
                className="cp1p2p1-p1"
                onClick={() => {
                  modBtnClick(info.course_id);
                }}
              >
                <div className="cp1p2p1p1-div">
                  <Image
                    src={arrow}
                    alt="icon"
                    style={{
                      transform:
                        modList[info.course_id - 1] == 0
                          ? 'rotate(180deg)'
                          : 'rotate(0deg'
                    }}
                  />
                  <p className="body-large-tag neutral-100">{info.heading}</p>
                </div>
                <div className="cp1p2p1p1-div2">
                  <div>
                    <Image src={clock} alt="icon" />
                    <p className="body-small-tag neutral-70">
                      {info.time}+ hrs
                    </p>
                  </div>
                  <div>
                    <Image src={lesson} alt="icon" />
                    <p className="body-small-tag neutral-70">
                      {info.lectures.length} Lectures
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="cp1p2p1-p2"
                style={{
                  display: modList[info.course_id - 1] == 0 ? 'none' : 'flex'
                }}
              >
                {info.lectures.map((prompt) => (
                  <Link
                    className="cp1p2p1p2-div"
                    href={prompt.link}
                    target="_blank"
                  >
                    <div>
                      <Image src={youtube_grey} alt="icon" />
                      <p className="body-large-tag grey">{prompt.position}</p>
                      <p className="body-large-tag grey">{prompt.title}</p>
                    </div>
                    <p className="body-large-tag grey">{prompt.time}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="curriculum-p2">
        <Image src={data.poster} alt="poster" className="cp2-p1-poster" />
        <div className="cp2-p1">
          <p className="body-medium-tag neutral-70">Inclusion</p>
          <div className="cp2p1-div">
            <div>
              <Image src={clock} alt="icon" />
              <p className="body-medium-tag neutral-80">
                {time_sum}+ hrs of content
              </p>
            </div>
            <div>
              <Image src={module} alt="icon" />
              <p className="body-medium-tag neutral-80">
                {data.course.length} Modules
              </p>
            </div>
            <div>
              <Image src={lesson} alt="icon" />
              <p className="body-medium-tag neutral-80">{lec_sum} Lectures</p>
            </div>
            <div>
              <Image src={language} alt="icon" />
              <p className="body-medium-tag neutral-80">{data.lang}</p>
            </div>
          </div>
        </div>
        <div className="cp2-p1">
          <p className="body-medium-tag neutral-70">Access</p>
          <div className="cp2p1-div">
            <div>
              <Image src={laptop} alt="icon" />
              <p className="body-medium-tag neutral-80">{data.access}</p>
            </div>
            <div>
              <Image src={calender} alt="icon" />
              <p className="body-medium-tag neutral-80">{data.update}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="standard-padding curriculum-soon-div">
      <Image src={soon} alt="Coming soon" className="curriculum-soon-img" />
    </div>
  );
};

export default Curriculum;
