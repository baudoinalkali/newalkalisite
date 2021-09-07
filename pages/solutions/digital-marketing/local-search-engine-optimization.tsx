import ServiceHero from "../../../components/Services/ServiceHero";
import StandardTextBlock from "../../../components/StandardTextBlock";
import LocalSEO from "../../../content/servicePages/localSeo";
import TwoColumnLayout from "../../../components/TwoColumnLayout";
import Testimonials from "../../../content/testimonials";
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

function LocalSearchEngineOptimization() {
  const seoImage1 = LocalSEO.text1.map((localSEOData) => (
    <ServiceImage
      image={localSEOData.image}
      altText={localSEOData.altText}
      height={localSEOData.height}
      width={localSEOData.width}
    />
  ));

  const seoText1 = LocalSEO.text1.map((localSEOData) => (
    <StandardTextBlock
      title={localSEOData.title}
      text={localSEOData.text}
    />
  ));

  const seoImage2 = LocalSEO.text2.map((localSEOData) => (
    <ServiceImage
      image={localSEOData.image}
      altText={localSEOData.altText}
      imageAngle="none"
      height={localSEOData.height}
      width={localSEOData.width}
    />
  ));

  const seoText2 = LocalSEO.text2.map((localSEOData) => (
    <StandardTextBlock
      title={localSEOData.title}
      text={localSEOData.text}
    />
  ));

  const seoImage3 = LocalSEO.text3.map((localSEOData) => (
    <ServiceImage
      image={localSEOData.image}
      altText={localSEOData.altText}
      imageAngle="none"
      height={localSEOData.height}
      width={localSEOData.width}
    />
  ));

  const seoText3 = LocalSEO.text3.map((localSEOData) => (
    <StandardTextBlock
      title={localSEOData.title}
      text={localSEOData.text}
    />
  ));

  const seoImage4 = LocalSEO.text4.map((localSEOData) => (
    <ServiceImage
      image={localSEOData.image}
      altText={localSEOData.altText}
      imageAngle="none"
      height={localSEOData.height}
      width={localSEOData.width}
    />
  ));

  const seoText4 = LocalSEO.text4.map((localSEOData) => (
    <StandardTextBlock
      title={localSEOData.title}
      text={localSEOData.text}
    />
  ));

  const seoImage5 = LocalSEO.text5.map((localSEOData) => (
    <ServiceImage
      image={localSEOData.image}
      altText={localSEOData.altText}
      imageAngle="none"
      height={localSEOData.height}
      width={localSEOData.width}
    />
  ));

  const seoText5 = LocalSEO.text5.map((localSEOData) => (
    <StandardTextBlock
      title={localSEOData.title}
      text={localSEOData.text}
    />
  ));

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Local SEO Services | Stand Out In Your Backyard</title>
        <meta name="description" content="At Alkali we improve your local search visbility with our effective local seo services. Whether you're a small business or are a franchise, we can help." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Local SEO Services | Stand Out In Your Backyard" />
        <meta property="og:description" content="At Alkali we improve your local search visbility with our effective local seo services. Whether you're a small business or are a franchise, we can help." />
        <meta property="og:url" content="https://new.alkali.cloud/services/local-search-engine-optimization/" />
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
      {LocalSEO.headline.map(
        (localSEOData) => (
          <ServiceHero
            sub={localSEOData.subTitle}
            title={localSEOData.title}
            titleLength={localSEOData.titleLength}
          />
        )
      )}
      <TwoColumnLayout
        flexType="reverse"
        style=""
        child2={seoImage1}
        child1={seoText1}
      />
      <TwoColumnLayout
        style="bg-alkaligrey-300"
        child1={seoImage2}
        child2={seoText2}
      />
      <div className="py-24 px-7">
        <h6 className="text-4xl md:text-5xl text-center font-bold m-auto leading-tight pb-24">
          Our Local SEO Services
        </h6>
        <div className="grid grid-cols md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto gap-x-14 gap-y-14">
          {LocalSEO.features.map((features) => (
            <ServiceBlocks
              serviceTitle={features.serviceTitle}
              serviceText={features.serviceText}
              image={features.image}
              altText={features.altText}
            />
          ))}
        </div>
      </div>
      <AuditSection
        backgroundColor="bg-alkaligrey-300"
        serviceName="Local SEO"
        area1="Full website weview (content, CRO, performance)"
        area2="SEO: Comprehensive on-page audit"
        area3="Digital marketing/reputation management"
        portalId="20442125"
        formId="ca7ed626-450f-4b52-8fa7-2c7d2d464006"
      />
      <TwoColumnLayout
        flexType="reverse"
        style=""
        child2={seoImage3}
        child1={seoText3}
      />
      <TwoColumnLayout
        style="bg-alkaligrey-300"
        child1={seoImage5}
        child2={seoText5}
      />
      <TwoColumnLayout
        flexType="reverse"
        style="py-24"
        child2={seoImage4}
        child1={seoText4}
      />
      <FAQContainer name="Local SEO" titleLength="max-w-4xl">
        {LocalSEO.faq.map((localSEOData) => (
          <FAQDropdown
            question={localSEOData.question}
            answer={localSEOData.answer}
            key={localSEOData.question}
          />
        ))}
      </FAQContainer>
    </div>
  );
}

export default LocalSearchEngineOptimization;
