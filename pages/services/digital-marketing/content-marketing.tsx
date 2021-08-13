import ServiceHero from "../../../components/Services/ServiceHero";
import ServiceHeroContent from "../../../content/servicePages/serviceHeroContent";
import StandardImage from "../../../components/StandardImage";
import StandardTextBlock from "../../../components/StandardTextBlock";
import TwoColumnLayout from "../../../components/TwoColumnLayout";
import ServiceLeadSection from "../../../components/ServiceLeadSection";
import Testimonials from "../../../content/testimonials";
import Image from "next/image";
import CombinedNavigation from "../../../components/Navigation/CombinedNavigation";
import ServiceBlocks from "../../../components/Services/ServiceBlocks";
import ServiceResultsContent from "../../../content/servicePages/resultsBlock";
import ResultsBlocks from "../../../components/Services/ResultsBlocks";
import Content from "../../../content/servicePages/contentMarketing";
import ContentMarketingServices from "../../../content/servicePages/serviceBlocks";
import ContentMarketingFAQ from "../../../content/servicePages/faq";
import AuditFormPopup from "../../../components/AuditFormPopup";
import dynamic from 'next/dynamic';
const TestimonialSlide = dynamic(() => import("../../../components/TestimonialSlide"));
const TestimonialSlider = dynamic(() => import("../../../components/TestimonialSlider"));
const FAQDropdown = dynamic(() => import("../../../components/Services/FAQDropdown"));

function ContentMarketing() {
  const contentImage1 = Content.text1.map((text1) => (
    <StandardImage image={text1.image} imageAngle="none" />
  ));

  const contentText1 = Content.text1.map((text1) => (
    <StandardTextBlock title={text1.title} text={text1.text} />
  ));

  const contentImage2 = Content.text2.map((text2) => (
    <StandardImage image={text2.image} imageAngle="none" />
  ));

  const contentText2 = Content.text2.map((text2) => (
    <StandardTextBlock title={text2.title} text={text2.text} />
  ));

  const contentImage3 = Content.text3.map((text3) => (
    <StandardImage image={text3.image} imageAngle="none" />
  ));

  const contentText3 = Content.text3.map((text3) => (
    <StandardTextBlock title={text3.title} text={text3.text} />
  ));

  const contentImage4 = Content.text4.map((text4) => (
    <StandardImage image={text4.image} imageAngle="none" />
  ));

  const contentText4 = Content.text4.map((text4) => (
    <StandardTextBlock title={text4.title} text={text4.text} />
  ));

  return (
    <div className="overflow-hidden">
      <CombinedNavigation
        headerBackground="bg-alkali-500"
        headerColor="white"
      />
      {ServiceHeroContent.contentMarketing.map((contentMarketing) => (
        <ServiceHero
          sub={contentMarketing.sub}
          title={contentMarketing.title}
          backgroundImg={contentMarketing.backgroundImg}
        />
      ))}
      <TwoColumnLayout style="" child2={contentImage1} child1={contentText1} />
      <TwoColumnLayout
        flexType="reverse"
        style="bg-alkaligrey-300"
        child1={contentImage2}
        child2={contentText2}
      />
      <div className="py-24 px-7">
        <h6 className="text-3xl md:text-4xl text-center font-bold m-auto leading-tight pb-24">
          Our Content Marketing Services
        </h6>
        <div className="grid grid-cols md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto gap-x-14 gap-y-14">
          {ContentMarketingServices.ContentMarketing.map((ContentMarketing) => (
            <ServiceBlocks
              serviceTitle={ContentMarketing.serviceTitle}
              serviceText={ContentMarketing.serviceText}
              image={ContentMarketing.image}
              altText={ContentMarketing.altText}
            />
          ))}
        </div>
      </div>
      <div className="bg-alkaligrey-300 py-24 px-7">
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
              Get a Complementary Content Audit
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
              Our content marketing specialists are standing by to audit your
              web, blog, or social content and provide a detailed action report.
            </p>
          </div>
        </div>
      </div>

      <TwoColumnLayout
        style="mb-3"
        child2={contentImage3}
        child1={contentText3}
      />
      <div className="px-7 pt-36">
        <h3 className="text-3xl md:text-4xl text-center font-bold m-auto leading-tight pb-14">
          Hear It Straight From Our Clients
        </h3>
      </div>
      <div className="relative z-20 -mb-48 ">
        <TestimonialSlider>
          {Testimonials.wordpress.map((testimonial) => (
            <TestimonialSlide
              background={testimonial.background}
              backgroundOverlay={testimonial.backgroundOverlay}
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

      <div className="pt-72 mt-3 bg-alkaligrey-300 py-24 px-7">
        <h6 className="text-3xl md:text-4xl pb-14 text-center font-bold m-auto leading-tight">
          You Give Us Trust, We Give You Results
        </h6>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 max-w-7xl m-auto gap-x-14 gap-y-14">
          {ServiceResultsContent.localSEO.map((localSEO) => (
            <ResultsBlocks
              image={localSEO.image}
              result={localSEO.result}
              resultName={localSEO.resultName}
              altText={localSEO.altText}
            />
          ))}
        </div>
      </div>
      <ServiceLeadSection
        style="bg-alkali-500 py-24"
        title="We're Here to Realize Your Vision"
        text="Do you have an idea and vision for your website but not sure where to start? Our team of professionals are standing by to answer any questions you may have. Whether you need a free audit of your current website or want to discuss specifics of a new WordPress website build, we look forward to serving you!"
        buttonText="Schedule a Discovery Call"
      />
      <TwoColumnLayout
        style="py-24"
        child2={contentImage4}
        child1={contentText4}
      />
      <div className="bg-white">
        <div className="py-24 max-w-7xl m-auto">
          <h6 className="text-3xl md:text-4xl pb-7 text-center font-bold m-auto leading-tight">
            Frequently Asked Questions About Our SEO Services
          </h6>
          <div className="w-full px-4 pt-16">
            <div className="p-2 mx-auto rounded-2xl">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10">
                {ContentMarketingFAQ.ContentMarketing.map(
                  (ContentMarketing) => (
                    <FAQDropdown
                      question={ContentMarketing.question}
                      answer={ContentMarketing.answer}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuditFormPopup />
    </div>
  );
}

export default ContentMarketing;
