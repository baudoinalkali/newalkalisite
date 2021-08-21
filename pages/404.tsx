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
import CombinedNavigation from "../components/Navigation/CombinedNavigation";
import TestimonialSlide from "../components/TestimonialSlide";
import ServiceBlocks from "../components/Services/ServiceBlocks";
import ServiceLeadSection from "../components/ServiceLeadSection";
import AboutContent from "../content/about";
import Image from 'next/image'

export default function Custom404() {
    return (
        <div>
            <CombinedNavigation />
            <section className="px-7 max-w-7xl m-auto py-64">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-1/2">
                        <h2 className="text-6xl md:text-7xl font-bold m-auto leading-tight pt-3">404</h2>
                        <p>We're sorry</p>
                    </div>
                    <div className="w-1/2">
                        <Image
                            src="/images/404.png"
                            width="600"
                            height="400"
                            quality={100}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
