import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import HomeHero from "../components/HomeHero";
import SplitTextImageAlt from "../components/SplitTextImageAlt";
import SplitTextImage from "../components/SplitTextImage";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import DesktopNavigation from "../components/Navigation/DesktopNavigation";
import Image from 'next/image'
import dynamic from 'next/dynamic';
const HomeTestimonialSlider = dynamic(() => import("../components/HomeTestimonialSlider"));
const HomeClientsSlider = dynamic(() => import("../components/HomeClientsSlider"));

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HomeHero />
      <div className="">
        <SplitTextImageAlt
          style="py-24 z-0"
          title="Our Commitment"
          image="/images/web-development/custom-built.svg"
          text="Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum"
        />
      </div>
      <div style={{ width: "500px" }} className="meetings-iframe-container" data-src="https://app.hubspot.com/meetings/nbaudoin?embed=true"></div>
      <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script>
      <div className="pt-36 bg-alkaligrey-300">
        <h3 className="text-5xl pt-2 pb-24 font-bold text-center">
          What Our Clients Say
        </h3>
      </div>
      <HomeTestimonialSlider />
      <div className="py-24 pt-64 -mt-40 bg-white">
        <h3
          id="services"
          className="pb-10 text-5xl font-bold text-center"
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
        image="/images/web-development/custom-built.svg"
        text="Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum"
      />
      <div className="p-4 py-36">
        <div className="flex flex-col lg:flex-row gap-x-20 justify-between items-center max-w-7xl m-auto mx-3 xl:mx-auto">
          <div className="w-1/2">
          <Image 
            src="/images/free-audit.svg"
            width={600}
            height={450}
          />
          </div>
          <div className="w-1/2">
            <h3 className="text-4xl md:text-5xl font-bold max-w-2xl leading-normal mb-14 lg:mb-0">
              Get a Complimentary Marketing Audit
            </h3>
            <p className="max-w-xl pt-10">
              Every successful engagement begins with an audit. Allow us to provide you a comprehensive audit 
              completely free of charge. Our digital marketing experts will examine your online presence and 
              provide you with insights. Main areas covered include:
            </p>
            <ul className="list-disc ml-5 mt-5 space-y-3">
              <li>Full website weview (content, CRO, performance)</li>
              <li>SEO: Comprehensive on-page audit</li>
              <li>Digital marketing/reputation management</li>
            </ul>
            <button className="mt-10 p-4 px-10 font-semibold text-white rounded-md hover:bg-alkali-700 hover:text-white transition duration-500 ease-in-out bg-alkali-500 border">
              Request Free Audit
            </button>
          </div>
        </div>
      </div>
      <div className="py-36 pb-0 bg-alkaligrey-300">
        <h3 className="text-5xl pt-2 pb-24 font-bold text-center">
          Our Clients
        </h3>
        <HomeClientsSlider />
      </div>
      <div className="bg-white pt-72 -mt-56 pb-36">
        <h3 className="text-5xl pt-2 pb-20 font-bold text-center">
          Some of Our Partners
        </h3>
        <div className="grid grid-cols-4 max-w-6xl m-auto gap-y-10">
          <img className="m-auto" src="/images/google-partner-logo.svg" />
          <img
            className="m-auto align-middle"
            src="/images/facebook-partner-logo.svg"
          />
          <img className="m-auto" src="/images/zapier-partner-logo.svg" />
          <img className="m-auto" src="/images/digitalocean-partner-logo.svg" />
          <img className="m-auto" src="/images/vercel-partner-logo.svg" />
          <img className="m-auto" src="/images/hubspot-partner.svg" />
          <img className="m-auto" src="/images/shopify-partner.svg" />
        </div>
      </div>
    </div>

  );
}
