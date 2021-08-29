import HomeHero from "../components/HomeHero";
import AuditSection from "../components/Services/AuditSection";
import dynamic from 'next/dynamic';
import TwoColumnLayout from "../components/TwoColumnLayout";
import ServiceImage from "../components/Services/ServiceImage";
import StandardTextBlock from "../components/StandardTextBlock";
import Head from "next/head";
const HomeTestimonialSlider = dynamic(() => import("../components/HomeTestimonialSlider"));
const HomeClientsSlider = dynamic(() => import("../components/HomeClientsSlider"));

const contentSection1Image = [
  <ServiceImage
    image="/images/web-development/wordpress/custom-built.svg"
    imageAngle="none"
    width="600"
    height="450"
  />
]

const contentSection1Text = [
  <StandardTextBlock
    title="Our Commitment"
    text="Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum 
    Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem 
    ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum 
    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem 
    ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum 
    Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum"
  />
]

const contentSection2Image = [
  <ServiceImage
    image="/images/web-development/wordpress/custom-built.svg"
    imageAngle="none"
    width="600"
    height="450"
  />
]

const contentSection2Text = [
  <StandardTextBlock
    title="Our Commitment"
    text="Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum 
    Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem 
    ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum 
    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem 
    ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum 
    Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum"
  />
]

const ServicesHome = [
  {
    icon: "/images/digital-marketing/seo/competitive-analysis.svg",
    altText: "Test",
    serviceName: "Search Engine Optimization",
    serviceDescription: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    slug: "/services/digital-marketing/search-engine-optimization"
  },
  {
    icon: "/images/digital-marketing/seo/competitive-analysis.svg",
    altText: "Test",
    serviceName: "Web <br/> Development",
    serviceDescription: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    slug: "/services/digital-marketing/search-engine-optimization"
  },
  {
    icon: "/images/digital-marketing/seo/competitive-analysis.svg",
    altText: "Test",
    serviceName: "Web Development",
    serviceDescription: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    slug: "/services/digital-marketing/search-engine-optimization"
  },
  {
    icon: "/images/digital-marketing/seo/competitive-analysis.svg",
    altText: "Test",
    serviceName: "Web Development",
    serviceDescription: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    slug: "/services/digital-marketing/search-engine-optimization"
  },
  {
    icon: "/images/digital-marketing/seo/competitive-analysis.svg",
    altText: "Test",
    serviceName: "Web Development",
    serviceDescription: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    slug: "/services/digital-marketing/search-engine-optimization"
  },
  {
    icon: "/images/digital-marketing/seo/competitive-analysis.svg",
    altText: "Test",
    serviceName: "Web Development",
    serviceDescription: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    slug: "/services/digital-marketing/search-engine-optimization"
  },
  {
    icon: "/images/digital-marketing/seo/competitive-analysis.svg",
    altText: "Test",
    serviceName: "Web Development",
    serviceDescription: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    slug: "/services/digital-marketing/search-engine-optimization"
  },
  {
    icon: "/images/digital-marketing/seo/competitive-analysis.svg",
    altText: "Test",
    serviceName: "Web Development",
    serviceDescription: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    slug: "/services/digital-marketing/search-engine-optimization"
  },
  {
    icon: "/images/digital-marketing/seo/competitive-analysis.svg",
    altText: "Test",
    serviceName: "Web Development",
    serviceDescription: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    slug: "/services/digital-marketing/search-engine-optimization"
  }
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Alkali | Digital Marketing</title>
        <meta name="description" content="Alkali is a people focused digital marketing agency. We provide SEO, Web Development, PPC, social, and other services to help our clients win online." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Alkali | Digital Marketing" />
        <meta property="og:description" content="Alkali is a people focused digital marketing agency. We provide SEO, Web Development, PPC, social, and other services to help our clients win online." />
        <meta property="og:url" content="/" />
        <meta property="og:site_name" content="DAP" />
        <meta property="article:modified_time" content="2021-08-05T14:33:32+00:00" />
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
        <div className="container__arrow container__arrow--tl">

        </div>
      </div>
      <div style={{ width: "500px" }} className="meetings-iframe-container" data-src="https://app.hubspot.com/meetings/nbaudoin?embed=true"></div>
      <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script>
      <div className="pt-36 bg-alkaligrey-300">
        <h3 className="text-5xl pt-2 pb-24 font-bold text-center">
          What Our Clients Say
        </h3>
      </div>
      <HomeTestimonialSlider />
      <div className="py-24 pt-64 -mt-40 bg-white px-7">
        <h3
          id="services"
          className="pb-24 text-5xl font-bold text-center"
        >
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl m-auto justify-between gap-y-14 gap-x-14">
          {ServicesHome.map((wordpress) => (
            <a href={wordpress.slug} className="group w-full shadow-2xl rounded-md p-10 transform hover:-translate-y-2 duration-500">
              <img src={wordpress.icon} alt={wordpress.altText} />
              <h3 className="text-2xl font-bold py-7" dangerouslySetInnerHTML={{ __html: wordpress.serviceName }}>
              </h3>
              <p className="text-alkaligrey-400">
                {wordpress.serviceDescription}
              </p>
              <div className="mt-5 flex items-center justify-center lg:justify-start group space-x-3">
                <div className="font-medium text-md text-alkaligrey-400">Learn More</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:transform duration-500 group-hover:translate-x-3 h-4 w-4 group-hover:text-alkali-500 text-alkaligrey-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
      <TwoColumnLayout
        style="bg-alkaligrey-300 py-24"
        child1={contentSection2Image}
        child2={contentSection2Text}
      />
      <AuditSection
        serviceName="Marketing"
        area1="Full website weview (content, CRO, performance)"
        area2="SEO: Comprehensive on-page audit"
        area3="Digital marketing/reputation management"
        portalId="20442125"
        formId="0b0a2ef2-726c-4d98-a8ae-23108c2c922a"
      />
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
          <img className="m-auto" src="/images/zapier-partner-logo.svg" alt="Zapier partner"/>
          <img className="m-auto" src="/images/digitalocean-partner-logo.svg" alt="DigitalOcean partner" />
          <img className="m-auto" src="/images/vercel-partner-logo.svg" alt="Vercel partner"/>
          <img className="m-auto" src="/images/hubspot-partner.svg" alt="Hubspot solutions partner"/>
          <img className="m-auto" src="/images/shopify-partner.svg" alt="Shopify partner"/>
        </div>
      </div>
    </div>

  );
}
