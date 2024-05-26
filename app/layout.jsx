import '@styles/globals.css';
import icon from './favicon.ico';

export const metadata = {
  title: 'Vigyan - Infinite Possibilities, One Path',
  description: 'Hello Everyone'
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
        <main className="main">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
