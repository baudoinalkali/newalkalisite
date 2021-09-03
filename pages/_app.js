import "../styles/globals.css";
import CookieBanner from "../components/CookieBanner";
import { Fragment } from "react";
import useFixFouc from "../hooks/useFixFouc";
import useInitHShChatbot from "../hooks/useInitHShChatbot";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("../components/Footer"));

function MyApp({ Component, pageProps }) {
  useFixFouc();
  useInitHShChatbot({ delayLoad: 5000 });

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
