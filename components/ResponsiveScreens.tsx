import Image from "next/image";

const ResponsiveScreens = (props) => {
  return (
    <div className={`text-center ${props.style} overflow-hidden px-7`}>
      <h3 className="text-center text-4xl md:text-5xl font-bold max-w-4xl m-auto mb-10 leading-normal">
        First Impressions Matter Experience Their Website For Yourself
      </h3>
      <a href={props.link} className="">
        <button className="p-3 px-12 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-600 transform hover:-translate-y-1 hover:scale-110">
          {props.buttonName}
        </button>
      </a>
      <div id="arrow-container-container">
        <div id="arrow-container">
          <div className="p-4 flex justify-between items-center max-w-7xl m-auto">
            <div className="screenshot-container mx-3">
              <a href={props.desktopLeftLink}>
                <div
                  className="-mb-10 rounded-md screenshot-d shadow-2xl duration-500 transform -rotate-45 -translate-x-24 hover:-translate-y-1 hover:scale-110"
                  style={{ fontSize: "0" }}
                >
                  <Image
                    className="rounded-md"
                    src={props.desktopLeft}
                    alt=""
                    width={600}
                    height={450}
                    quality={100}
                  />
                </div>
              </a>
            </div>
            <div className="screenshot-container mx-3 mb-4">
              <a href={props.desktopRightLink}>
                <div
                  className="rounded-md screenshot-d-alt shadow-2xl duration-500 transform rotate-45 translate-x-24 translate-y-3 hover:-translate-y-1 hover:scale-110"
                  style={{ fontSize: "0" }}
                >
                  <Image
                    className="rounded-md"
                    src={props.desktopRight}
                    alt=""
                    width={600}
                    height={450}
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="p-4 flex justify-between items-center max-w-7xl m-auto">
            <div className="screenshot-container w-2/3 mx-3">
              <a href={props.tabletLink}>
                <div
                  className="screenshot-t w-96 shadow-2xl duration-500 transform -rotate-45 -translate-x-21 hover:-translate-y-1 hover:scale-110"
                  style={{ fontSize: "0" }}
                >
                  <Image
                    className=""
                    src={props.tablet}
                    alt=""
                    width={384}
                    height={580}
                  />
                </div>
              </a>
            </div>
            <div className="text-center screenshot-container w-1/3 mx-3">
              <a href={props.phoneLink}>
                <div
                  className="rounded-md screenshot-p w-52 shadow-2xl duration-500 transform -rotate-45 -translate-x-21 hover:-translate-y-1 hover:scale-110"
                  style={{ fontSize: "0" }}
                >
                  <Image
                    className="rounded-md"
                    src={props.phone}
                    alt=""
                    width={208}
                    height={585.28}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResponsiveScreens;
