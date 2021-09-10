import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCaretUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Testimonials from "../../../content/testimonials";
import Ecommerce from "../../../content/servicePages/ecommerce";
import TwoColumnLayout from "../../../components/TwoColumnLayout";
import StandardTextBlock from "../../../components/StandardTextBlock";
import ServiceHeroContent from "../../../content/servicePages/serviceHeroContent";
import ServiceHero from "../../../components/Services/ServiceHero";
import CarroScreenImages from "../../../content/clientPages/screenImages";
import Image from "next/image";
import CombinedNavigation from "../../../components/Navigation/CombinedNavigation";
import FAQDropdown from "../../../components/Services/FAQDropdown";
import ServiceBlocks from "../../../components/Services/ServiceBlocks";
import ServiceImage from "../../../components/Services/ServiceImage";
import dynamic from 'next/dynamic';
import AuditSection from "../../../components/Services/AuditSection";
import Head from "next/head";
import FAQContainer from "../../../components/Services/FAQContainer";
const TestimonialSlide = dynamic(() => import("../../../components/TestimonialSlide"));
const TestimonialSlider = dynamic(() => import("../../../components/TestimonialSlider"));
const ResponsiveScreens = dynamic(() => import("../../../components/ResponsiveScreens"));
const Integration = dynamic(() => import("../../../components/Integration"));

function EcommerceWebsiteDevelopment() {
  const image1 = Ecommerce.text1.map((ecommerceData) => (
    <ServiceImage
      image={ecommerceData.image}
      altText={ecommerceData.altText}
      imageAngle="none"
      height={ecommerceData.height}
      width={ecommerceData.width}
    />
  ));

  const text1 = Ecommerce.text1.map((ecommerceData) => (
    <StandardTextBlock
      title={ecommerceData.title}
      text={ecommerceData.text}
    />
  ));

  const image2 = Ecommerce.text2.map((ecommerceData) => (
    <ServiceImage
      image={ecommerceData.image}
      altText={ecommerceData.altText}
      height={ecommerceData.height}
      width={ecommerceData.width}
      imageAngle="none" />
  ));

  const text2 = Ecommerce.text2.map((ecommerceData) => (
    <StandardTextBlock
      title={ecommerceData.title}
      titleLength="max-w-md"
      text={ecommerceData.text}
    />
  ));

  const image3 = Ecommerce.text3.map((ecommerceData) => (
    <ServiceImage
      image={ecommerceData.image}
      altText={ecommerceData.altText}
      height={ecommerceData.height}
      width={ecommerceData.width}
      imageAngle="none" />
  ));

  const text3 = Ecommerce.text3.map((ecommerceData) => (
    <StandardTextBlock 
    title={ecommerceData.title} 
    text={ecommerceData.text} 
    />
  ));

  const image4 = Ecommerce.text4.map((ecommerceData) => (
    <ServiceImage
      image={ecommerceData.image}
      altText={ecommerceData.altText}
      height={ecommerceData.height}
      width={ecommerceData.width}
      imageAngle="none" />
  ));

  const text4 = Ecommerce.text4.map((ecommerceData) => (
    <StandardTextBlock 
    title={ecommerceData.title} 
    text={ecommerceData.text} 
    />
  ));

  const image5 = Ecommerce.text5.map((ecommerceData) => (
    <ServiceImage
      image={ecommerceData.image}
      altText={ecommerceData.altText}
      height={ecommerceData.height}
      width={ecommerceData.width}
      imageAngle="none" />
  ));

  const text5 = Ecommerce.text5.map((ecommerceData) => (
    <StandardTextBlock
      title={ecommerceData.title}
      titleLength="max-w-sm"
      text={ecommerceData.text}
    />
  ));


  return (
    <div className="m-auto overflow-hidden">
      <Head>
        <title>E-commerce Website Development | Confidently Sell Online</title>
        <meta name="description" content="At Alkali we build e-commerce websites that drive conversions and fit within your existing business processes." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="E-commerce Website Development | Confidently Sell Online" />
        <meta property="og:description" content="At Alkali we build e-commerce websites that drive conversions and fit within your existing business processes." />
        <meta property="og:url" content="/" />
        <meta property="og:site_name" content="Alkali" />
        <meta property="article:modified_time" content="2021-08-05T14:33:32+00:00" />
        <meta property="og:image" content="/images/facebook-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <CombinedNavigation
          headerBackground="bg-alkali-500"
          headerColor="white"
        />
        {ServiceHeroContent.ecommerce.map((ecommerceData) => (
          <ServiceHero
            sub={ecommerceData.sub}
            title={ecommerceData.title}
            backgroundImg={ecommerceData.backgroundImg}
          />
        ))}
      </div>
      <TwoColumnLayout
        style=""
        flexType="reverse"
        child2={image1}
        child1={text1}
      />
      <div className="py-24 bg-alkaligrey-300 px-7">
        <h6 className="text-4xl md:text-5xl text-center font-bold m-auto leading-tight pb-24">
          Our E-commerce Services
        </h6>
        <div className="grid grid-cols md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto gap-x-14 gap-y-14">
          {Ecommerce.features.map((ecommerceData) => (
            <ServiceBlocks
              serviceTitle={ecommerceData.serviceTitle}
              serviceText={ecommerceData.serviceText}
              image={ecommerceData.image}
              altText={ecommerceData.altText}
            />
          ))}
        </div>
      </div>
      <AuditSection
        backgroundColor=""
        serviceName="Complimentary Ecommerce Audit"
        serviceDescription="Every successful engagement begins with an audit. 
        Allow us to provide you a comprehensive audit of your existing e-commerce site, completely 
        free of charge. We will analyze your website and provide actionable insights as well as recommendations 
        if you're looking for a fresh start."
        buttonName="Request Free Audit"
        portalId="20442125"
        formId="2bc8f42e-ed09-4557-a783-275a9c10158e"
      />
      <div className="bg-alkaligrey-300">
        <TwoColumnLayout
          style=""
          flexType="reverse"
          child1={image2}
          child2={text2}
        />
        <TwoColumnLayout
          style="bg-white"
          child1={text3}
          child2={image3}
        />
        <TwoColumnLayout
          flexType="reverse"
          style=""
          child2={text4}
          child1={image4}
        />
        <TwoColumnLayout
          style="bg-white"
          flexType="reverse"
          child2={image5}
          child1={text5}
        />
      </div>
      <div className="py-24 bg-alkaligrey-300 bg-white mb-14 lg:mb-0">
        <h6 className="text-4xl md:text-5xl pb-7 text-center font-bold m-auto leading-normal px-7">
          Keep Your Store Connected
        </h6>
        <p className="text-center max-w-4xl m-auto text-lg font-normal pt-4 px-7">
          Platforms such as Shopify, WooCommerce, BigCommerce, and Magento offer countless
          third-party integrations. These integrations provide endless opportunities to streamline
          your workflow, ultimately allowing you to spend more time growing your business.
        </p>
        <Integration style="pt-24" />
      </div>
      <FAQContainer name="E-commerce" titleLength="max-w-4xl">
        {Ecommerce.faq.map((ecommerceData) => (
          <FAQDropdown
            question={ecommerceData.question}
            answer={ecommerceData.answer}
            key={ecommerceData.question}
          />
        ))}
      </FAQContainer>
    </div>
  );
}

export default EcommerceWebsiteDevelopment;
