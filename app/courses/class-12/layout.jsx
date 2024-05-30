import '@styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import poster2 from '../../../public/assets/course 2.png'

export const metadata = {
  title: 'Class 12th - Physics Concept Course',
  description: `Explore the essentials of electric charges and forces, and learn how electric fields are created and manipulated.`,
  keywords:
    'JEE, JEE preparation, Advanced Physics, Physics course, JEE Physics, Indian students, JEE entrance exams, ex-IITian, best platform, IIT, Kota, best JEE coaching, Physics for JEE, Courses, Advanced Physics, JEE preparation, Indian students, Physics education, JEE exams',
  image: poster2
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
