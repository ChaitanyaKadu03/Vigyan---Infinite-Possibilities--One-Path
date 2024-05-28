import React from 'react';
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

const Curriculum = ({ id }) => {
  let data = Course_Curriculum_Data[id];
  return (
    <div className="curriculum standard-padding">
      <div className="curriculum-p1">
        <div className="cp1-p1">
          <div className="cp1p1-p1">
            <h3 className="h3-tag neutral-100">Curriculum</h3>
            <p className="body-medium-tag orange">
              Expand all{' '}
              <span>
                <Image src={arrow} alt="icon" />
              </span>
            </p>
          </div>
          <div className="cp1p1-p2">
            <div className="cp1p1p2-div">
              <Image src={module} alt="icon" />
              <p className="body-medium-tag neutral-70">11 Modules</p>
            </div>
            <div className="cp1p1p2-div2">
              <div>
                <Image src={clock} alt="icon" />
                <p className="body-medium-tag neutral-70">
                  9h 10m of total content
                </p>
              </div>
              <div>
                <Image src={lesson} alt="icon" />
                <p className="body-medium-tag neutral-70">77 Lectures</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cp1-p2">
          {data.course.map((info) => (
            <div className="cp1p2-p1">
              <div className="cp1p2p1-p1">
                <div className="cp1p2p1p1-div">
                  <Image src={arrow} alt="icon" />
                  <p className="body-large-tag neutral-100">{info.heading}</p>
                </div>
                <div className="cp1p2p1p1-div2">
                  <div>
                    <Image src={clock} alt="icon" />
                    <p className="body-small-tag neutral-70">42m</p>
                  </div>
                  <div>
                    <Image src={lesson} alt="icon" />
                    <p className="body-small-tag neutral-70">5 lectures</p>
                  </div>
                </div>
              </div>
              <div className="cp1p2p1-p2">
                {info.lectures.map((prompt) => (
                  <div className="cp1p2p1p2-div">
                    <div>
                      <Image src={youtube_grey} alt="icon" />
                      <p className="body-large-tag grey">1.1</p>
                      <p className="body-large-tag grey">{prompt.title}</p>
                    </div>
                    <p className="body-large-tag grey">{prompt.time}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="curriculum-p2">
        <div className="cp2-p1">
          <p className="body-medium-tag neutral-70">Inclusion</p>
          <div className="cp2p1-div">
            <div>
              <Image src={clock} alt="icon" />
              <p className="body-medium-tag neutral-80">9 + hours of content</p>
            </div>
            <div>
              <Image src={module} alt="icon" />
              <p className="body-medium-tag neutral-80">11 Modules</p>
            </div>
            <div>
              <Image src={lesson} alt="icon" />
              <p className="body-medium-tag neutral-80">77 Lectures</p>
            </div>
            <div>
              <Image src={language} alt="icon" />
              <p className="body-medium-tag neutral-80">Hinglish</p>
            </div>
          </div>
        </div>
        <div className="cp2-p1">
          <p className="body-medium-tag neutral-70">Access</p>
          <div className="cp2p1-div">
            <div>
              <Image src={laptop} alt="icon" />
              <p className="body-medium-tag neutral-80">
                Online at your own pace
              </p>
            </div>
            <div>
              <Image src={calender} alt="icon" />
              <p className="body-medium-tag neutral-80">
                Last Update : Apr 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
