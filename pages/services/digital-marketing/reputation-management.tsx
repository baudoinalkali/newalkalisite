import ServiceHero from "../../../components/Services/ServiceHero";
import StandardTextBlock from "../../../components/StandardTextBlock";
import TwoColumnLayout from "../../../components/TwoColumnLayout";
import Testimonials from "../../../content/testimonials";
import Image from "next/image";
import CombinedNavigation from "../../../components/Navigation/CombinedNavigation";
import ServiceBlocks from "../../../components/Services/ServiceBlocks";
import SocialFAQ from "../../../content/servicePages/faq";
import ReputationManagement from "../../../content/servicePages/reputation";
import ReputationIntegrations from "../../../content/servicePages/integrationContent";
import ServiceImage from "../../../components/Services/ServiceImage";
import dynamic from 'next/dynamic';
import AuditSection from "../../../components/Services/AuditSection";
import Head from "next/head";
import FAQContainer from "../../../components/Services/FAQContainer";
const TestimonialSlide = dynamic(() => import("../../../components/TestimonialSlide"));
const TestimonialSlider = dynamic(() => import("../../../components/TestimonialSlider"));
const FAQDropdown = dynamic(() => import("../../../components/Services/FAQDropdown"));

function Reputation() {
  const socialImage1 = ReputationManagement.text1.map((reputationData) => (
    <ServiceImage
      image={reputationData.image}
      altText={reputationData.altText}
      imageAngle="none"
      width={reputationData.width}
      height={reputationData.height}
    />
  ));

  const socialText1 = ReputationManagement.text1.map((reputationData) => (
    <StandardTextBlock
      title={reputationData.title}
      text={reputationData.text}
    />
  ));

  const socialImage2 = ReputationManagement.text2.map((reputationData) => (
    <ServiceImage
      image={reputationData.image}
      altText={reputationData.altText}
      imageAngle="none"
      width={reputationData.width}
      height={reputationData.height}
    />
  ));

  const socialText2 = ReputationManagement.text2.map((reputationData) => (
    <StandardTextBlock
      titleLength="max-w-xl"
      title={reputationData.title}
      text={reputationData.text}
    />
  ));

  const socialImage3 = ReputationManagement.text3.map((reputationData) => (
    <ServiceImage
      image={reputationData.image}
      altText={reputationData.altText}
      imageAngle="none"
      width={reputationData.width}
      height={reputationData.height}
    />
  ));

  const socialText3 = ReputationManagement.text3.map((reputationData) => (
    <StandardTextBlock
      titleLength="max-w-lg"
      title={reputationData.title}
      text={reputationData.text}
    />
  ));

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Reputation Management | We Protect You Online</title>
        <meta name="description" content="Alkali provides online reputation mangement services designed to fix, repair, and manage your online presence." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Reputation Management | We Protect You Online" />
        <meta property="og:description" content="Alkali provides online reputation mangement services designed to fix, repair, and manage your online presence." />
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
      {ReputationManagement.headline.map((reputationData) => (
        <ServiceHero
          sub={reputationData.subTitle}
          title={reputationData.title}
          titleLength={reputationData.titleLength}
        />
      ))}
      <TwoColumnLayout
        style=""
        child2={socialImage1}
        child1={socialText1}
      />
      <TwoColumnLayout
        flexType="reverse"
        style="bg-alkaligrey-300"
        child1={socialImage2}
        child2={socialText2}
      />
      <div className="py-24 px-7">
        <h6 className="text-4xl md:text-5xl lg:max-w-md text-center font-bold m-auto leading-tight pb-24">
          Our Social Media Marketing Services
        </h6>
        <div className="grid grid-cols md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto gap-x-14 gap-y-14">
          {ReputationManagement.features.map((reputationData) => (
            <ServiceBlocks
              serviceTitle={reputationData.serviceTitle}
              serviceText={reputationData.serviceText}
              image={reputationData.image}
              altText={reputationData.altText}
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
        style="bg-white"
        child2={socialImage3}
        child1={socialText3}
      />
      <div className="mb-14 lg:mb-0 py-24 bg-alkaligrey-300">
        <h6 className="text-4xl md:text-5xl pb-24 text-center font-bold m-auto leading-normal px-7">
          Platforms We Work With
        </h6>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-y-10 max-w-7xl m-auto">
          {ReputationIntegrations.reputation.map((reputationData) => (
            <div className="relative m-auto" style={{ fontSize: "0" }}>
              <Image
                height={144}
                width={144}
                quality={100}
                className="object-center object-cover pointer-events-none rounded-full duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                src={`/images/icons/${reputationData.fileName}.svg`}
                alt={reputationData.altText}
              />
              <div className="IntegrationIconContainer relative z-1">
                <div className="IntegrationIcon text-center py-16 m-auto shadow-2xl h-36 w-36 rounded-full bg-center">
                  <span className="IconSpan transition duration-500 pointer-events-none shadow-2xl relative-30">
                    {reputationData.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FAQContainer name="Reputation Management" titleLength="max-w-5xl">
        {SocialFAQ.Social.map((reputationData) => (
          <FAQDropdown
            question={reputationData.question}
            answer={reputationData.answer}
            key={reputationData.question}
          />
        ))}
      </FAQContainer>
    </div>
  );
}

export default Reputation;
