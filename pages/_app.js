import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default MyApp;
