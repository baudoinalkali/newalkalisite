import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

const CookieBanner = (props) => {
  const { prompDelay = 3000 } = props;

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (Cookies.get("__responded_to_alkali_consent__")) return;

      setShow(true);
    }, prompDelay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleCookie = (allowCookie) => {
    Cookies.set("__responded_to_alkali_consent__", "true");
    Cookies.set("__allow_alkali_cookie__", allowCookie);
    setShow(false);
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 pt-5 pb-5 transform-gpu translate-y-100 transition-all duration-700 bg-alkali-500 text-white z-40"
      style={{ transform: show ? "translateY(0)" : "translateY(200%)" }}
    >
      <div className="max-w-7xl px-4 w-full mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
        <p className="max-w-md md:max-w-lg">
          Allow tracking of my activity on{" "}
          <Link href="/" passHref>
            <a className="underline">Alkali</a>
          </Link>{" "}
          to help improve this website. Understand more in our{" "}
          <Link href="/privacy-policy" passHref>
            <a className="underline">Privacy Policy</a>
          </Link>
          .
        </p>

        {/* Actons */}
        <div className="mt-4 sm:mt-0">
          <button
            className="bg-transparent p-3 px-6 font-semibold rounded-md mr-4"
            onClick={handleCookie.bind(this, false)}
          >
            No
          </button>
          <button
            className="text-alkaligrey-800 bg-white hover:bg-alkaligrey-700 p-3 px-6 font-semibold shadow-2xl rounded-md"
            onClick={handleCookie.bind(this, true)}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
