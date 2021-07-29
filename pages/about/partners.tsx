import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import HomeHero from '../../components/HomeHero'
import SplitTextImageAlt from '../../components/SplitTextImageAlt'
import SplitTextImage from '../../components/SplitTextImage'
import ResponsiveScreens from '../../components/ResponsiveScreens'
import Modal from '../../components/Modal'
import Footer from '../../components/Footer'
import DesktopNavigation from "../../components/Navigation/DesktopNavigation";
import HomeTestimonialSlider from "../../components/HomeTestimonialSlider";
import CombinedNavigation from "../../components/Navigation/CombinedNavigation";
import TestimonialSlide from "../../components/TestimonialSlide";
import ServiceBlocks from "../../components/Services/ServiceBlocks";
import ServiceLeadSection from "../../components/ServiceLeadSection";

export default function About() {
  return (
    <div className="">
      <div className="bg-alkaligrey-300">
        <CombinedNavigation />
        <div className="py-36 flex text-center justify-center z-20">
          <div className="relative z-20">
            <h1 className="text-alkaligrey-800 font-bold pt-5 text-4xl md:text-6xl lg:text-7xl max-w-6xl">Partners</h1>
            <p className="text-white py-10 text-alkaligrey-800 max-w-2xl m-auto text-xl lg:text-2xl">We've formed strategic partnerships to provide the most value to our clients. Learn more about these below.</p>
          </div>
        </div>
      </div>
      <div className="">
        <SplitTextImageAlt
          style="py-36 z-0"
          title="Our Commitment"
          image="/images/custom-built.png"
          text="Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum"
        />
      </div>
      <div className="bg-alkaligrey-300 py-36">
        <h6 className="text-4xl md:text-5xl text-center font-bold m-auto leading-tight pb-20">Core Values</h6>
        <div className="grid grid-cols md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto gap-x-14 gap-y-14 pb-40">
          <ServiceBlocks
            serviceTitle="Test"
            serviceText="Test"
            image="/images/alkali-icon-blue.svg"
            altText="test"
          />
          <ServiceBlocks
            serviceTitle="Test"
            serviceText="Test"
            image="/images/alkali-icon-blue.svg"
            altText="test"
          />
          <ServiceBlocks
            serviceTitle="Test"
            serviceText="Test"
            image="/images/alkali-icon-blue.svg"
            altText="test"
          />
          <ServiceBlocks
            serviceTitle="Test"
            serviceText="Test"
            image="/images/alkali-icon-blue.svg"
            altText="test"
          />
          <ServiceBlocks
            serviceTitle="Test"
            serviceText="Test"
            image="/images/alkali-icon-blue.svg"
            altText="test"
          />
          <ServiceBlocks
            serviceTitle="Test"
            serviceText="Test"
            image="/images/alkali-icon-blue.svg"
            altText="test"
          />
        </div>
        <div className="px-7 -mb-80">
          <TestimonialSlide
            style="max-w-7xl m-auto shadow-2xl rounded-md"
            brandColor="#00baff"
            background="/images/clients/bobtail/slide-bg.jpg"
            company="Alkali Designs"
            logo="/images/alkali-logo-white.svg"
            logoWidth={160}
            logoHeight={35}
            altText="test"
            name="Nick Baudoin, Owner"
            quote="Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial."
          />
        </div>
      </div>
      <div className="pt-80">
        <h3 className="text-4xl md:text-5xl pt-2 pb-24 font-bold text-center">Don't Just Take Our Word For It</h3>
      </div>
      <section className="">
        <div className="grid grid-cols-3 gap-x-10 mb-36">
          <div className="shadow-2xl rounded-md bg-white">
            <div className="p-10 py-14">
              Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.
            </div>
            <div className="flex px-10 py-7 items-center gap-x-10 rounded-b-md" style={{ backgroundColor: "#07433f" }}>
              <div>
                <img src="/images/clients/bobtail/logo.svg" />
              </div>
              <div className="text-white">
                Client Name
              </div>
            </div>
          </div>
          <div className="shadow-2xl rounded-md bg-white">
            <div className="p-10 py-14">
              Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.
            </div>
            <div className="flex px-10 py-7 items-center gap-x-10 rounded-b-md" style={{ backgroundColor: "#f9a8d4" }}>
              <div>
                <img width="90" src="/images/clients/carro/logo.svg" />
              </div>
              <div className="text-white">
                Client Name
              </div>
            </div>
          </div>
          <div className="shadow-2xl rounded-md bg-white">
            <div className="p-10 py-14">
              Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.
            </div>
            <div className="flex px-10 py-7 items-center gap-x-10 rounded-b-md" style={{ backgroundColor: "#ff936b" }}>
              <div>
                <img width="90" src="/images/clients/ben/logo.svg" />
              </div>
              <div>
                Client Name
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 lg:w-full m-auto bg-alkali-500 py-24 mb-24">
          <h5 className="text-4xl text-center text-white font-bold m-auto leading-tight">Your Next Adventure is Waiting</h5>
          <p className="text-white pt-7 pb-10 text-center max-w-md m-auto text-lg font-normal">If our values align with yours, we'd love to connect. Check out our open positions.</p>
          <div className="flex justify-center">
            <button className="p-4 px-6 font-semibold text-white hover:text-alkali-500 hover:bg-white rounded-md transition duration-500 ease-in-out border border-white">
              See Open Positions
            </button>
          </div>
        </div>
      </section>
    </div>

  )
}