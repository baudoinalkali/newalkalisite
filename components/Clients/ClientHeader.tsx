import Image from "next/image";
import { useRouter } from "next/router";
import clientMainPage from "../../content/clientPages/clientMainPage";
import CombinedNavigation from "../Navigation/CombinedNavigation";

const ClientHeader = (props) => {
  const router = useRouter();

  const headerBackgroundType = () => {
    return `${props.backgroundOverlay == "true" ? "client-hero" : ""}`;
  };

  const client = clientMainPage.find((c) => router.asPath.includes(c.slug));

  return (
    <section
      className={headerBackgroundType()}
      style={{
        backgroundImage: `url(${props.backgroundImg})`,
        backgroundColor: props.applyBackgroundOnScroll
          ? undefined
          : props.backgroundColor,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <CombinedNavigation
        headerColor="white"
        headerLogoColor="white"
        headerBackground={client.backgroundColor}
        applyBackgroundOnScroll
      />

      <div className="px-7">
        <div
          className={`max-w-7xl flex-col lg:flex-row flex justify-between items-center m-auto ${props.style}`}
        >
          <div className="w-full lg:w-1/2 2xl:mx-0">
            <p className="uppercase text-white font-medium">{props.sub}</p>
            <h1 className="text-6xl text-white font-bold pt-3 pb-10">
              {props.title}
            </h1>
            <div className="">
              <div className="flex flex-wrap">
                {props.services.map((serviceInfo) => (
                  <a href={serviceInfo.serviceSlug} className="mb-5">
                    <span
                      className="border border-white p-2 mr-7 rounded-md text-xs text-center text-white uppercase font-medium hover:bg-white hover:text-alkaligrey-800"
                      key={serviceInfo.service}
                    >
                      {serviceInfo.service}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:flex">
            <Image
              src={props.heroImage}
              width={props.heroImageWidth}
              height={props.heroImageHeight}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientHeader;
