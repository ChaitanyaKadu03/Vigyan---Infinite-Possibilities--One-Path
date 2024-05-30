import '@styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import img from '../public/assets/teacher-1.png';

export const metadata = {
  title: 'Vigyan - Infinite Possibilities, One Path',
  description: `Prepare for the JEE exams with our Advanced Physics course, designed specifically for Indian students. Dive deep into complex topics and master the skills needed to excel in one of India's toughest entrance exams. Our platform, led by ex-IITians, offers the best guidance, study materials, and strategies to help you succeed. Join the best platform for JEE preparation and achieve your dreams of getting into IIT.`,
  keywords:
    'JEE, JEE preparation, Advanced Physics, Physics course, JEE Physics, Indian students, JEE entrance exams, ex-IITian, best platform, IIT, Kota, best JEE coaching, Physics for JEE',
  image: img.src
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main className="main">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
