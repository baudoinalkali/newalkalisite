import ServiceHero from "../../../components/Services/ServiceHero";
import StandardTextBlock from "../../../components/StandardTextBlock";
import TwoColumnLayout from "../../../components/TwoColumnLayout";
import Testimonials from "../../../content/testimonials";
import CombinedNavigation from "../../../components/Navigation/CombinedNavigation";
import ServiceBlocks from "../../../components/Services/ServiceBlocks";
import Content from "../../../content/servicePages/contentMarketing";
import ServiceImage from "../../../components/Services/ServiceImage";
import dynamic from 'next/dynamic';
import AuditSection from "../../../components/Services/AuditSection";
import Head from "next/head";
import FAQContainer from "../../../components/Services/FAQContainer";
const TestimonialSlide = dynamic(() => import("../../../components/TestimonialSlide"));
const TestimonialSlider = dynamic(() => import("../../../components/TestimonialSlider"));
const FAQDropdown = dynamic(() => import("../../../components/Services/FAQDropdown"));

function ContentMarketing() {
  const contentImage1 = Content.text1.map((contentData) => (
    <ServiceImage
      image={contentData.image}
      altText={contentData.altText}
      imageAngle="none"
      width={contentData.width}
      height={contentData.height}
    />
  ));

  const contentText1 = Content.text1.map((contentData) => (
    <StandardTextBlock
      title={contentData.title}
      text={contentData.text}
    />
  ));

  const contentImage2 = Content.text2.map((contentData) => (
    <ServiceImage
      image={contentData.image}
      altText={contentData.altText}
      imageAngle="none"
      width={contentData.width}
      height={contentData.height}
    />
  ));

  const contentText2 = Content.text2.map((contentData) => (
    <StandardTextBlock
      title={contentData.title}
      text={contentData.text}
    />
  ));

  const contentImage3 = Content.text3.map((contentData) => (
    <ServiceImage
      image={contentData.image}
      altText={contentData.altText}
      imageAngle="none"
      width={contentData.width}
      height={contentData.height}
    />
  ));

  const contentText3 = Content.text3.map((contentData) => (
    <StandardTextBlock
      titleLength="max-w-lg"
      title={contentData.title}
      text={contentData.text}
    />
  ));

  const contentImage4 = Content.text4.map((contentData) => (
    <ServiceImage
      image={contentData.image}
      altText={contentData.altText}
      imageAngle="none"
      width={contentData.width}
      height={contentData.height}
    />
  ));

  const contentText4 = Content.text4.map((contentData) => (
    <StandardTextBlock
      title={contentData.title}
      text={contentData.text}
    />
  ));

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Content Marketing Services | Make Every Word Count</title>
        <meta name="description" content="Alkali provides professional SEO copywriting services. We invite you to learn more about how we can improve establish content that both customers and search engines love." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" />
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
      <TwoColumnLayout
        flexType="reverse"
        child2={contentImage1}
        child1={contentText1}
      />
      <TwoColumnLayout
        style="bg-alkaligrey-300"
        child1={contentImage2}
        child2={contentText2}
      />
      <div className="py-24 px-7">
        <h6 className="text-4xl md:text-5xl text-center font-bold m-auto leading-tight pb-24">
          Our Content Marketing Services
        </h6>
        <div className="grid grid-cols md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto gap-x-14 gap-y-14">
          {Content.features.map((contentData) => (
            <ServiceBlocks
              serviceTitle={contentData.serviceTitle}
              serviceText={contentData.serviceText}
              image={contentData.image}
              altText={contentData.altText}
            />
          ))}
        </div>
      </div>
      <AuditSection
        backgroundColor="bg-alkaligrey-300"
        serviceName="Complimentary Content Plan"
        serviceDescription="Every successful engagement begins with an audit. Allow us to provide you a comprehensive 
        audit completely free of charge. Our digital marketing experts will examine your business's 
        website and provide you with actionable insights."
        buttonName="Request Free Plan"
        portalId="20442125"
        formId="3919662c-5b9f-4a14-bd17-4abe16f26837"
      />
      <TwoColumnLayout
        flexType="reverse"
        child2={contentImage3}
        child1={contentText3}
      />
      <TwoColumnLayout
        style="mb-14 lg:mb-0 bg-alkaligrey-300"
        child1={contentImage4}
        child2={contentText4}
      />
      <FAQContainer name="Content Marketing" titleLength="max-w-4xl">
        {Content.faq.map((localSEOData) => (
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

export default ContentMarketing;
