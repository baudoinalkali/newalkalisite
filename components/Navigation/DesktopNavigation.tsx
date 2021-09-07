import Modal from "../../components/Modal";
import SiteMap from "../../content/siteMap";
import SiteMapContainer from "../../components/SiteMapContainer";
import Image from "next/image";
import SolutionsDropdown from "./SolutionsDropdown";
import AboutDropdown from "./AboutDropdown";
import { Fragment } from "react";

const DesktopNavigation = (props) => {
  const headerLogoColor = () => {
    return `${props.headerColor === "white"
      ? "/images/alkali-logo-white.svg"
      : "/images/alkali-logo-blue.svg"
      }`;
  };
  const headerCTAColor = () => {
    return `${props.headerColor === "white"
      ? "text-alkaligrey-800 bg-white hover:bg-alkaligrey-700"
      : "text-white bg-alkali-500 hover:bg-alkali-700"
      } p-3 px-6 font-semibold shadow-2xl rounded-md duration-500`;
  };
  const headerTopLevelColor = () => {
    return `${props.headerColor === "white"
      ? "text-white hover:border-b hover:border-white"
      : "text-alkali-black hover:border-b hover:border-black"
      } text-md font-bold`;
  };

  return (
    <Fragment>
      <nav
        className={`fix-fouc fixed left-0 right-0 top-0 z-40 transition duration-500 ${props.scrolled ? "shadow-2xl py-6" : "py-10"
          } ${props.background}`}
        style={{
          backgroundColor: props.background,
          transform: "translateZ(0)", // Trigger hardware acceleration
        }}
      >
        <div className="px-7">
          <div className="max-w-7xl m-auto flex justify-between items-center">
            <a className="mt-2" href="/">
              <Image
                src={`${headerLogoColor()}`}
                width="160"
                height="34"
                alt="Alkali Digital Marketing"
                quality={100}
                priority={true}
              />
            </a>
            <div>
              <ul className={`flex justify-between gap-x-14 font-bold`}>
                <li>
                  <SolutionsDropdown headerColor={props.headerColor} />
                </li>
                <a href="/clients/">
                  <li
                    className={`text-lg duration-500 hover:opacity-50 ${headerTopLevelColor()}`}
                  >
                    Clients
                  </li>
                </a>
                <li>
                  <a href="/about/">
                    <li
                      className={`text-lg duration-500 hover:opacity-50 ${headerTopLevelColor()}`}
                    >
                      About
                    </li>
                  </a>
                </li>
                <a href="/contact/">
                  <li
                    className={`text-lg duration-500 hover:opacity-50 ${headerTopLevelColor()}`}
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
        </div>
      </nav>
      <div className="h-32" />
    </Fragment>
  );
};

export default DesktopNavigation;
