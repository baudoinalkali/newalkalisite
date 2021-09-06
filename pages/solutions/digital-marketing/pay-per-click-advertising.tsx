import ServiceHero from "../../../components/Services/ServiceHero";
import StandardTextBlock from "../../../components/StandardTextBlock";
import PPC from "../../../content/servicePages/payPerClick";
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

function PayPerClick() {
  const seoImage1 = PPC.text1.map((ppcData) => (
    <ServiceImage
      image={ppcData.image}
      altText={ppcData.altText}
      imageAngle="none"
      width={ppcData.width}
      height={ppcData.height}
    />
  ));

  const seoText1 = PPC.text1.map((ppcData) => (
    <StandardTextBlock
      title={ppcData.title}
      text={ppcData.text}
    />
  ));

  const seoImage2 = PPC.text2.map((ppcData) => (
    <ServiceImage
      image={ppcData.image}
      altText={ppcData.altText}
      imageAngle="none"
      width={ppcData.width}
      height={ppcData.height}
    />
  ));

  const seoText2 = PPC.text2.map((ppcData) => (
    <StandardTextBlock
      title={ppcData.title}
      text={ppcData.text}
    />
  ));

  const seoImage3 = PPC.text3.map((ppcData) => (
    <ServiceImage
      image={ppcData.image}
      altText={ppcData.altText}
      imageAngle="none"
      width={ppcData.width}
      height={ppcData.height}
    />
  ));

  const seoText3 = PPC.text3.map((ppcData) => (
    <StandardTextBlock
      titleLength="max-w-md"
      title={ppcData.title}
      text={ppcData.text}
    />
  ));

  const seoImage4 = PPC.text4.map((ppcData) => (
    <ServiceImage
      image={ppcData.image}
      altText={ppcData.altText}
      imageAngle="none"
      width={ppcData.width}
      height={ppcData.height}
    />
  ));

  const seoText4 = PPC.text4.map((ppcData) => (
    <StandardTextBlock
      titleLength="max-w-lg"
      title={ppcData.title}
      text={ppcData.text}
    />
  ));

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Pay Per Click | Drive Results Instantly</title>
        <meta name="description" content="With optimized and data-driven PPC campaigns we help drive traffic and conversions immediately." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pay Per Click | Drive Results Instantly" />
        <meta property="og:description" content="With optimized and data-driven PPC campaigns we help drive traffic and conversions immediately." />
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
      {PPC.headline.map((ppcData) => (
        <ServiceHero
          sub={ppcData.subTitle}
          title={ppcData.title}
          titleLength={ppcData.titleLength}
        />
      ))}
      <TwoColumnLayout
        flexType="reverse"
        child2={seoImage1}
        child1={seoText1}
      />
      <TwoColumnLayout
        style="bg-alkaligrey-300"
        child1={seoImage2}
        child2={seoText2}
      />
      <div className="py-24 px-7">
        <h6 className="text-4xl md:text-5xl text-center max-w-3xl m-auto font-bold m-auto leading-tight">
          AdWords Isn't The Only Game in Town Anymore
        </h6>
        <p className="text-center text-alkaligrey-400 pt-4 text-lg max-w-xl m-auto">
          We can manage your pay-per-click campagins on more than just AdWords.
          See what types of campaigns we can manage for you below:
        </p>
        <div className="grid grid-cols md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto gap-x-14 gap-y-14 pt-20">
          {PPC.features.map((ppcData) => (
            <ServiceBlocks
              serviceTitle={ppcData.serviceTitle}
              serviceText={ppcData.serviceText}
              image={ppcData.image}
              altText={ppcData.altText}
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
        flexType="reverse"
        child2={seoImage3}
        child1={seoText3}
      />
      <TwoColumnLayout
        style="mb-14 lg:mb-0 bg-alkaligrey-300"
        child1={seoImage4}
        child2={seoText4}
      />
      <FAQContainer name="Pay Per Click" titleLength="max-w-4xl">
        {PPC.faq.map((ppcData) => (
          <FAQDropdown
            question={ppcData.question}
            answer={ppcData.answer}
            key={ppcData.question}
          />
        ))}
      </FAQContainer>
    </div>
  );
}

export default PayPerClick;
