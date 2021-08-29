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
import Head from "next/head";

export default function Custom404() {
    return (
        <div>
            <Head>
                <title>Page Not Found | Alkali</title>
                <meta name="robots" content="noindex, follow" />
                <link rel="canonical" href="/" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Page Not Found | Alkali" />
                <meta property="og:url" content="/" />
                <meta property="og:site_name" content="Alkali" />
                <meta property="article:modified_time" content="2021-08-05T14:33:32+00:00" />
                <meta property="og:image" content="/images/facebook-image.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <CombinedNavigation headerBackground="bg-white" />
            <div className="px-7">
                <section className="max-w-7xl m-auto py-36 flex flex-col-reverse lg:flex-row items-center">
                    <div className="w-full lg:w-1/2 text-center lg:text-left ">
                        <h1 className="text-5xl md:text-6xl font-bold m-auto leading-tight">
                            404
                        </h1>
                        <h2 className="text-xl md:text-2xl font-bold m-auto leading-tight py-6">
                            Looks like there was a problem...
                        </h2>
                        <p className="text-lg pb-6 mx-auto lg:mx-0 max-w-md">
                            Sorry, but it doesn't seem like the page you are looking for exists. Please use the button below or the navigation above to find the page you're looking for.
                        </p>
                        <a href="/">
                            <button className="bg-alkali-500 hover:bg-alkali-700 duration-500 text-white p-3 px-10 font-semibold shadow-2xl rounded-md">
                                Go Home
                            </button>
                        </a>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <Image
                            src="/images/404.png"
                            width="600"
                            height="400"
                            quality={100}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
