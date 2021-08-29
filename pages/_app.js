import "../styles/globals.css";
import CookieBanner from "../components/CookieBanner";
import { Fragment } from "react";
import useFixFouc from "../hooks/useFixFouc";
import useInitHShChatbot from "../hooks/useInitHShChatbot";
import dynamic from "next/dynamic";
import Head from "next/head"
const Footer = dynamic(() => import("../components/Footer"));

function MyApp({ Component, pageProps }) {
  useFixFouc();
  useInitHShChatbot({ delayLoad: 5000 });

  return (
    <Fragment>
      <div>
        <Head>
          <html lang="en-US" />
          <head itemscope itemtype="https://schema.org/WebSite" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name='robots' content='max-image-preview:large' />
        </Head>
        <Component {...pageProps} />
        <Footer />
        <CookieBanner />
      </div>
    </Fragment>
  );
}

export default MyApp;
