import '@styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Testimonials - Success Stories of JEE Achievers',
  description: `Read the success stories of Indian students who excelled in JEE exams with the help of our Advanced Physics course. Hear from our top performers about how our ex-IITian faculty from Kota helped them achieve their dreams. Join the best platform for JEE preparation and be inspired by the journeys of our successful students.`,
  keywords:
    'JEE, JEE preparation, Advanced Physics, Physics course, JEE Physics, Indian students, JEE entrance exams, Testimonials, Success stories, JEE achievers, Advanced Physics, JEE preparation, Indian students'
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
