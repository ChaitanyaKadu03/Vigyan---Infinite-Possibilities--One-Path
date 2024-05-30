import '@styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import poster3 from '../../public/assets/course 3.png';

export const metadata = {
  title: 'Courses by Vigyan',
  description: `Explore our range of Advanced Physics courses tailored for Indian students aiming to excel in JEE exams. Get expert guidance from ex-IITians, comprehensive study materials, and proven strategies to master the JEE syllabus. Our courses are designed to provide the best platform for your JEE preparation journey, ensuring you achieve top ranks and secure a place in IIT.`,
  keywords:
    'JEE, JEE preparation, Advanced Physics, Physics course, JEE Physics, Indian students, JEE entrance exams, ex-IITian, best platform, IIT, Kota, best JEE coaching, Physics for JEE, Courses, Advanced Physics, JEE preparation, Indian students, Physics education, JEE exams',
  image: poster3
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
