import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import { Fragment } from "react";
import useFixFouc from "../hooks/useFixFouc";

function MyApp({ Component, pageProps }) {
  useFixFouc();

  return (
    <Fragment>
      <div>
        <Component {...pageProps} />
        <Footer />
        <CookieBanner />
      </div>
    </Fragment>
  );
}

export default MyApp;
