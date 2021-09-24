import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCaretUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import ServiceHero from "../../../components/Services/ServiceHero";
import StandardImage from "../../../components/StandardImage";
import StandardTextBlock from "../../../components/StandardTextBlock";
import SEO from "../../../content/servicePages/seo";
import TwoColumnLayout from "../../../components/TwoColumnLayout";
import Testimonials from "../../../content/testimonials";
import Image from "next/image";
import CombinedNavigation from "../../../components/Navigation/CombinedNavigation";
import ServiceBlocks from "../../../components/Services/ServiceBlocks";
import ServiceImage from "../../../components/Services/ServiceImage";
import dynamic from 'next/dynamic';
import AuditSection from "../../../components/Services/AuditSection";
import Head from "next/head";
import FAQContainer from "../../../components/Services/FAQContainer";
const TestimonialSlide = dynamic(() => import("../../../components/TestimonialSlide"));
const TestimonialSlider = dynamic(() => import("../../../components/TestimonialSlider"));
const FAQDropdown = dynamic(() => import("../../../components/Services/FAQDropdown"));

function SearchEngineOptimization() {
  const seoImage1 = SEO.text1.map((seoData) => (
    <StandardImage
      image={seoData.image}
      altText={seoData.altText}
      imageAngle="none"
    />
  ));

  const seoText1 = SEO.text1.map((seoData) => (
    <StandardTextBlock
      titleLength="max-w-xl"
      title={seoData.title}
      text={seoData.text}
    />
  ));

  const seoImage2 = SEO.text2.map((seoData) => (
    <ServiceImage
      image={seoData.image}
      altText={seoData.altText}
      imageAngle="none"
      width={seoData.width}
      height={seoData.height}
    />
  ));

  const seoText2 = SEO.text2.map((seoData) => (
    <StandardTextBlock
      title={seoData.title}
      text={seoData.text}
    />
  ));

  const seoImage3 = SEO.text3.map((seoData) => (
    <ServiceImage
      image={seoData.image}
      altText={seoData.altText}
      imageAngle="none"
      width={seoData.width}
      height={seoData.height}
    />
  ));

  const seoText3 = SEO.text3.map((seoData) => (
    <StandardTextBlock
      title={seoData.title}
      text={seoData.text}
    />
  ));

  const seoImage4 = SEO.text4.map((seoData) => (
    <ServiceImage
      image={seoData.image}
      altText={seoData.altText}
      imageAngle="none"
      width={seoData.width}
      height={seoData.height}
    />
  ));

  const seoText4 = SEO.text4.map((seoData) => (
    <StandardTextBlock
      titleLength="max-w-lg"
      title={seoData.title}
      text={seoData.text}
    />
  ));

  const seoImage5 = SEO.text5.map((seoData) => (
    <ServiceImage
      image={seoData.image}
      altText={seoData.altText}
      imageAngle="none"
      width={seoData.width}
      height={seoData.height}
    />
  ));

  const seoText5 = SEO.text5.map((seoData) => (
    <StandardTextBlock
      titleLength="max-w-lg"
      title={seoData.title}
      text={seoData.text}
    />
  ));

  return (
    <div id="service-page" className="overflow-hidden">
      <Head>
        <title>Search Engine Optimization | Get Results in Just 2 Months</title>
        <meta name="description" content="At Alkali, we provide our clients comprehensive search engine marketing results. We stop at nothing to get our clients results." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Search Engine Optimization | Get Results in Just 2 Months" />
        <meta property="og:description" content="At Alkali, we provide our clients comprehensive search engine marketing results. We stop at nothing to get our clients results." />
        <meta property="og:url" content="https://www.alkalidesigns.com/solutions/digital-marketing/search-engine-optimization/" />
        <meta property="og:site_name" content="Alkali" />
        <meta property="article:modified_time" content="2021-08-05T14:33:32+00:00" />
        <meta property="og:image" content="/images/facebook-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <CombinedNavigation
        headerBackground="bg-alkali-500"
        headerColor="white"
      />
      {SEO.headline.map(
        (seoData) => (
          <ServiceHero
            sub={seoData.subTitle}
            title={seoData.title}
            titleLength={seoData.titleLength}
          />
        )
      )}
      <TwoColumnLayout
        flexType="reverse"
        child2={seoImage1}
        child1={seoText1}
      />
      <TwoColumnLayout
        style="bg-alkaligrey-300"
        child1={seoImage2}
        child2={seoText2}
      />
      <div className="py-24 px-7 2xl:px-0">
        <h6 className="text-4xl md:text-5xl text-center font-bold m-auto leading-tight pb-20">
          Our SEO Services
        </h6>
        <div className="grid grid-cols md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto gap-x-14 gap-y-14">
          {SEO.features.map((seoData) => (
            <ServiceBlocks
              serviceTitle={seoData.serviceTitle}
              serviceText={seoData.serviceText}
              image={seoData.image}
              altText={seoData.altText}
            />
          ))}
        </div>
      </div>
      <AuditSection
        backgroundColor="bg-alkaligrey-300"
        serviceName="Complimentary SEO Audit"
        serviceDescription="Every successful engagement begins with an audit. Allow us to provide you a comprehensive 
        audit completely free of charge. Our digital marketing experts will examine your business's 
        website and provide you with actionable insights."
        buttonName="Request Free Audit"
        portalId="20442125"
        formId="a7151b69-9aec-4d86-b2bf-577b81ddc8ca"
      />
      <TwoColumnLayout
        flexType="reverse"
        style="pb-10 lg:pb-36"
        child2={seoImage3}
        child1={seoText3}
      />
      <div className="px-7 pt-10">
        <h3 className="text-4xl md:text-5xl text-center font-bold m-auto leading-normal pb-14">
          Hear It Straight From Our Clients
        </h3>
      </div>
      <div className="relative z-20">
        <TestimonialSlider>
          {Testimonials.seo.map((seoData) => (
            <TestimonialSlide
              background={seoData.background}
              brandColor={seoData.brandColor}
              company={seoData.company}
              key={`designTestimonialFor${seoData.company}`}
              logo={seoData.logo}
              slug={seoData.slug}
              logoWidth={seoData.logoWidth}
              logoHeight={seoData.logoHeight}
              altText={seoData.altText}
              name={seoData.name}
              quote={seoData.quote}
              slugVisibility="true"
            />
          ))}
        </TestimonialSlider>
      </div>
      <TwoColumnLayout
        style="bg-alkaligrey-300 pt-80 -mt-48"
        child1={seoImage4}
        child2={seoText4}
      />
      <TwoColumnLayout
        flexType="reverse"
        style="py-24"
        child2={seoImage5}
        child1={seoText5}
      />
      <FAQContainer name="SEO" titleLength="max-w-4xl">
        {SEO.faq.map((seoData) => (
          <FAQDropdown
            question={seoData.question}
            answer={seoData.answer}
            key={seoData.question}
          />
        ))}
      </FAQContainer>
    </div>
  );
}

export default SearchEngineOptimization;
