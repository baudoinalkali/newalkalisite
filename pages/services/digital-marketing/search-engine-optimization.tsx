import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCaretUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import ServiceHero from "../../../components/Services/ServiceHero";
import ServiceHeroContent from "../../../content/servicePages/serviceHeroContent";
import StandardImage from "../../../components/StandardImage";
import StandardTextBlock from "../../../components/StandardTextBlock";
import SEO from "../../../content/servicePages/seo";
import TwoColumnLayout from "../../../components/TwoColumnLayout";
import Testimonials from "../../../content/testimonials";
import Image from "next/image";
import CombinedNavigation from "../../../components/Navigation/CombinedNavigation";
import SEOServices from "../../../content/servicePages/serviceBlocks";
import ServiceBlocks from "../../../components/Services/ServiceBlocks";
import ResultsBlocks from "../../../components/Services/ResultsBlocks";
import SEOResults from "../../../content/servicePages/resultsBlock";
import SEOFAQ from "../../../content/servicePages/faq";
import AuditFormPopup from "../../../components/AuditFormPopup";
import { text } from "@fortawesome/fontawesome-svg-core";
import ServiceImage from "../../../components/Services/ServiceImage";
import dynamic from 'next/dynamic';
import AuditSection from "../../../components/Services/AuditSection";
import Head from "next/head";
const TestimonialSlide = dynamic(() => import("../../../components/TestimonialSlide"));
const TestimonialSlider = dynamic(() => import("../../../components/TestimonialSlider"));
const FAQDropdown = dynamic(() => import("../../../components/Services/FAQDropdown"));

function SearchEngineOptimization() {
  const seoImage1 = SEO.text1.map((text1) => (
    <StandardImage
      image={text1.image}
      altText={text1.altText}
      imageAngle="none"
    />
  ));

  const seoText1 = SEO.text1.map((text1) => (
    <StandardTextBlock title={text1.title} text={text1.text} />
  ));

  const seoImage2 = SEO.text2.map((text2) => (
    <ServiceImage
      image={text2.image}
      altText={text2.altText}
      imageAngle="none"
      width={text2.width}
      height={text2.height}
    />
  ));

  const seoText2 = SEO.text2.map((text2) => (
    <StandardTextBlock title={text2.title} text={text2.text} />
  ));

  const seoImage3 = SEO.text3.map((text3) => (
    <ServiceImage
      image={text3.image}
      altText={text3.altText}
      imageAngle="none"
      width={text3.width}
      height={text3.height}
    />
  ));

  const seoText3 = SEO.text3.map((text3) => (
    <StandardTextBlock title={text3.title} text={text3.text} />
  ));

  const seoImage4 = SEO.text4.map((text4) => (
    <ServiceImage
      image={text4.image}
      altText={text4.altText}
      imageAngle="none"
      width={text4.width}
      height={text4.height}
    />
  ));

  const seoText4 = SEO.text4.map((text4) => (
    <StandardTextBlock title={text4.title} text={text4.text} />
  ));

  const seoImage5 = SEO.text5.map((text5) => (
    <ServiceImage
      image={text5.image}
      altText={text5.altText}
      imageAngle="none"
      width={text5.width}
      height={text5.height}
    />
  ));

  const seoText5 = SEO.text5.map((text5) => (
    <StandardTextBlock title={text5.title} text={text5.text} />
  ));

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Search Engine Optimization | Get Results in Just 2 Months</title>
        <meta name="description" content="At Alkali, we provide our clients comprehensive search engine marketing results. We stop at nothing to get our clients results." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Search Engine Optimization | Get Results in Just 2 Months" />
        <meta property="og:description" content="At Alkali, we provide our clients comprehensive search engine marketing results. We stop at nothing to get our clients results." />
        <meta property="og:url" content="/" />
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
        (headline) => (
          <ServiceHero
            sub={headline.subTitle}
            title={headline.title}
            titleLength={headline.titleLength}
          />
        )
      )}
      <div className="py-24 px-7">
        <div className="flex flex-col space-x-0 lg:space-x-14 lg:flex-row m-auto justify-between items-center max-w-7xl">
          <div className="w-full lg:w-1/2 2xl:px-0 pb-20 lg:pb-0">
            <h3 className="text-4xl md:text-5xl font-bold m-auto leading-tight">
              Start Seeing Results in Just 2 Months!
            </h3>
            <p className="text-alkaligrey-400 max-w-4xl text-lg font-normal pt-7">
              Organic SEO traffic provides some of the highest quality leads, generally much
              better than Google AdWords or other forms of PPC. By optimizing your organic SEO,
              you are positioning yourself at the top of the search results, reducing your reliance
              and need to shell out money for paid ads that generate no results after you stop. If
              you’re looking for a partner to assist you in your SEO journey, you’re in the right place.
              Our team of experts takes the time to understand your business and its needs, delivering
              you results in just 2 months!
            </p>
          </div>
          <div className="z-0 pointer-events-none w-96 md:w-auto">
            <div className="angled-mockup rounded-md shadow-2xl">
              <div className="browser-mockup z-0">
                <div style={{ fontSize: "0" }}>
                  <Image
                    src="/images/wordpress-stats.png"
                    alt=""
                    className="rounded-b-md"
                    width={588}
                    height={410}
                    quality={100}
                  />
                </div>
              </div>
              <div className="bg-white stat-container float-right -mr-6 shadow-2xl p-7 rounded-md text-center uppercase font-medium text-sm -mt-14 relative w-80 lg:w-5/6">
                <p className="pb-4">Wordpress Statistics</p>
                <div className="flex justify-between items-center max-w-7xl m-auto">
                  <div className="w-1/2 m-auto -ml-3 border-r">
                    <p className="font-bold text-3xl lg:text-5xl pb-4">
                      <FontAwesomeIcon
                        className="text-2xl relative top-0 mr-3"
                        icon={faCaretUp}
                      ></FontAwesomeIcon>
                      40%
                    </p>
                    <p className="text-xs ml-4">Sites Use WordPress</p>
                  </div>
                  <div className="w-1/2 m-auto">
                    <p className="font-bold text-3xl lg:text-5xl pb-4">
                      <FontAwesomeIcon
                        className="text-2xl relative top-0 mr-3"
                        icon={faCaretUp}
                      ></FontAwesomeIcon>
                      150%
                    </p>
                    <p className="text-xs ml-4">Monthly Leads Request</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TwoColumnLayout
        flexType="reverse"
        style="bg-alkaligrey-300"
        child1={seoImage2}
        child2={seoText2}
      />
      <div className="py-24 px-7 2xl:px-0">
        <h6 className="text-4xl md:text-5xl text-center font-bold m-auto leading-tight pb-20">
          Our SEO Services
        </h6>
        <div className="grid grid-cols md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto gap-x-14 gap-y-14">
          {SEO.features.map((features) => (
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
        serviceName="SEO"
        area1="Full website weview (content, CRO, performance)"
        area2="SEO: Comprehensive on-page audit"
        area3="Digital marketing/reputation management"
        portalId="20442125"
        formId="a7151b69-9aec-4d86-b2bf-577b81ddc8ca"
      />
      <TwoColumnLayout
        style="bg-white mb-3"
        child2={seoImage3}
        child1={seoText3}
      />
      <div className="px-7 pt-10">
        <h3 className="text-4xl md:text-5xl text-center font-bold m-auto leading-tight pb-24">
          Hear It Straight From Our Clients
        </h3>
      </div>
      <div className="relative z-20">
        <TestimonialSlider>
          {Testimonials.wordpress.map((testimonial) => (
            <TestimonialSlide
              background={testimonial.background}
              backgroundOverlay={testimonial.backgroundOverlay}
              brandColor={testimonial.brandColor}
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
        style="bg-alkaligrey-300 pt-80 -mt-48"
        child1={seoImage4}
        child2={seoText4}
      />
      <TwoColumnLayout
        style="py-24"
        child2={seoImage5}
        child1={seoText5}
      />
      <div className="">
        <div className="py-24 max-w-7xl m-auto px-7">
          <h6 className="text-4xl md:text-5xl pb-7 text-center font-bold m-auto leading-normal max-w-3xl">
            Frequently Asked Questions About Our SEO Services
          </h6>
          <div className="w-full pt-16">
            <div className="mx-auto rounded-2xl">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10">
                {SEO.faq.map((faq) => (
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

      <AuditFormPopup />
    </div>
  );
}

export default SearchEngineOptimization;
