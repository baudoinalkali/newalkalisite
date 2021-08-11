import "../styles/globals.css";
import CookieBanner from "../components/CookieBanner";
import { Fragment } from "react";
import useFixFouc from "../hooks/useFixFouc";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("../components/Footer"));


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
