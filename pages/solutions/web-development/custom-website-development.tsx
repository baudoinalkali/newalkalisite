import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCaretUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import ServiceLeadSection from "../../../components/ServiceLeadSection";
import TestimonialSlider from "../../../components/TestimonialSlider";
import TestimonialSlide from "../../../components/TestimonialSlide";
import Testimonials, { CustomSlide } from "../../../content/testimonials";
import Custom from "../../../content/servicePages/custom";
import Integration from "../../../components/Integration";
import TwoColumnLayout from "../../../components/TwoColumnLayout";
import StandardTextBlock from "../../../components/StandardTextBlock";
import ServiceHeroContent from "../../../content/servicePages/serviceHeroContent";
import ServiceHero from "../../../components/Services/ServiceHero";
import CarroScreenImages from "../../../content/clientPages/screenImages";
import ResponsiveScreens from "../../../components/ResponsiveScreens";
import Image from "next/image";
import CombinedNavigation from "../../../components/Navigation/CombinedNavigation";
import FAQDropdown from "../../../components/Services/FAQDropdown";
import ServiceImage from "../../../components/Services/ServiceImage";
import Head from "next/head";
import ClientScheduleCTA from "../../../components/Clients/ClientScheduleCTA";
import FAQContainer from "../../../components/Services/FAQContainer";

function WordPressWebsiteDevelopment() {

  const section1Image = Custom.section1.map((customData) => (
    <ServiceImage
      image={customData.image}
      altText={customData.altText}
      imageAngle="none"
      key={customData.image}
      width={customData.width}
      height={customData.height}
    />
  ));

  const section1Text = Custom.section1.map((customData) => (
    <StandardTextBlock
      titleLength="max-w-lg"
      title={customData.title}
      text={customData.text}
      key={customData.title}
    />
  ));

  const customBuiltImage = Custom.customBuilt.map((customData) => (
    <ServiceImage
      image={customData.image}
      altText={customData.altText}
      imageAngle="none"
      key={customData.image}
      width={customData.width}
      height={customData.height}
    />
  ));

  const customBuiltText = Custom.customBuilt.map((customData) => (
    <StandardTextBlock
      title={customData.title}
      text={customData.text}
      key={customData.title}
    />
  ));

  const responsiveDesignImage = Custom.responsiveDesign.map(
    (customData) => (
      <ServiceImage
        image={customData.image}
        altText={customData.altText}
        imageAngle="none"
        key={customData.image}
        width={customData.width}
        height={customData.height}
      />
    )
  );

  const responsiveDesignText = Custom.responsiveDesign.map(
    (customData) => (
      <StandardTextBlock
        titleLength="max-w-md"
        title={customData.title}
        text={customData.text}
        key={customData.title}
      />
    )
  );

  const seoImage = Custom.seo.map((customData) => (
    <ServiceImage
      image={customData.image}
      altText={customData.altText}
      imageAngle="none"
      key={customData.image}
      width={customData.width}
      height={customData.height}
    />
  ));

  const seoText = Custom.seo.map((customData) => (
    <StandardTextBlock
      title={customData.title}
      text={customData.text}
      key={customData.title}
    />
  ));

  const userExperienceImage = Custom.userExperience.map((customData) => (
    <ServiceImage
      image={customData.image}
      altText={customData.altText}
      imageAngle="none"
      key={customData.image}
      width={customData.width}
      height={customData.height}
    />
  ));

  const userExperienceText = Custom.userExperience.map((customData) => (
    <StandardTextBlock
      title={customData.title}
      text={customData.text}
      key={customData.title}
    />
  ));

  const performanceImage = Custom.performance.map((customData) => (
    <ServiceImage
      image={customData.image}
      altText={customData.altText}
      imageAngle="none"
      key={customData.image}
      width={customData.width}
      height={customData.height}
    />
  ));

  const performanceText = Custom.performance.map((customData) => (
    <StandardTextBlock
      title={customData.title}
      text={customData.text}
      key={customData.title}
    />
  ));

  const conversionImage = Custom.conversion.map((customData) => (
    <ServiceImage
      image={customData.image}
      altText={customData.altText}
      imageAngle="none"
      key={customData.image}
      width={customData.width}
      height={customData.height}
    />
  ));

  return (
    <div className="m-auto overflow-hidden">
      <Head>
        <title>Custom Website Development | Nothing Beats Bespoke</title>
        <meta name="description" content="We build custom websites that are specifically tailored to your business, processes, and needs, not something that is one-size fits all." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Custom Website Development | Nothing Beats Bespoke" />
        <meta property="og:description" content="We build custom websites that are specifically tailored to your business, processes, and needs, not something that is one-size fits all." />
        <meta property="og:url" content="https://www.alkalidesigns.com/solutions/web-development/custom-website-development/" />
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
        {Custom.headline.map((customData) => (
          <ServiceHero
            sub={customData.subTitle}
            title={customData.title}
            titleLength={customData.titleLength}
            key={customData.title}
          />
        ))}
      </div>
      <TwoColumnLayout
        flexType="reverse"
        child1={section1Text}
        child2={section1Image}
      />
      <TwoColumnLayout
        style="bg-alkaligrey-300"
        child2={customBuiltText}
        child1={customBuiltImage}
      />
      <TwoColumnLayout
        flexType="reverse"
        child2={responsiveDesignImage}
        child1={responsiveDesignText}
      />

      <TwoColumnLayout
        style="bg-alkaligrey-300"
        child2={seoText}
        child1={seoImage}
      />
      <TwoColumnLayout
        flexType="reverse"
        child1={userExperienceText}
        child2={userExperienceImage}
      />
      <ClientScheduleCTA
        brandColor="#00baff"
      />
      {CarroScreenImages.carro.map((customData) => (
        <ResponsiveScreens
          style="py-24 lg:py-36 overflow-hidden"
          link="/clients/"
          brandColor="#00baff"
          buttonName="View Projects"
          desktopLeft="/images/clients/ben/desktop-left.png"
          desktopRight="/images/clients/chattr/section1.png"
          tablet="/images/clients/ben/tablet.png"
          phone="/images/clients/chattr/mobile.png"
          desktopLeftLink={customData.desktopLeftLink}
          desktopRightLink={customData.desktopRightLink}
          tabletLink={customData.tabletLink}
          phoneLink={customData.phoneLink}
          key={customData.desktopLeft}
        />
      ))}
      <div className="pt-72 lg:pt-72 -mt-64 py-24 bg-alkaligrey-300 mb-14 lg:mb-0">
        <h2 className="text-4xl md:text-5xl pb-7 text-center font-bold m-auto leading-normal px-7">
          Integration Is the Name of the Game
        </h2>
        <p className="text-center max-w-4xl m-auto text-lg font-normal pt-4 px-7">
          A website shouldn't only be an extension of your business or brand
          that looks good. It should fit within and optimize your existing
          business processes. Integrations shouldn't be an afterthought, but a
          central part of your next website build.
        </p>
        <Integration style="pt-24" />
      </div>
      <FAQContainer name="Custom Development" titleLength="max-w-4xl">
        {Custom.faq.map((customData) => (
          <FAQDropdown
            question={customData.question}
            answer={customData.answer}
            key={customData.question}
          />
        ))}
      </FAQContainer>
    </div>
  );
}

export default WordPressWebsiteDevelopment;
