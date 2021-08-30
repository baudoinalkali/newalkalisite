import ServiceHero from "../../../components/Services/ServiceHero";
import StandardTextBlock from "../../../components/StandardTextBlock";
import LocalSEO from "../../../content/servicePages/localSeo";
import TwoColumnLayout from "../../../components/TwoColumnLayout";
import Testimonials from "../../../content/testimonials";
import CombinedNavigation from "../../../components/Navigation/CombinedNavigation";
import ServiceBlocks from "../../../components/Services/ServiceBlocks";
import AuditFormPopup from "../../../components/AuditFormPopup";
import ServiceImage from "../../../components/Services/ServiceImage";
import dynamic from 'next/dynamic';
import AuditSection from "../../../components/Services/AuditSection";
import Head from "next/head";
const TestimonialSlide = dynamic(() => import("../../../components/TestimonialSlide"));
const TestimonialSlider = dynamic(() => import("../../../components/TestimonialSlider"));
const FAQDropdown = dynamic(() => import("../../../components/Services/FAQDropdown"));

function LocalSearchEngineOptimization() {
  const seoImage1 = LocalSEO.text1.map((text1) => (
    <ServiceImage
      image={text1.image}
      altText={text1.altText}
      height={text1.height}
      width={text1.width}
    />
  ));

  const seoText1 = LocalSEO.text1.map((text1) => (
    <StandardTextBlock
      title={text1.title}
      text={text1.text}
    />
  ));

  const seoImage2 = LocalSEO.text2.map((text2) => (
    <ServiceImage
      image={text2.image}
      altText={text2.altText}
      imageAngle="none"
      height={text2.height}
      width={text2.width}
    />
  ));

  const seoText2 = LocalSEO.text2.map((text2) => (
    <StandardTextBlock title={text2.title} text={text2.text} />
  ));

  const seoImage3 = LocalSEO.text3.map((text3) => (
    <ServiceImage
      image={text3.image}
      altText={text3.altText}
      imageAngle="none"
      height={text3.height}
      width={text3.width}
    />
  ));

  const seoText3 = LocalSEO.text3.map((text3) => (
    <StandardTextBlock title={text3.title} text={text3.text} />
  ));

  const seoImage4 = LocalSEO.text4.map((text4) => (
    <ServiceImage
      image={text4.image}
      altText={text4.altText}
      imageAngle="none"
      height={text4.height}
      width={text4.width}
    />
  ));

  const seoText4 = LocalSEO.text4.map((text4) => (
    <StandardTextBlock title={text4.title} text={text4.text} />
  ));

  const seoImage5 = LocalSEO.text5.map((text5) => (
    <ServiceImage
      image={text5.image}
      altText={text5.altText}
      imageAngle="none"
      height={text5.height}
      width={text5.width}
    />
  ));

  const seoText5 = LocalSEO.text5.map((text5) => (
    <StandardTextBlock title={text5.title} text={text5.text} />
  ));

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Local SEO Services | Stand Out In Your Backyard</title>
        <meta name="description" content="At Alkali we improve your local search visbility with our effective local seo services. Whether you're a small business or are a franchise, we can help." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical"/>
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
        (headline) => (
          <ServiceHero
            sub={headline.subTitle}
            title={headline.title}
          />
        )
      )}
      <TwoColumnLayout style="" child2={seoImage1} child1={seoText1} />
      <TwoColumnLayout
        flexType="reverse"
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
      <TwoColumnLayout style="mb-3" child2={seoImage3} child1={seoText3} />
      <div className="px-7 pt-10">
        <h3 className="text-4xl md:text-5xl text-center font-bold m-auto leading-tight pb-14">
          Hear It Straight From Our Clients
        </h3>
      </div>
      <div className="relative z-20 -mb-48">
        <TestimonialSlider>
          {Testimonials.wordpress.map((testimonial) => (
            <TestimonialSlide
              background={testimonial.background}
              backgroundOverlay={testimonial.backgroundOverlay}
              company={testimonial.company}
              key={`designTestimonialFor${testimonial.company}`}
              logo={testimonial.logo}
              slug={testimonial.slug}
              logoWidth={testimonial.logoWidth}
              logoHeight={testimonial.logoHeight}
              altText={testimonial.altText}
              name={testimonial.name}
              quote={testimonial.quote}
              slugVisibility="true"
            />
          ))}
        </TestimonialSlider>
      </div>
      <TwoColumnLayout
        flexType="reverse"
        style="pt-80 bg-alkaligrey-300"
        child1={seoImage5}
        child2={seoText5}
      />
      <TwoColumnLayout
        style="py-24"
        child2={seoImage4}
        child1={seoText4}
      />
      <div className="px-7">
        <div className="py-24 max-w-7xl m-auto">
          <h6 className="text-3xl md:text-4xl pb-7 text-center font-bold m-auto leading-tight">
            Frequently Asked Questions About Our SEO Services
          </h6>
          <div className="w-full pt-16">
            <div className="mx-auto rounded-2xl">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10">
                {LocalSEO.faq.map((faq) => (
                  <FAQDropdown
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuditFormPopup formId="14f0e011-ed9b-4f08-8ae2-eef6990a623c" />
    </div>
  );
}

export default LocalSearchEngineOptimization;
