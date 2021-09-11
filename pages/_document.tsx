import Document, { Html, Head, Main, NextScript } from "next/document";

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

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}');,
            });
          `,
            }}
          />


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
