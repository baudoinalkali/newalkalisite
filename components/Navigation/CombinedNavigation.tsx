import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";

const NON_SCROLLED_HEADER_BACKGROUND = "transparent";

const CombinedNavigation = (props) => {
  const {
    headerColor = "",
    headerBackground = "",
    applyBackgroundOnScroll = false,
  } = props;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function detectScroll() {
      if (window.pageYOffset > 96) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    document.addEventListener("scroll", detectScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", detectScroll);
    };
  }, []);

  let background = headerBackground;
  if (applyBackgroundOnScroll) {
    if (scrolled) {
      background = headerBackground;
    } else {
      background = NON_SCROLLED_HEADER_BACKGROUND;
    }
  }

  return (
    <div>
      <div className="contents lg:hidden">
        <MobileNavigation
          headerColor={headerColor}
          background={background}
          scrolled={scrolled}
        />
      </div>
      <div className="fixed hidden lg:contents">
        <DesktopNavigation
          headerColor={headerColor}
          background={background}
          scrolled={scrolled}
        />
      </div>
    </div>
  );
};

export default CombinedNavigation;
