import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCaretUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import ServiceHero from "../../../components/Services/ServiceHero";
import ServiceHeroContent from "../../../content/servicePages/serviceHeroContent";
import StandardImage from "../../../components/StandardImage";
import StandardTextBlock from "../../../components/StandardTextBlock";
import SEO from "../../../content/servicePages/seo";
import TwoColumnLayout from "../../../components/TwoColumnLayout";
import TestimonialSlide from "../../../components/TestimonialSlide";
import TestimonialSlider from "../../../components/TestimonialSlider";
import Testimonials from "../../../content/testimonials";
import seoProcess from "../../../content/servicePages/ourProcess";
import OurProcessComp from "../../../components/Services/OurProcess";
import Image from "next/image";
import CombinedNavigation from "../../../components/Navigation/CombinedNavigation";
import SEOServices from "../../../content/servicePages/serviceBlocks";
import ServiceBlocks from "../../../components/Services/ServiceBlocks";
import ResultsBlocks from "../../../components/Services/ResultsBlocks";
import SEOResults from "../../../content/servicePages/resultsBlock";
import FAQDropdown from "../../../components/Services/FAQDropdown";
import SEOFAQ from "../../../content/servicePages/faq";
import AuditPopup from "../../../components/AuditPopup";

function SearchEngineOptimization() {
  const seoImage1 = SEO.text1.map((text1) => (
    <StandardImage image={text1.image} imageAngle="none" />
  ));

  const seoText1 = SEO.text1.map((text1) => (
    <StandardTextBlock title={text1.title} text={text1.text} />
  ));

  const seoImage2 = SEO.text2.map((text2) => (
    <StandardImage image={text2.image} imageAngle="none" />
  ));

  const seoText2 = SEO.text2.map((text2) => (
    <StandardTextBlock title={text2.title} text={text2.text} />
  ));

  const seoImage3 = SEO.text3.map((text3) => (
    <StandardImage image={text3.image} imageAngle="none" />
  ));

  const seoText3 = SEO.text3.map((text3) => (
    <StandardTextBlock title={text3.title} text={text3.text} />
  ));

  const seoImage4 = SEO.text4.map((text4) => (
    <StandardImage image={text4.image} imageAngle="none" />
  ));

  const seoText4 = SEO.text4.map((text4) => (
    <StandardTextBlock title={text4.title} text={text4.text} />
  ));

  const seoImage5 = SEO.text5.map((text5) => (
    <StandardImage image={text5.image} imageAngle="none" />
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
      {ServiceHeroContent.searchEngineOptimization.map(
        (searchEngineOptimization) => (
          <ServiceHero
            sub={searchEngineOptimization.sub}
            title={searchEngineOptimization.title}
            backgroundImg={searchEngineOptimization.backgroundImg}
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
              Standing out in a crowded marketplace can be difficult. Our
              specialty is not only driving interested users to your site and
              catching their attention once there but enticing them to engage
              and come back for more. Whether your site is orientated toward
              Sales, Information, Charity, or something else, we’ve seen it all,
              so we do it all. Let our team of talented, inspired professionals
              give your website the attention it deserves, leaving you free to
              devote your attention to what matters to you!
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
          {SEOServices.SEO.map((SEO) => (
            <ServiceBlocks
              serviceTitle={SEO.serviceTitle}
              serviceText={SEO.serviceText}
              image={SEO.image}
              altText={SEO.altText}
            />
          ))}
        </div>
      </div>
      <div className="bg-alkaligrey-300 py-24 px-14 2xl:px-0">
        <div className="flex space-x-0 lg:space-x-14 flex-col lg:flex-row m-auto justify-between items-center max-w-7xl">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/audit.png"
              width={490}
              height={335}
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
      <div className="py-24 px-7 2xl:px-0">
        <h6 className="text-3xl md:text-4xl pb-24 text-center font-bold m-auto leading-tight">
          You Give Us Trust, We Give You Results
        </h6>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 max-w-7xl m-auto gap-x-14 gap-y-14">
          {SEOResults.SEO.map((SEO) => (
            <ResultsBlocks
              image={SEO.image}
              result={SEO.result}
              resultName={SEO.resultName}
              altText={SEO.altText}
            />
          ))}
        </div>
      </div>
      <TwoColumnLayout
        style="py-24 bg-alkaligrey-300"
        child2={seoImage5}
        child1={seoText5}
      />
      <div className="">
        <div className="py-24 max-w-7xl m-auto px-7">
          <h6 className="text-3xl md:text-4xl pb-7 text-center font-bold m-auto leading-tight">
            Frequently Asked Questions About Our SEO Services
          </h6>
          <div className="w-full pt-16">
            <div className="mx-auto rounded-2xl">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10">
                {SEOFAQ.SEO.map((SEO) => (
                  <FAQDropdown question={SEO.question} answer={SEO.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuditPopup />
    </div>
  );
}

export default SearchEngineOptimization;
