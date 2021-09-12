import HomeHero from "../components/HomeHero";
import AuditSection from "../components/Services/AuditSection";
import dynamic from "next/dynamic";
import TwoColumnLayout from "../components/TwoColumnLayout";
import ServiceImage from "../components/Services/ServiceImage";
import StandardTextBlock from "../components/StandardTextBlock";
import Head from "next/head";
import HomeTestimonialSliderMobile from "../components/HomeTestimonialSliderMobile";
import HomeClientSliderMobile from "../components/HomeClientsSliderMobile";
const HomeTestimonialSlider = dynamic(
  () => import("../components/HomeTestimonialSlider")
);
const HomeClientsSlider = dynamic(
  () => import("../components/HomeClientsSlider")
);

const contentSection1Image = [
  <ServiceImage
    image="/images/building-presence.svg"
    imageAngle="none"
    width="600"
    height="450"
  />,
];

const contentSection1Text = [
  <StandardTextBlock
    title="Maximizing Your Digital Presence"
    titleLength="max-w-md"
    text="Creating, managing, and marketing your businesses' online presence can seem like an impossible task, but that's where we come in. At Alkali, we take the time to understand your business to help you succeed online. So while we maximize your online presence, you can focus on growing your business. Rest assured that your digital presence is safe in our hands (or keyboards)."
  />,
];

const contentSection2Image = [
  <ServiceImage
    image="/images/reach-goals.svg"
    imageAngle="none"
    width="600"
    height="450"
  />,
];

const contentSection2Text = [
  <StandardTextBlock
    title="Helping You Succeed"
    text="At the start of every customer interaction, we look for ways to help your business succeed online. Whether you have an existing online presence or are starting from scratch, we strive to gain a deep understanding of your short and long-term goals so that we can assist you in the best way possible. This dedication enables us to provide you guidance that will have a long-lasting impact. We are here to see you succeed, and we take our role of helping you do so very seriously."
  />,
];

const ServicesHome = [
  {
    icon: "/images/icons/search-engine-optimization.svg",
    altText: "Test",
    serviceName: "SEO",
    serviceDescription:
      "From keyword research to on-site and off-site SEO, we drive organic traffic to your business.",
    slug: "/solutions/digital-marketing/search-engine-optimization/",
  },
  {
    icon: "/images/icons/wordpress-website-development.svg",
    altText: "Test",
    serviceName: "WordPress Development",
    serviceDescription:
      "Crafting digital experiences that showcase your business and brand through an easy to maintain and scale platform.",
    slug: "/solutions/web-development/wordpress-website-development/",
  },
  {
    icon: "/images/icons/pay-per-click-advertising.svg",
    altText: "Test",
    serviceName: "PPC & Retargeting",
    serviceDescription:
      "Target your ideal customer and get results immediately. Our campaigns ensure every dollar is maximized.",
    slug: "/solutions/digital-marketing/pay-per-click-advertising/",
  },
  {
    icon: "/images/icons/ecommerce-website-development.svg",
    altText: "Test",
    serviceName: "E-commerce Development",
    serviceDescription:
      "Whether it be Shopif, WooCommerce, BigCommerce, or Magento, we best position you to sell one.",
    slug: "/solutions/web-development/ecommerce-website-development/",
  },
  {
    icon: "/images/icons/local-search-engine-optimization.svg",
    altText: "Test",
    serviceName: "Local SEO",
    serviceDescription:
      "Attract potential customers in your backyard, don't get stuck competing nationally.",
    slug: "/solutions/digital-marketing/local-search-engine-optimization/",
  },
  {
    icon: "/images/icons/reputation-management.svg",
    altText: "Test",
    serviceName: "Reputation Management",
    serviceDescription:
      "We safeguard your online reputation so you can focus on what matters most: your business.",
    slug: "/solutions/digital-marketing/reputation-management/",
  },
  {
    icon: "/images/icons/content-marketing.svg",
    altText: "Test",
    serviceName: "Content Marketing",
    serviceDescription:
      "Carefully crafted and tailored content that is informative, educational, and loved by search engines.",
    slug: "/solutions/digital-marketing/content-marketing/",
  },
  {
    icon: "/images/icons/custom-website-development.svg",
    altText: "Test",
    serviceName: "Custom Development",
    serviceDescription:
      "Develop a truly unique website, built to serve all of your needs from the start, not conform to existing systems.",
    slug: "/solutions/web-development/custom-website-development/",
  },
  {
    icon: "/images/icons/social-media-marketing.svg",
    altText: "Test",
    serviceName: "Social Media Marketing",
    serviceDescription:
      "Maximize your online presence through the use of popular social channels to better market your business.",
    slug: "/solutions/digital-marketing/social-media-marketing/",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Alkali | Digital Marketing</title>
        <meta
          name="description"
          content="Alkali is a people focused digital marketing agency. We provide SEO, Web Development, PPC, social, and other services to help our clients win online."
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Alkali | Digital Marketing" />
        <meta
          property="og:description"
          content="Alkali is a people focused digital marketing agency. We provide SEO, Web Development, PPC, social, and other services to help our clients win online."
        />
        <meta property="og:url" content="/" />
        <meta property="og:site_name" content="Alkali" />
        <meta
          property="article:modified_time"
          content="2021-08-05T14:33:32+00:00"
        />
        <meta property="og:image" content="/images/facebook-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <HomeHero />
      <div className="">
        <TwoColumnLayout
          child1={contentSection1Image}
          child2={contentSection1Text}
        />
      </div>
      <div className="container">
        <div className="container__arrow container__arrow--tl"></div>
      </div>
      <div
        style={{ width: "500px" }}
        className="meetings-iframe-container"
        data-src="https://app.hubspot.com/meetings/nbaudoin?embed=true"
      ></div>
      <script
        type="text/javascript"
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
      ></script>
      <div className="pt-24 bg-alkaligrey-300">
        <h3 className="text-4xl md:text-5xl pt-2 pb-10 font-bold text-center px-7 max-w-xs md:max-w-xl mx-auto">
          What Our Clients Say
        </h3>
        <div className="hidden lg:contents">
          <HomeTestimonialSlider />
        </div>
        <div className="lg:hidden mt-10 bg-alkaligrey-300">
          <HomeTestimonialSliderMobile />
        </div>
      </div>
      <div id="solutions" className="py-24 pt-64 lg:pt-60 -mt-36 bg-white px-7">
        <h3
          className="pb-20 text-4xl md:text-5xl font-bold text-center"
        >
          Our Solutions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl m-auto justify-between gap-y-14 gap-x-14">
          {ServicesHome.map((wordpress) => (
            <a
              href={wordpress.slug}
              className="group w-full shadow-2xl rounded-md p-10 transform hover:-translate-y-2 duration-500"
            >
              <img
                className="w-14 h-14"
                src={wordpress.icon}
                alt={wordpress.altText}
              />
              <h3
                className="text-2xl font-bold py-7"
                dangerouslySetInnerHTML={{ __html: wordpress.serviceName }}
              ></h3>
              <p className="text-alkaligrey-400">
                {wordpress.serviceDescription}
              </p>
              <div className="mt-5 flex items-center lg:justify-start group space-x-3">
                <div className="font-medium text-md text-alkaligrey-400 group-hover:text-alkali-500">
                  Learn More
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:transform duration-500 group-hover:translate-x-3 h-4 w-4 group-hover:text-alkali-500 text-alkaligrey-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
      <AuditSection
        backgroundColor="bg-alkaligrey-300"
        serviceName="Complimentary Marketing Audit"
        serviceDescription="Every successful engagement begins with an audit. Allow us to provide you a comprehensive 
        audit completely free of charge. Our digital marketing experts will examine your business's 
        online presence and provide you with actionable insights."
        buttonName="Request Free Audit"
        portalId="20442125"
        formId="0b0a2ef2-726c-4d98-a8ae-23108c2c922a"
      />
      <TwoColumnLayout
        flexType="reverse"
        child2={contentSection2Image}
        child1={contentSection2Text}
      />
      <div className="pt-24 py-36 pb-0 bg-alkaligrey-300">
        <h3 className="text-5xl pt-2 pb-10 lg:pb-24 font-bold text-center">
          Our Clients
        </h3>
        <div className="hidden lg:contents">
          <HomeClientsSlider />
        </div>
        <div className="lg:hidden mt-10 bg-alkaligrey-300">
          <HomeClientSliderMobile />
        </div>
      </div>
      <div className="bg-white pt-72 -mt-56 pb-36">
        <h3 className="text-4xl lg:text-5xl pt-2 pb-20 font-bold text-center px-7">
          Some of Our Partners
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 max-w-6xl m-auto gap-y-10">
          <img className="m-auto" src="/images/google-partner-logo.svg" />
          <img
            className="m-auto align-middle"
            src="/images/facebook-partner-logo.svg"
          />
          <img
            className="m-auto"
            src="/images/zapier-partner-logo.svg"
            alt="Zapier partner"
          />
          <img
            className="m-auto"
            src="/images/digitalocean-partner-logo.svg"
            alt="DigitalOcean partner"
          />
          <img
            className="m-auto"
            src="/images/vercel-partner-logo.svg"
            alt="Vercel partner"
          />
          <img
            className="m-auto"
            src="/images/hubspot-partner.svg"
            alt="Hubspot solutions partner"
          />
          <img
            className="m-auto"
            src="/images/shopify-partner.svg"
            alt="Shopify partner"
          />
          <img
            className="m-auto"
            src="/images/stripe-partner.svg"
            alt="Stripe Verified Partner"
          />
        </div>
      </div>
    </div>
  );
}

