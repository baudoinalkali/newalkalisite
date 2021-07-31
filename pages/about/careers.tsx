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
        <div className="py-20 flex text-center justify-center z-20">
          <div className="relative z-20">
            <h1 className="text-alkaligrey-800 font-bold pt-5 text-5xl lg:text-6xl max-w-6xl">Careers</h1>
            <p className="text-white py-10 text-alkaligrey-800 max-w-2xl m-auto text-xl lg:text-2xl">If you're looking for your next adventure, check out our open positions below.</p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl m-auto py-36 px-7">
        <div className="border-b pb-14 mb-14">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center">
                <div className="text-2xl md:text-3xl font-medium">
                  Account Manager
                </div>
                <div className="bg-alkaligrey-300 text-alkaligrey-400 px-4 py-2 rounded-full ml-10">
                  Digital Marketing
                </div>
              </div>
              <div className="text-lg font-bold pt-4 uppercase">
                Remote
              </div>
            </div>
            <button className="text-white bg-alkali-500 hover:bg-alkali-700 px-10 h-12 font-semibold rounded-md">
              Learn More
            </button>
          </div>
          <div className="pt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi urna, consectetur sit amet urna eget, blandit vestibulum mi. Vivamus hendrerit dapibus sapien ac hendrerit. Aenean consequat ultrices libero id rutrum. Suspendisse interdum justo at sollicitudin rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum rhoncus luctus tellus a tristique. Aenean hendrerit sapien et hendrerit laoreet. Etiam convallis pharetra risus, eget accumsan est congue nec. In porta ipsum vitae euismod sodales. Fusce volutpat scelerisque odio eu aliquet.</div>
        </div>
        <div className="border-b pb-14 mb-14">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center">
                <div className="text-2xl md:text-3xl font-medium">
                  Account Manager
                </div>
                <div className="bg-alkaligrey-300 text-alkaligrey-400 px-4 py-2 rounded-full ml-10">
                  Digital Marketing
                </div>
              </div>
              <div className="text-lg font-bold pt-4 uppercase">
                Remote
              </div>
            </div>
            <button className="text-white bg-alkali-500 hover:bg-alkali-700 px-10 h-12 font-semibold rounded-md">
              Learn More
            </button>
          </div>
          <div className="pt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi urna, consectetur sit amet urna eget, blandit vestibulum mi. Vivamus hendrerit dapibus sapien ac hendrerit. Aenean consequat ultrices libero id rutrum. Suspendisse interdum justo at sollicitudin rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum rhoncus luctus tellus a tristique. Aenean hendrerit sapien et hendrerit laoreet. Etiam convallis pharetra risus, eget accumsan est congue nec. In porta ipsum vitae euismod sodales. Fusce volutpat scelerisque odio eu aliquet.</div>
        </div>
        <div className="border-b pb-14 mb-14">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center">
                <div className="text-2xl md:text-3xl font-medium">
                  Account Manager
                </div>
                <div className="bg-alkaligrey-300 text-alkaligrey-400 px-4 py-2 rounded-full ml-10">
                  Digital Marketing
                </div>
              </div>
              <div className="text-lg font-bold pt-4 uppercase">
                Remote
              </div>
            </div>
            <button className="text-white bg-alkali-500 hover:bg-alkali-700 px-10 h-12 font-semibold rounded-md">
              Learn More
            </button>
          </div>
          <div className="pt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi urna, consectetur sit amet urna eget, blandit vestibulum mi. Vivamus hendrerit dapibus sapien ac hendrerit. Aenean consequat ultrices libero id rutrum. Suspendisse interdum justo at sollicitudin rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum rhoncus luctus tellus a tristique. Aenean hendrerit sapien et hendrerit laoreet. Etiam convallis pharetra risus, eget accumsan est congue nec. In porta ipsum vitae euismod sodales. Fusce volutpat scelerisque odio eu aliquet.</div>
        </div>
      </div>
    </div>

  )
}