import '@styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import img from '../../public/assets/teacher-1.png';

export const metadata = {
  title: 'About Us - Advanced Physics for JEE',
  description: `Learn more about our mission to help Indian students excel in JEE exams through comprehensive Advanced Physics courses and expert-led lectures. Our team of ex-IITians from Kota provides the best platform for JEE preparation, ensuring personalized attention and the highest quality education. Discover how we are making a difference in the lives of aspiring IITians.`,
  keywords:
    'JEE, JEE preparation, Advanced Physics, Physics course, JEE Physics, Indian students, JEE entrance exams, ex-IITian, best platform, IIT, Kota, best JEE coaching, Physics for JEE, About us, Advanced Physics, JEE preparation, Indian students, Physics education, JEE exams',
  image: img
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
