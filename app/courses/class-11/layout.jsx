import '@styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import poster1 from '../../../public/assets/course 1.png'

export const metadata = {
  title: 'Class 11th - Physics Concept Course',
  description: `Lay a solid foundation in physics with key concepts and principles. Ideal for beginners and those looking to reinforce their basics.`,
  keywords:
    'JEE, JEE preparation, Advanced Physics, Physics course, JEE Physics, Indian students, JEE entrance exams, ex-IITian, best platform, IIT, Kota, best JEE coaching, Physics for JEE, Courses, Advanced Physics, JEE preparation, Indian students, Physics education, JEE exams',
  image: poster1
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
