import SplitTextImageAlt from "../components/SplitTextImageAlt";
import CombinedNavigation from "../components/Navigation/CombinedNavigation";
import ServiceBlocks from "../components/Services/ServiceBlocks";
import ServiceLeadSection from "../components/ServiceLeadSection";
import AboutContent from "../content/about";
import dynamic from 'next/dynamic';
const TestimonialSlide = dynamic(() => import("../components/TestimonialSlide"));
const ClientTestimonialSlide = dynamic(() => import("../components/HomeClientsSlider"));

import ServiceImage from "../components/Services/ServiceImage";
import StandardTextBlock from "../components/StandardTextBlock";
import TwoColumnLayout from "../components/TwoColumnLayout";
import Head from "next/head";
import HomeClientsSlider from "../components/HomeClientsSlider";
import HomeClientSliderMobile from "../components/HomeClientsSliderMobile";

export default function About() {

  const aboutImage1 = (
    <ServiceImage
      image="/images/about-evolving.svg"
      height="431"
      width="575"
    />
  )

  const aboutText1 = (
    <StandardTextBlock
      title="Constantly Evolving"
      text="Alkali, formerly Alkali Designs, was founded in 2015 as a 
      web design and development company. Over the years, we have expanded our 
      service offerings to meet the needs of our clients. We pride ourselves on being technology 
      and marketing experts that are deeply client-oriented. We strive to bring our diverse experiences 
      and knowledge to every client engagement, providing the best possible outcome. We have the technology 
      and marketing experience to bring your vision to life and the commitment to client satisfaction to leave 
      no stone unturned while doing so."
    />
  )

  const aboutImage2 = (
    <ServiceImage
      image="/images/what-we-do.svg"
      height="412"
      width="550"
    />
  )

  const aboutText2 = (
    <StandardTextBlock
      title="Why we do what we do"
      text="At our core, we genuinely believe that for a business to succeed, 
      they need to have a well-rounded online presence. We don’t look at our services 
      as one-off tasks that need to get checked off for a business to succeed. When a 
      potential client comes to us and says they need help, we don’t say yes and start 
      working. Instead, we spend the time to gain a deep understanding of their business, 
      their struggles, and goals, and we proceed with those front and center. Our solutions 
      have the opportunity to drastically impact a business for the better, and we do everything 
      we can to make sure they do."
    />
  )

  return (
    <div className="overflow-hidden">
      <Head>
        <title>About Alkali | Learn How and Why We Serve </title>
        <meta name="description" content="Learn more about what Alkali stands for, our mission, and the commitment to our clients that drives us." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Alkali" />
        <meta property="og:description" content="Learn more about what Alkali stands for, our mission, and the commitment to our clients that drives us." />
        <meta property="og:url" content="/" />
        <meta property="og:site_name" content="Alkali" />
        <meta property="article:modified_time" content="2021-08-05T14:33:32+00:00" />
        <meta property="og:image" content="/images/facebook-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="bg-alkaligrey-300">
        <CombinedNavigation headerBackground="bg-alkaligrey-300" />
        <div className="py-20 flex text-center justify-center z-20 px-7">
          <div className="relative z-20">
            <h1 className="text-alkaligrey-800 font-bold pt-5 text-5xl lg:text-6xl max-w-6xl">
              About Alkali
            </h1>
            <p className="text-white py-10 text-alkaligrey-800 max-w-xl m-auto text-lg lg:text-xl">
              Learn more about Alkali and the values that drive us to deliver
              for our clients, partners, and team.
            </p>
          </div>
        </div>
      </div>
      <TwoColumnLayout
        style="py-24"
        child1={aboutImage1}
        child2={aboutText1}
      />
      <div className="bg-alkaligrey-300 py-24">
        <div className="px-7 pb-36 2xl:px-0">
          <h6 className="text-4xl md:text-5xl text-center font-bold m-auto leading-tight pb-20">
            Core Values
          </h6>
          <div className="grid grid-cols md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto gap-x-14 gap-y-14">
            {AboutContent.values.map((values) => (
              <ServiceBlocks
                serviceTitle={values.serviceTitle}
                serviceText={values.serviceText}
                image={values.image}
                altText={values.altText}
              />
            ))}
          </div>
        </div>
        <div className="px-7 -mb-64">
          <TestimonialSlide
            style="max-w-7xl m-auto shadow-2xl rounded-md"
            brandColor="#00baff"
            background="/images/about-testimonial-bg.jpg"
            company="Alkali Designs"
            logo="/images/alkali-logo-white.svg"
            slug="/"
            logoWidth={160}
            logoHeight={35}
            altText="test"
            name="Nick Baudoin, Owner"
            quote="Our mission is to gain a deep understanding of your business so that we can serve you best. We value long-lasting relationships and take immense pride in contributing to our client's online success."
          />
        </div>
      </div>
      <div className="pt-56">
        <TwoColumnLayout
          child1={aboutImage2}
          child2={aboutText2}
        />
      </div>
      <section className="py-24 pb-10 bg-alkaligrey-300">
        <div className="">
          <h3 className="text-4xl md:text-5xl pt-2 pb-10 lg:pb-24 font-bold text-center">
            Don't Just Take Our Word For It
          </h3>
        </div>
        <div className="">
          <div className="hidden lg:contents">
            <HomeClientsSlider />
          </div>
          <div className="lg:hidden mt-10 bg-alkaligrey-300">
            <HomeClientSliderMobile />
          </div>
        </div>
      </section>
      {/* <section className="">
        <div className="w-5/6 lg:w-full m-auto py-24 mb-24">
          <h5 className="text-4xl text-center font-bold m-auto leading-tight">
            Your Next Adventure is Waiting
          </h5>
          <p className="pt-7 pb-10 text-center max-w-md m-auto text-lg font-normal">
            If our values align with yours, we'd love to connect. Check out our
            open positions.
          </p>
          <div className="flex justify-center">
            <button className="p-4 px-6 font-semibold text-alkali-500 hover:text-white hover:bg-alkali-500 rounded-md transition duration-500 ease-in-out border border-alkali-500">
              See Open Positions
            </button>
          </div>
        </div>
      </section> */}
      <style global jsx>{`
        .footer {
          background: #f8f8f8;
        }
      `}</style>
    </div>
  );
}
