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
      ? "#ffffff"
      : "#00baff"
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
            <a className="" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="160" height="35" viewBox="0 0 160 35" fill="none">
                <path d="M0 33.7382L13.5912 0H17.9617L31.5065 33.7382H25.8518L22.2394 24.5678H9.22064L5.7049 33.7382H0ZM15.7726 5.94083L10.1644 20.6227H21.1874L15.7726 5.94083Z" fill={`${headerLogoColor()}`} />
                <path d="M35.5908 33.7382V0H40.9128V29.035H59.0176V33.7382H35.5908Z" fill={`${headerLogoColor()}`} />
                <path d="M72.9179 17.9617L67.6423 23.4732V33.7382H62.3203V0.0464108H67.6423V17.6291L83.7048 0H89.4056L72.9179 17.9617ZM77.9575 17.4357L90.168 33.7382H84.4168L74.9291 20.7233L77.9575 17.4357Z" fill={`${headerLogoColor()}`} />
                <path d="M93.4751 33.7382L107.066 0H111.437L124.981 33.7382H119.327L115.714 24.5678H102.696L99.1799 33.7382H93.4751ZM109.251 5.94083L103.643 20.6227H114.666L109.251 5.94083Z" fill={`${headerLogoColor()}`} />
                <path d="M128.134 33.7382V0H133.456V29.035H151.561V33.7382H128.134Z" fill={`${headerLogoColor()}`} />
                <path d="M154.678 33.7386V0.046875H160V33.7386H154.678Z" fill={`${headerLogoColor()}`} />
              </svg>
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
