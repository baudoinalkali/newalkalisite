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
