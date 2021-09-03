import ServiceHero from "../../../components/Services/ServiceHero";
import StandardTextBlock from "../../../components/StandardTextBlock";
import TwoColumnLayout from "../../../components/TwoColumnLayout";
import Testimonials from "../../../content/testimonials";
import Image from "next/image";
import CombinedNavigation from "../../../components/Navigation/CombinedNavigation";
import ServiceBlocks from "../../../components/Services/ServiceBlocks";
import SocialMarketing from "../../../content/servicePages/social";
import SocialIntegrations from "../../../content/servicePages/integrationContent";
import ServiceImage from "../../../components/Services/ServiceImage";
import dynamic from 'next/dynamic';
import AuditSection from "../../../components/Services/AuditSection";
import Head from "next/head";
const TestimonialSlide = dynamic(() => import("../../../components/TestimonialSlide"));
const TestimonialSlider = dynamic(() => import("../../../components/TestimonialSlider"));
const FAQDropdown = dynamic(() => import("../../../components/Services/FAQDropdown"));

function SocialMediaMarketing() {
  const socialImage1 = SocialMarketing.text1.map((text1) => (
    <ServiceImage
      image={text1.image}
      altText={text1.altText}
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
      altText={text2.altText}
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
      altText={text3.altText}
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
      altText={text4.altText}
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
      <Head>
        <title>Social Media Marketing | It's Good to Be Social</title>
        <meta name="description" content="We help share your story, organically connect with your audience, and drive leads using popular social platforms." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical"/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Social Media Marketing | It's Good to Be Social" />
        <meta property="og:description" content="We help share your story, organically connect with your audience, and drive leads using popular social platforms." />
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
        style="bg-white mb-3"
        child2={socialImage3}
        child1={socialText3}
      />
      <TwoColumnLayout
        flexType="reverse"
        style="bg-alkaligrey-300"
        child1={socialImage4}
        child2={socialText4}
      />
      <div className="py-24 px-7">
        <h6 className="text-4xl md:text-5xl pb-24 text-center font-bold m-auto leading-normal">
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
          <h6 className="text-3xl md:text-4xl pb-7 text-center font-bold m-auto leading-normal px-7">
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
    </div>
  );
}

export default SocialMediaMarketing;
