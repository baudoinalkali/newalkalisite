import MobileDropdown from "./mobileDropdown";
import Image from "next/image";
import { Fragment } from "react";

const MobileNav = (props) => {
  const headerLogoColor = () => {
    return `${
      props.headerColor === "white"
        ? "/images/alkali-logo-white.svg"
        : "/images/alkali-logo-blue.svg"
    }`;
  };

  return (
    <Fragment>
      <nav>
        <div
          className={`max-w-7xl flex m-auto justify-between items-center px-7 py-7 fixed left-0 right-0 top-0 z-50 transition duration-300 ${
            props.scrolled ? "shadow-2xl" : ""
          } ${props.background}`}
          style={{
            backgroundColor: props.background,
            transform: "translateZ(0)", // Trigger hardware acceleration
          }}
        >
          <div className="">
            <a href="/">
              <Image
                src={`${headerLogoColor()}`}
                width={160}
                height={34}
                alt=""
              />
            </a>
          </div>
          <div className="">
            <MobileDropdown headerColor={props.headerColor} />
          </div>
        </div>
      </nav>
      <div className="h-24" />
    </Fragment>
  );
};

export default MobileNav;
