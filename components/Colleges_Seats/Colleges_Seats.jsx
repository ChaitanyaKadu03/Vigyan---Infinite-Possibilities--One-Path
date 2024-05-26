import React from 'react';
import './Colleges_Seats.css';
import img1 from '../../public/assets/college/1.png';
import img2 from '../../public/assets/college/2.png';
import img3 from '../../public/assets/college/3.png';
import img4 from '../../public/assets/college/4.png';
import img5 from '../../public/assets/college/5.png';
import img6 from '../../public/assets/college/6.png';
import img7 from '../../public/assets/college/7.png';
import img8 from '../../public/assets/college/8.png';
import img9 from '../../public/assets/college/9.png';
import Image from 'next/image';

const Colleges_Seats = () => {
  const colleges_img = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    { id: 8, img: img8 },
    { id: 9, img: img9 }
  ];

  return (
    <div className="colleges_seats">
      <h5 className="body-medium-tag">
        Colleges Our Students Have Secured Seats In
      </h5>
      <div>
        <span className="white-gradient-clg-to-r" />
        {colleges_img.map((data) => {
          return <Image key={data.id} src={data.img} alt="College Logo" />;
        })}
        {colleges_img.map((data) => {
          return <Image key={data.id} src={data.img} alt="College Logo" />;
        })}
        <span className="white-gradient-clg-to-l" />
      </div>
    </div>
  );
};

export default Colleges_Seats;
