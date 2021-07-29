import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import HomeHero from '../components/HomeHero'
import SplitTextImageAlt from '../components/SplitTextImageAlt'
import SplitTextImage from '../components/SplitTextImage'
import ResponsiveScreens from '../components/ResponsiveScreens'
import Modal from '../components/Modal'
import Footer from '../components/Footer'
import DesktopNavigation from "../components/Navigation/DesktopNavigation";
import HomeTestimonialSlider from "../components/HomeTestimonialSlider";

export default function Home() {
  return (
    <div className="">
      <HomeHero />
      <div className="">
        <SplitTextImageAlt
          style="py-36 z-0"
          title="Our Commitment"
          image="/images/custom-built.png"
          text="Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum"
        />
      </div>
      <div className="">
        <h3 className="text-4xl pt-2 pb-16 font-bold text-center">What Our Clients Say</h3>
      </div>
      <section>
        <div className="grid grid-cols-3 gap-x-10">
          <div className="shadow-2xl rounded-md bg-white">
            <div className="p-10 py-14">
              Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.
            </div>
            <div className="flex px-10 py-7 items-center gap-x-10 rounded-b-md" style={{backgroundColor:"#07433f"}}>
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
            <div className="flex px-10 py-7 items-center gap-x-10 rounded-b-md" style={{backgroundColor:"#f9a8d4"}}>
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
            <div className="flex px-10 py-7 items-center gap-x-10 rounded-b-md" style={{backgroundColor:"#ff936b"}}>
              <div>
                <img width="90" src="/images/clients/ben/logo.svg" />
              </div>
              <div>
                Client Name
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-alkaligrey-300 pt-40 -mt-40">
      <h3 id="services" className="pt-40 pb-10 text-5xl font-bold text-center">Our Services</h3>
        <div className="services-home py-36 flex max-w-7xl space-x-10 justify-center m-auto">
          <a className="w-1/3 group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="">
            <img className="service-icon w-72 -mt-32 pb-4" src="/images/home-website.png" />
            <h3 className="group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">Web Design</h3>
            <p className="group-hover:text-white max-w-sm">
              Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <div className="flex mt-5 shadow-2xl border-2 p-3 rounded-full h-14 w-14 group-hover:w-40 flex items-center justify-center mx-auto">
              <p className="hidden group-hover:flex pr-3">Learn More</p><FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </a>
          <a className="w-1/3 group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="">
            <img className="service-icon w-72 -mt-32 pb-4" src="/images/home-seo.png" />
            <h3 className="group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">SEO</h3>
            <p className="group-hover:text-white max-w-sm">
              Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <div className="flex mt-5 shadow-2xl border-2 p-3 rounded-full h-14 w-14 group-hover:w-40 flex items-center justify-center mx-auto">
              <p className="hidden group-hover:flex pr-3">Learn More</p><FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </a>
          <a className="w-1/3 group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="">
            <img className="service-icon w-72 -mt-32 pb-4" src="/images/home-hosting.png" />
            <h3 className="group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">Hosting</h3>
            <p className="group-hover:text-white max-w-sm">
              Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <div className="flex mt-5 shadow-2xl border-2 p-3 rounded-full h-14 w-14 group-hover:w-40 flex items-center justify-center mx-auto">
              <p className="hidden group-hover:flex pr-3">Learn More</p><FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </a>
        </div>
        <div className="services-home py-36 pt-10 flex max-w-7xl space-x-10 justify-center m-auto">
          <a className="w-1/3 group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="">
            <img className="service-icon w-72 -mt-32 pb-4" src="/images/home-website.png" />
            <h3 className="group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">Web Design</h3>
            <p className="group-hover:text-white max-w-sm">
              Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <div className="flex mt-5 shadow-2xl border-2 p-3 rounded-full h-14 w-14 group-hover:w-40 flex items-center justify-center mx-auto">
              <p className="hidden group-hover:flex pr-3">Learn More</p><FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </a>
          <a className="w-1/3 group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="">
            <img className="service-icon w-72 -mt-32 pb-4" src="/images/home-seo.png" />
            <h3 className="group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">SEO</h3>
            <p className="group-hover:text-white max-w-sm">
              Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <div className="flex mt-5 shadow-2xl border-2 p-3 rounded-full h-14 w-14 group-hover:w-40 flex items-center justify-center mx-auto">
              <p className="hidden group-hover:flex pr-3">Learn More</p><FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </a>
          <a className="w-1/3 group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="">
            <img className="service-icon w-72 -mt-32 pb-4" src="/images/home-hosting.png" />
            <h3 className="group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">Hosting</h3>
            <p className="group-hover:text-white max-w-sm">
              Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <div className="flex mt-5 shadow-2xl border-2 p-3 rounded-full h-14 w-14 group-hover:w-40 flex items-center justify-center mx-auto">
              <p className="hidden group-hover:flex pr-3">Learn More</p><FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </a>
        </div>
      </div>
      <SplitTextImage
        style="bg-alkaligrey-300 pb-36"
        title="What We Stand For"
        image="/images/custom-built.png"
        text="Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum"
      />
      <div className="p-4 py-24 bg-alkali-500">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl m-auto mx-3 xl:mx-auto">
          <div><h3 className="text-4xl  font-bold max-w-7xl m-auto text-white leading-tight text-center mb-14 lg:mb-0">We're here to realize your vision.</h3></div>
          <div className="">
            <Modal
              style="p-3 px-6 font-semibold text-alkali-500 shadow-2xl rounded-md transition duration-500 ease-in-out bg-white hover:bg-alkali-700"
              text="Schedule a call"
            />
          </div>
        </div>
      </div>
      <div>
      </div>
      <SplitTextImage
        style="bg-alkaligrey-300 py-24"
        title="What We Stand For"
        image="../images/carro-before.png"
        text="At Alkali we value relationships over short-term profit. The greatest "
      />
      <div className="promise-modern triangleRightBottom triangleRightBottom--blue"></div>
      <div className="bg-alkali-500">
        <div className="py-24 flex items-center max-w-7xl m-auto">
          <div className="w-1/2"><h4 className=" text-white font-bold text-3xl text-center">Get a complimentary site audit</h4></div>
          <div className="flex w-1/2 justify-between items-center max-w-lg m-auto border-b pb-3">
            <div className="">
              <input className="border-none bg-transparent placeholder-white focus:outline-none text-white text-lg" type="text" placeholder="www.mycompany.com"></input>
            </div>
            <div className="group uppercase text-white font-bold">
              Request Free Audit <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}