import ServiceHero from "../../../components/Services/ServiceHero";
import ServiceHeroContent from "../../../content/servicePages/serviceHeroContent";
import StandardImage from "../../../components/StandardImage";
import StandardTextBlock from "../../../components/StandardTextBlock";
import TwoColumnLayout from "../../../components/TwoColumnLayout";
import Testimonials from "../../../content/testimonials";
import Image from "next/image";
import CombinedNavigation from "../../../components/Navigation/CombinedNavigation";
import SocialServices from "../../../content/servicePages/serviceBlocks";
import ServiceBlocks from "../../../components/Services/ServiceBlocks";
import ResultsBlocks from "../../../components/Services/ResultsBlocks";
import SEOResults from "../../../content/servicePages/resultsBlock";
import SocialFAQ from "../../../content/servicePages/faq";
import SocialMarketing from "../../../content/servicePages/social";
import SocialIntegrations from "../../../content/servicePages/integrationContent";
import AuditFormPopup from "../../../components/AuditFormPopup";
import { text } from "@fortawesome/fontawesome-svg-core";
import ServiceImage from "../../../components/Services/ServiceImage";
import dynamic from 'next/dynamic';
import AuditSection from "../../../components/Services/AuditSection";
const TestimonialSlide = dynamic(() => import("../../../components/TestimonialSlide"));
const TestimonialSlider = dynamic(() => import("../../../components/TestimonialSlider"));
const FAQDropdown = dynamic(() => import("../../../components/Services/FAQDropdown"));

function SocialMediaMarketing() {
  const socialImage1 = SocialMarketing.text1.map((text1) => (
    <ServiceImage
      image={text1.image}
      imageAngle="none"
      width={text1.width}
      height={text1.height}
    />
  ));

  const socialText1 = SocialMarketing.text1.map((text1) => (
    <StandardTextBlock title={text1.title} text={text1.text} />
  ));

  const socialImage2 = SocialMarketing.text2.map((text2) => (
    <ServiceImage
      image={text2.image}
      imageAngle="none"
      width={text2.width}
      height={text2.height}
    />
  ));

  const socialText2 = SocialMarketing.text2.map((text2) => (
    <StandardTextBlock title={text2.title} text={text2.text} />
  ));

  const socialImage3 = SocialMarketing.text3.map((text3) => (
    <ServiceImage
      image={text3.image}
      imageAngle="none"
      width={text3.width}
      height={text3.height}
    />
  ));

  const socialText3 = SocialMarketing.text3.map((text3) => (
    <StandardTextBlock title={text3.title} text={text3.text} />
  ));

  const socialImage4 = SocialMarketing.text4.map((text4) => (
    <ServiceImage
      image={text4.image}
      imageAngle="none"
      width={text4.width}
      height={text4.height}
    />
  ));

  const socialText4 = SocialMarketing.text4.map((text4) => (
    <StandardTextBlock title={text4.title} text={text4.text} />
  ));

  return (
    <div className="overflow-hidden">
      <CombinedNavigation
        headerBackground="bg-alkali-500"
        headerColor="white"
      />
      {SocialMarketing.headline.map((headline) => (
        <ServiceHero
          sub={headline.subTitle}
          title={headline.title}
          titleLength={headline.titleLength}
        />
      ))}
      <TwoColumnLayout style="" child2={socialImage1} child1={socialText1} />
      <TwoColumnLayout
        flexType="reverse"
        style="bg-alkaligrey-300"
        child1={socialImage2}
        child2={socialText2}
      />
      <div className="py-24 px-7">
        <h6 className="text-4xl md:text-5xl text-center font-bold m-auto leading-tight pb-24">
          Our Social Media Marketing Services
        </h6>
        <div className="grid grid-cols md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto gap-x-14 gap-y-14">
          {SocialMarketing.features.map((features) => (
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
        style="bg-white pb-100 mb-3"
        child2={socialImage3}
        child1={socialText3}
      />
      <div className="-mt-72 px-7">
        <h3 className="text-4xl md:text-5xl text-center font-bold m-auto leading-tight pb-24">
          Hear It Straight From Our Clients
        </h3>
      </div>
      <div className="relative z-20 mb-2">
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
        style="bg-alkaligrey-300 pt-80 -mt-48"
        child1={socialImage4}
        child2={socialText4}
      />
      <div className="py-24 px-7">
        <h6 className="text-4xl md:text-5xl pb-24 text-center font-bold m-auto leading-tight">
          Platforms We Work With
        </h6>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-y-10 max-w-7xl m-auto">
          {SocialIntegrations.social.map((social) => (
            <div className="relative m-auto" style={{ fontSize: "0" }}>
              <Image
                height={144}
                width={144}
                quality={100}
                className="object-center object-cover pointer-events-none rounded-full duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                src={`/images/icons/${social.fileName}.svg`}
                alt={social.altText}
              />
              <div className="IntegrationIconContainer relative z-1">
                <div className="IntegrationIcon text-center py-16 m-auto shadow-2xl h-36 w-36 rounded-full bg-center">
                  <span className="IconSpan transition duration-500 pointer-events-none shadow-2xl relative-30">
                    {social.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="py-24 max-w-7xl m-auto">
          <h6 className="text-3xl md:text-4xl pb-7 text-center font-bold m-auto leading-tight px-7">
            Frequently Asked Questions About Our Social Media Marketing Services
          </h6>
          <div className="w-full px-4 pt-16">
            <div className="p-2 mx-auto rounded-2xl">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10">
                {SocialMarketing.faq.map((faq) => (
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

export default SocialMediaMarketing;
