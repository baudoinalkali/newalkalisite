import Modal from "../../components/Modal";
import SiteMap from "../../content/siteMap";
import SiteMapContainer from "../../components/SiteMapContainer";
import Image from "next/image";
import SolutionsDropdown from "./SolutionsDropdown";
import AboutDropdown from "./AboutDropdown";
import { Fragment } from "react";

const DesktopNavigationDropDown = (props) => {
  const headerLogoColor = () => {
    return `${
      props.headerColor === "white"
        ? "/images/alkali-logo-white.svg"
        : "/images/alkali-logo-blue.svg"
    }`;
  };
  const headerCTAColor = () => {
    return `${
      props.headerColor === "white"
        ? "text-alkaligrey-800 bg-white hover:bg-alkaligrey-700"
        : "text-white bg-alkali-500 hover:bg-alkali-700"
    } p-3 px-6 font-semibold shadow-2xl rounded-md`;
  };
  const headerTopLevelColor = () => {
    return `${
      props.headerColor === "white"
        ? "text-white hover:text-alkaligrey-700"
        : "text-alkali-black hover:text-alkali-500"
    } text-md font-bold uppercase`;
  };

  return (
    <Fragment>
      <nav
        className={`fix-fouc fixed left-0 right-0 top-0 z-40 transition duration-500 px-7 ${
          props.scrolled ? "shadow-2xl py-6" : "py-10"
        } ${props.background}`}
        style={{
          backgroundColor: props.background,
          transform: "translateZ(0)", // Trigger hardware acceleration
        }}
      >
        <div className="max-w-7xl m-auto flex justify-between items-center">
          <a href="/">
            <Image 
              src={`${headerLogoColor()}`} 
              width="160"
              height="34"
              quality={100}
              priority={true}
            />
          </a>
          <div>
            <ul className={`flex justify-between gap-x-14 text-md font-bold`}>
              <li>
                <SolutionsDropdown headerColor={props.headerColor} />
              </li>
              <a href="/clients">
                <li
                  className={`duration-500 uppercase ${headerTopLevelColor()}`}
                >
                  Clients
                </li>
              </a>
              <li>
                <AboutDropdown headerColor={props.headerColor} />
              </li>
              <a href="/contact">
                <li
                  className={`duration-500 uppercase ${headerTopLevelColor()}`}
                >
                  Contact
                </li>
              </a>
            </ul>
          </div>
          <div>
            <Modal style={`${headerCTAColor()}`} text="Schedule a Call" />
          </div>
        </div>
      </nav>
      <div className="h-32" />
    </Fragment>
  );
};

export default DesktopNavigationDropDown;
