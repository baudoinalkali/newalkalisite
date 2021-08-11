import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* HubSpot Scripts */}
          <script
            src="/hubspot/cookiebanner.js"
            type="text/javascript"
            id="cookieBanner-14539076"
            data-cookieconsent="ignore"
            data-hs-ignore="true"
            data-loader="hs-scriptloader"
            data-hsjs-portal="14539076"
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
            id="CollectedForms-14539076"
            crossOrigin="anonymous"
            data-leadin-portal-id="14539076"
            data-leadin-env="prod"
            data-loader="hs-scriptloader"
            data-hsjs-portal="14539076"
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
            data-hsjs-portal="14539076"
            data-hsjs-env="prod"
            data-hsjs-hublet="na1"
            async
            defer
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
