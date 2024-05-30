import '@styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'FAQs - Advanced Physics for JEE Preparation',
  description: `Find answers to frequently asked questions about our Advanced Physics course and how it helps Indian students prepare for JEE exams. Learn more about our teaching methodology, the benefits of studying with ex-IITians, and why our platform is the best choice for JEE aspirants from Kota and beyond.`,
  keywords:
    'JEE, JEE preparation, Advanced Physics, Physics course, JEE Physics, Indian students, JEE entrance exams, FAQs, Frequently Asked Questions, JEE preparation, Advanced Physics, Indian students, JEE exams'
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
