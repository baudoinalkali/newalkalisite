import ServiceHero from "../../../components/Services/ServiceHero";
import ServiceHeroContent from "../../../content/servicePages/serviceHeroContent";
import StandardImage from "../../../components/StandardImage";
import StandardTextBlock from "../../../components/StandardTextBlock";
import LocalSEO from "../../../content/servicePages/localSeo";
import TwoColumnLayout from "../../../components/TwoColumnLayout";
import ServiceLeadSection from "../../../components/ServiceLeadSection";
import TestimonialSlide from "../../../components/TestimonialSlide";
import TestimonialSlider from "../../../components/TestimonialSlider";
import Testimonials from "../../../content/testimonials";
import seoProcess from "../../../content/servicePages/ourProcess";
import OurProcessComp from "../../../components/Services/OurProcess";
import Image from "next/image";
import CombinedNavigation from "../../../components/Navigation/CombinedNavigation";
import ServiceBlocks from "../../../components/Services/ServiceBlocks";
import ServiceBlocksContent from "../../../content/servicePages/serviceBlocks";
import ServiceResultsContent from "../../../content/servicePages/resultsBlock";
import ResultsBlocks from "../../../components/Services/ResultsBlocks";
import FAQDropdown from "../../../components/Services/FAQDropdown";
import LocalSEOFAQ from "../../../content/servicePages/faq";
import AuditFormPopup from "../../../components/AuditFormPopup";
import ServiceImage from "../../../components/Services/ServiceImage";
import { text } from "@fortawesome/fontawesome-svg-core";

function LocalSearchEngineOptimization() {
  const seoImage1 = LocalSEO.text1.map((text1) => (
    <ServiceImage 
    image={text1.image} 
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
      <div className="bg-alkaligrey-300 py-24 px-7">
        <div className="flex space-x-0 lg:space-x-14 flex-col lg:flex-row m-auto justify-between items-center max-w-7xl">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/free-audit.svg"
              width={500}
              height={450}
              quality={100}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Get a Complementary Local SEO Audit
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

      <TwoColumnLayout style="mb-3" child2={seoImage3} child1={seoText3} />
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
      <TwoColumnLayout
        flexType="reverse"
        style="pt-80 mt-3 bg-alkaligrey-300"
        child1={seoImage4}
        child2={seoText4}
      />
      <ServiceLeadSection
        style="bg-alkali-500 py-24"
        title="We're Here to Realize Your Vision"
        text="Do you have an idea and vision for your website but not sure where to start? Our team of professionals are standing by to answer any questions you may have. Whether you need a free audit of your current website or want to discuss specifics of a new WordPress website build, we look forward to serving you!"
        buttonText="Schedule a Discovery Call"
      />
      <TwoColumnLayout style="py-24" child2={seoImage5} child1={seoText5} />
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
