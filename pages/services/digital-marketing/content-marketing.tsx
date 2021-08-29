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
import ServiceImage from "../../../components/Services/ServiceImage";
import dynamic from 'next/dynamic';
import AuditSection from "../../../components/Services/AuditSection";
import Head from "next/head";
const TestimonialSlide = dynamic(() => import("../../../components/TestimonialSlide"));
const TestimonialSlider = dynamic(() => import("../../../components/TestimonialSlider"));
const FAQDropdown = dynamic(() => import("../../../components/Services/FAQDropdown"));

function ContentMarketing() {
  const contentImage1 = Content.text1.map((text1) => (
    <ServiceImage
      image={text1.image}
      imageAngle="none "
      width={text1.width}
      height={text1.height}
    />
  ));

  const contentText1 = Content.text1.map((text1) => (
    <StandardTextBlock title={text1.title} text={text1.text} />
  ));

  const contentImage2 = Content.text2.map((text2) => (
    <ServiceImage
      image={text2.image}
      imageAngle="none"
      width={text2.width}
      height={text2.height}
    />
  ));

  const contentText2 = Content.text2.map((text2) => (
    <StandardTextBlock title={text2.title} text={text2.text} />
  ));

  const contentImage3 = Content.text3.map((text3) => (
    <ServiceImage
      image={text3.image}
      imageAngle="none"
      width={text3.width}
      height={text3.height}
    />
  ));

  const contentText3 = Content.text3.map((text3) => (
    <StandardTextBlock title={text3.title} text={text3.text} />
  ));

  const contentImage4 = Content.text4.map((text4) => (
    <ServiceImage
      image={text4.image}
      imageAngle="none"
      width={text4.width}
      height={text4.height}
    />
  ));

  const contentText4 = Content.text4.map((text4) => (
    <StandardTextBlock title={text4.title} text={text4.text} />
  ));

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Content Marketing Services | Make Every Word Count</title>
        <meta name="description" content="Alkali provides professional SEO copywriting services. We invite you to learn more about how we can improve establish content that both customers and search engines love." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Content Marketing Services | Make Every Word Count" />
        <meta property="og:description" content="Alkali provides professional SEO copywriting services. We invite you to learn more about how we can improve establish content that both customers and search engines love." />
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
      {Content.headline.map((headline) => (
        <ServiceHero
          sub={headline.subTitle}
          title={headline.title}
          titleLength={headline.titleLength}
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
          {Content.features.map((features) => (
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
        style="mb-3"
        child2={contentImage3}
        child1={contentText3}
      />
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
        style="pt-80 bg-alkaligrey-300"
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
                {Content.faq.map(
                  (faq) => (
                    <FAQDropdown
                      question={faq.question}
                      answer={faq.answer}
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
