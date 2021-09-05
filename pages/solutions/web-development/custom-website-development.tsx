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
import WordpressFAQ from "../../../content/servicePages/faq";
import ServiceImage from "../../../components/Services/ServiceImage";
import Head from "next/head";
import ClientScheduleCTA from "../../../components/Clients/ClientScheduleCTA";
import FAQContainer from "../../../components/Services/FAQContainer";

function WordPressWebsiteDevelopment() {
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
        {Custom.headline.map((customData) => (
          <ServiceHero
            sub={customData.subTitle}
            title={customData.title}
            titleLength={customData.titleLength}
            key={customData.title}
          />
        ))}
      </div>
      <div className="">
        <div className="py-24 px-0 lg:px-14">
          <div className="flex flex-col space-x-0 lg:space-x-14 lg:flex-row m-auto justify-between items-center max-w-7xl">
            <div className="px-10 w-full lg:w-1/2 2xl:px-0 pb-20 lg:pb-0">
              <h2 className="text-3xl md:text-4xl font-bold m-auto leading-tight">
                Structured For You From the Start
              </h2>
              <p className="text-alkaligrey-400 max-w-4xl text-lg font-normal pt-7">
                Standing out in a crowded marketplace can be difficult. Our
                specialty is not only driving interested users to your site and
                catching their attention once there but enticing them to engage
                and come back for more. Whether your site is orientated toward
                Sales, Information, Charity, or something else, we’ve seen it
                all, so we do it all. Let our team of talented, inspired
                professionals give your website the attention it deserves,
                leaving you free to devote your attention to what matters to
                you!
              </p>
            </div>
            <div className="z-0 pointer-events-none w-96 md:w-auto">
              <div className="angled-mockup rounded-md shadow-2xl">
                <div className="browser-mockup z-0">
                  <div style={{ fontSize: "0" }}>
                    <Image
                      src="/images/wordpress-stats.png"
                      alt=""
                      className="rounded-b-md"
                      width={588}
                      height={410}
                      quality={100}
                    />
                  </div>
                </div>
                <div className="bg-white stat-container float-right -mr-6 shadow-2xl p-7 rounded-md text-center uppercase font-medium text-sm -mt-14 relative w-80 lg:w-5/6">
                  <p className="pb-4">Wordpress Statistics</p>
                  <div className="flex justify-between items-center max-w-7xl m-auto">
                    <div className="w-1/2 m-auto -ml-3 border-r">
                      <p className="font-bold text-3xl lg:text-5xl pb-4">
                        <FontAwesomeIcon
                          className="text-2xl relative top-0 mr-3"
                          icon={faCaretUp}
                        ></FontAwesomeIcon>
                        40%
                      </p>
                      <p className="text-xs ml-4">Sites Use WordPress</p>
                    </div>
                    <div className="w-1/2 m-auto">
                      <p className="font-bold text-3xl lg:text-5xl pb-4">
                        <FontAwesomeIcon
                          className="text-2xl relative top-0 mr-3"
                          icon={faCaretUp}
                        ></FontAwesomeIcon>
                        150%
                      </p>
                      <p className="text-xs ml-4">Monthly Leads Request</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TwoColumnLayout
        style="bg-alkaligrey-300"
        child1={customBuiltText}
        child2={customBuiltImage}
      />
      <TwoColumnLayout
        flexType="reverse"
        child1={responsiveDesignImage}
        child2={responsiveDesignText}
      />

      <TwoColumnLayout
        style="bg-alkaligrey-300"
        child1={seoText}
        child2={seoImage}
      />
      <TwoColumnLayout
        style=""
        child1={userExperienceText}
        child2={userExperienceImage}
      />
      <ClientScheduleCTA
        brandColor="#00baff"
      />
      {CarroScreenImages.carro.map((customData) => (
        <ResponsiveScreens
          style="py-24 pb-12 overflow-hidden z-30 relative"
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
      <div className="pt-80 lg:pt-96 -mt-64 py-24 bg-alkaligrey-300 mb-14 lg:mb-0">
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
        {WordpressFAQ.wordpress.map((customData) => (
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
