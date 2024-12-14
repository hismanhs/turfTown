// pages/_app.js
import Head from 'next/head';  // Import Head component to include external resources like fonts
import '../styles/global.css' // Import any global CSS file if needed

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Add Google Fonts link to load Nunito font */}
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap"
        />
      </Head>

      {/* Apply global styles */}
      <style jsx global>{`
        html, body {
          margin: 0;
          font-family: 'Nunito', sans-serif;
        }

        /* Additional global styles */
        * {
          box-sizing: border-box;
        }
      `}</style>

      {/* This renders the page component */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
