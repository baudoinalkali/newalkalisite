import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'
import FACEBOOK_PIXEL_1 from './facebook/pixel-1'

class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="en-US"
      >
        <Head>
          {/* HubSpot Scripts */}
          <script
            src="/hubspot/cookiebanner.js"
            type="text/javascript"
            id="cookieBanner-20442125"
            data-cookieconsent="ignore"
            data-hs-ignore="true"
            data-loader="hs-scriptloader"
            data-hsjs-portal="20442125"
            data-hsjs-env="prod"
            data-hsjs-hublet="na1"
            async
            defer
          />

          <script
            src="/hubspot/analytics.js"
            type="text/javascript"
            id="hs-analytics"
            async
            defer
          />

          <script
            src="/hubspot/collectedforms.js"
            type="text/javascript"
            id="CollectedForms-20442125"
            crossOrigin="anonymous"
            data-leadin-portal-id="20442125"
            data-leadin-env="prod"
            data-loader="hs-scriptloader"
            data-hsjs-portal="20442125"
            data-hsjs-env="prod"
            data-hsjs-hublet="na1"
            async
            defer
          />

          <script
            src="/hubspot/conversations-embed.js"
            type="text/javascript"
            id="hubspot-messages-loader"
            data-loader="hs-scriptloader"
            data-hsjs-portal="20442125"
            data-hsjs-env="prod"
            data-hsjs-hublet="na1"
            async
            defer
          />

          <script
            async
            defer
            dangerouslySetInnerHTML={{
              __html: `window.hsConversationsSettings = { loadImmediately: false };`,
            }}
          />
          {/* End HubSpot Scripts */}


          {/* Prevent fouc (flash of unstyled component) and transition firing on load for firefox */}
          <style
            id="prevent-fouc"
            type="text/css"
            dangerouslySetInnerHTML={{
              __html: `
              .fix-fouc,
              .fix-fouc *,
              .fix-fouc *::before,
              .fix-fouc *::after {
                transition: none !important;
              }
              `,
            }}
          />
          <Script strategy="lazyOnload">
            {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '889391745098166');
        fbq('track', 'PageView');
      `}
          </Script>
          <FACEBOOK_PIXEL_1 />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Prevent fouc (flash of unstyled component) and transition firing on load for chrome & safari */}
          <script type="text/javascript">//</script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
