import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-na1.hs-scripts.com/14539076.js"
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
          ></style>
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
