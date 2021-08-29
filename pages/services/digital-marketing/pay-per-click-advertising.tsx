import ServiceHero from "../../../components/Services/ServiceHero";
import ServiceHeroContent from "../../../content/servicePages/serviceHeroContent";
import StandardImage from "../../../components/StandardImage";
import StandardTextBlock from "../../../components/StandardTextBlock";
import PPC from "../../../content/servicePages/payPerClick";
import TwoColumnLayout from "../../../components/TwoColumnLayout";
import Modal from "../../../components/Modal";
import Testimonials from "../../../content/testimonials";
import CombinedNavigation from "../../../components/Navigation/CombinedNavigation";
import PPCServices from "../../../content/servicePages/serviceBlocks";
import ServiceBlocks from "../../../components/Services/ServiceBlocks";
import PPCFAQ from "../../../content/servicePages/faq";
import AuditFormPopup from "../../../components/AuditFormPopup";
import ServiceImage from "../../../components/Services/ServiceImage";
import dynamic from 'next/dynamic';
import AuditSection from "../../../components/Services/AuditSection";
import Head from "next/head";
const TestimonialSlide = dynamic(() => import("../../../components/TestimonialSlide"));
const TestimonialSlider = dynamic(() => import("../../../components/TestimonialSlider"));
const FAQDropdown = dynamic(() => import("../../../components/Services/FAQDropdown"));

function PayPerClick() {
  const seoImage1 = PPC.text1.map((text1) => (
    <ServiceImage
      image={text1.image}
      imageAngle="none"
      width={text1.width}
      height={text1.height}
    />
  ));

  const seoText1 = PPC.text1.map((text1) => (
    <StandardTextBlock title={text1.title} text={text1.text} />
  ));

  const seoImage2 = PPC.text2.map((text2) => (
    <ServiceImage
      image={text2.image}
      imageAngle="none"
      width={text2.width}
      height={text2.height}
    />
  ));

  const seoText2 = PPC.text2.map((text2) => (
    <StandardTextBlock title={text2.title} text={text2.text} />
  ));

  const seoImage3 = PPC.text3.map((text3) => (
    <ServiceImage
      image={text3.image}
      imageAngle="none"
      width={text3.width}
      height={text3.height}
    />
  ));

  const seoText3 = PPC.text3.map((text3) => (
    <StandardTextBlock title={text3.title} text={text3.text} />
  ));

  const seoImage4 = PPC.text4.map((text4) => (
    <ServiceImage
      image={text4.image}
      imageAngle="none"
      width={text4.width}
      height={text4.height}
    />
  ));

  const seoText4 = PPC.text4.map((text4) => (
    <StandardTextBlock title={text4.title} text={text4.text} />
  ));

  const seoImage5 = PPC.text5.map((text5) => (
    <ServiceImage
      image={text5.image}
      imageAngle="none"
      width={text5.width}
      height={text5.height}
    />
  ));

  const seoText5 = PPC.text5.map((text5) => (
    <StandardTextBlock title={text5.title} text={text5.text} />
  ));

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Pay Per Click | Drive Results Instantly</title>
        <meta name="description" content="With optimized and data-driven PPC campaigns we help drive traffic and conversions immediately." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="/" />
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
      {PPC.headline.map((headline) => (
        <ServiceHero
          sub={headline.subTitle}
          title={headline.title}
          titleLength={headline.titleLength}
        />
      ))}
      <TwoColumnLayout style="" child2={seoImage1} child1={seoText1} />
      <TwoColumnLayout
        flexType="reverse"
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
          {PPC.features.map((features) => (
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
        child2={seoImage3}
        child1={seoText3}
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
        style="pt-80 bg-alkaligrey-300"
        child1={seoImage4}
        child2={seoText4}
      />
      <div className="">
        <div className="py-36 max-w-7xl m-auto px-7">
          <h6 className="text-4xl md:text-5xl pb-7 max-w-3xl m-auto text-center font-bold m-auto leading-tight">
            Frequently Asked Questions About Our SEO Services
          </h6>
          <div className="w-full pt-16">
            <div className="mx-auto rounded-2xl">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-20 gap-y-10">
                {PPC.faq.map((faq) => (
                  <FAQDropdown
                    question={faq.question}
                    answer={faq.answer} />
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

export default PayPerClick;
