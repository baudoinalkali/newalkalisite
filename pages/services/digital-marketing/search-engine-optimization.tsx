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
const TestimonialSlide = dynamic(() => import("../../../components/TestimonialSlide"));
const TestimonialSlider = dynamic(() => import("../../../components/TestimonialSlider"));
const FAQDropdown = dynamic(() => import("../../../components/Services/FAQDropdown"));

function SearchEngineOptimization() {
  const seoImage1 = SEO.text1.map((text1) => (
    <StandardImage image={text1.image} imageAngle="none" />
  ));

  const seoText1 = SEO.text1.map((text1) => (
    <StandardTextBlock title={text1.title} text={text1.text} />
  ));

  const seoImage2 = SEO.text2.map((text2) => (
    <ServiceImage
      image={text2.image}
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
      <div className="bg-alkaligrey-300 py-24 px-14 2xl:px-0">
        <div className="flex space-x-0 lg:space-x-14 flex-col lg:flex-row m-auto justify-between items-center max-w-7xl">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/digital-marketing/seo/free-audit.svg"
              width={500}
              height={450}
              quality={100}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Get a Complementary SEO Audit
            </h2>
            <form className="flex rounded-md my-7 shadow-2xl">
              <input
                className="rounded-l-lg border-t pl-4 w-screen border-b border-l text-gray-800 border-gray-200 bg-white"
                placeholder="yourwebsite.com"
              />
              <button className="p-3 px-6 font-semibold text-white rounded-r-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700">
                Submit
              </button>
            </form>
            <p>
              Our Local SEO specialists are standing by to audit your website
              and provide a detailed action report.
            </p>
          </div>
        </div>
      </div>
      <TwoColumnLayout
        style="bg-white pb-96 lg:pb-100 mb-3"
        child2={seoImage3}
        child1={seoText3}
      />
      <div className="-mt-72 px-14 2xl:px-0">
        <h3 className="text-3xl md:text-4xl text-center font-bold m-auto leading-tight pb-24">
          Hear It Straight From Our Clients
        </h3>
      </div>
      <div className="relative z-20 mb-2">
        <TestimonialSlider>
          {Testimonials.wordpress.map((testimonial) => (
            <TestimonialSlide
              background={testimonial.background}
              backgroundOverlay={testimonial.backgroundOverlay}
              brandColor={testimonial.brandColor}
              company={testimonial.company}
              key={`designTestimonialFor${testimonial.company}`}
              logo={testimonial.logo}
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
