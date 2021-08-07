import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import DesktopNavigationTest from "./DesktopNavigationTest";
import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";

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
      background = "transparent";
    }
  }

  return (
    <div>
      <div className="contents lg:hidden">
        <MobileNavigation headerColor={headerColor} background={background} />
      </div>
      <div className="fixed hidden lg:contents">
        <DesktopNavigationTest
          headerColor={headerColor}
          background={background}
        />
      </div>
    </div>
  );
};

export default CombinedNavigation;
