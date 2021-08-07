import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import HomeHero from "../components/HomeHero";
import SplitTextImageAlt from "../components/SplitTextImageAlt";
import SplitTextImage from "../components/SplitTextImage";
import ResponsiveScreens from "../components/ResponsiveScreens";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import DesktopNavigation from "../components/Navigation/DesktopNavigation";
import HomeTestimonialSlider from "../components/HomeTestimonialSlider";
import HomeClientsSlider from "../components/HomeClientsSlider";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HomeHero />
      <div className="">
        <SplitTextImageAlt
          style="py-24 z-0"
          title="Our Commitment"
          image="/images/custom-built.png"
          text="Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum"
        />
      </div>
      <div className="bg-alkaligrey-300 py-24">
        <h3 className="text-5xl pt-2 pb-20 font-bold text-center">
          Some of Our Partners
        </h3>
        <div className="grid grid-cols-3 max-w-5xl m-auto gap-y-10">
          <img className="m-auto" src="/images/google-partner-logo.svg" />
          <img
            className="m-auto align-middle"
            src="/images/facebook-partner-logo.svg"
          />
          <img className="m-auto" src="/images/zapier-partner-logo.svg" />
          <img className="m-auto" src="/images/digitalocean-partner-logo.svg" />
          <img className="m-auto" src="/images/vercel-partner-logo.svg" />
        </div>
        <div className="flex justify-center pt-6">
          <p className={`mt-6 flex items-center`}>
            <a
              href={`/about/partners`}
              className="font-medium duration-500 hover:mr-3 text-alkaligrey-900"
            >
              {`Learn More`}
            </a>
            <FontAwesomeIcon
              className="ml-3 w-5 text-alkaligrey-900"
              icon={faLongArrowAltRight}
            ></FontAwesomeIcon>
          </p>
        </div>
      </div>
      <div className="pt-24">
        <h3 className="text-5xl pt-2 pb-20 font-bold text-center">
          What Our Clients Say
        </h3>
      </div>
      <HomeTestimonialSlider />
      <div className="pt-40 -mt-60">
        <h3
          id="services"
          className="pt-40 pb-10 text-5xl font-bold text-center"
        >
          Our Services
        </h3>
        <div className="services-home py-36 flex max-w-7xl space-x-10 justify-center m-auto">
          <a
            className="w-1/3 group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href=""
          >
            <img
              className="service-icon w-72 -mt-32 pb-4"
              src="/images/home-website.png"
            />
            <h3 className="group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">
              Web Design
            </h3>
            <p className="group-hover:text-white max-w-sm">
              Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem
              ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum
              Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem
              ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <div className="flex mt-5 border-2 p-3 rounded-full h-14 w-14 group-hover:w-40 flex items-center justify-center mx-auto">
              <p className="hidden group-hover:flex pr-3">Learn More</p>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </a>
          <a
            className="w-1/3 group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href=""
          >
            <img
              className="service-icon w-72 -mt-32 pb-4"
              src="/images/home-seo.png"
            />
            <h3 className="group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">
              SEO
            </h3>
            <p className="group-hover:text-white max-w-sm">
              Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem
              ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum
              Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem
              ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <div className="flex mt-5 border-2 p-3 rounded-full h-14 w-14 group-hover:w-40 flex items-center justify-center mx-auto">
              <p className="hidden group-hover:flex pr-3">Learn More</p>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </a>
          <a
            className="w-1/3 group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href=""
          >
            <img
              className="service-icon w-72 -mt-32 pb-4"
              src="/images/home-hosting.png"
            />
            <h3 className="group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">
              Hosting
            </h3>
            <p className="group-hover:text-white max-w-sm">
              Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem
              ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum
              Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem
              ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <div className="flex mt-5 border-2 p-3 rounded-full h-14 w-14 group-hover:w-40 flex items-center justify-center mx-auto">
              <p className="hidden group-hover:flex pr-3">Learn More</p>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </a>
        </div>
        <div className="services-home py-36 pt-10 flex max-w-7xl space-x-10 justify-center m-auto">
          <a
            className="w-1/3 group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href=""
          >
            <img
              className="service-icon w-72 -mt-32 pb-4"
              src="/images/home-website.png"
            />
            <h3 className="group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">
              Web Design
            </h3>
            <p className="group-hover:text-white max-w-sm">
              Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem
              ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum
              Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem
              ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <div className="flex mt-5 border-2 p-3 rounded-full h-14 w-14 group-hover:w-40 flex items-center justify-center mx-auto">
              <p className="hidden group-hover:flex pr-3">Learn More</p>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </a>
          <a
            className="w-1/3 group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href=""
          >
            <img
              className="service-icon w-72 -mt-32 pb-4"
              src="/images/home-seo.png"
            />
            <h3 className="group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">
              SEO
            </h3>
            <p className="group-hover:text-white max-w-sm">
              Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem
              ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum
              Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem
              ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <div className="flex mt-5 border-2 p-3 rounded-full h-14 w-14 group-hover:w-40 flex items-center justify-center mx-auto">
              <p className="hidden group-hover:flex pr-3">Learn More</p>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </a>
          <a
            className="w-1/3 group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href=""
          >
            <img
              className="service-icon w-72 -mt-32 pb-4"
              src="/images/home-hosting.png"
            />
            <h3 className="group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">
              Hosting
            </h3>
            <p className="group-hover:text-white max-w-sm">
              Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem
              ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum
              Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem
              ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <div className="flex mt-5 border-2 p-3 rounded-full h-14 w-14 group-hover:w-40 flex items-center justify-center mx-auto">
              <p className="hidden group-hover:flex pr-3">Learn More</p>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </a>
        </div>
      </div>
      <SplitTextImage
        style="bg-alkaligrey-300 py-24"
        title="What We Stand For"
        image="/images/custom-built.png"
        text="Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum"
      />
      <div className="p-4 py-24 bg-alkali-500">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl m-auto mx-3 xl:mx-auto">
          <div>
            <h3 className="text-4xl  font-bold max-w-7xl m-auto text-white leading-tight text-center mb-14 lg:mb-0">
              We're here to realize your vision.
            </h3>
          </div>
          <div className="">
            <Modal
              style="p-4 px-10 font-semibold text-white rounded-md hover:bg-white hover:text-alkali-500 transition duration-500 ease-in-out border-white border"
              text="Schedule a Call"
            />
          </div>
        </div>
      </div>
      <div className="py-24">
        <h3 className="text-5xl pt-2 pb-20 font-bold text-center">
          Our Clients
        </h3>
        <HomeClientsSlider />
      </div>
    </div>
  );
}
