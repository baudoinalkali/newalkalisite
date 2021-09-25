import "../styles/globals.css";
import CookieBanner from "../components/CookieBanner";
import { Fragment } from "react";
import { useEffect } from 'react';
import useFixFouc from "../hooks/useFixFouc";
import useInitHShChatbot from "../hooks/useInitHShChatbot";
import dynamic from "next/dynamic";
import TagManager from 'react-gtm-module';


const Footer = dynamic(() => import("../components/Footer"));

function FacebookPixel() {
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('889391745098166');
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}

function MyApp({ Component, pageProps }) {
  useFixFouc();
  useInitHShChatbot({ delayLoad: 5000 });
  useEffect(() => {
    TagManager.initialize({ gtmId: `${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}` });
  }, []);

  return (
    <Fragment>
      <FacebookPixel />
      <div>
        <Component {...pageProps} />
        <Footer />
        <CookieBanner />
      </div>
    </Fragment>
  );
}

export default MyApp;
