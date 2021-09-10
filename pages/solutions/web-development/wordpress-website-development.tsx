import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCaretUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Testimonials from "../../../content/testimonials";
import Wordpress from "../../../content/servicePages/wordpress";
import TwoColumnLayout from "../../../components/TwoColumnLayout";
import ServiceImage from "../../../components/Services/ServiceImage";
import StandardTextBlock from "../../../components/StandardTextBlock";
import ServiceHero from "../../../components/Services/ServiceHero";
import Image from "next/image";
import CombinedNavigation from "../../../components/Navigation/CombinedNavigation";
import dynamic from 'next/dynamic';
import AuditSection from "../../../components/Services/AuditSection";
import Head from "next/head";
import ClientScheduleCTA from "../../../components/Clients/ClientScheduleCTA";
import FAQContainer from "../../../components/Services/FAQContainer";
const TestimonialSlide = dynamic(() => import("../../../components/TestimonialSlide"));
const TestimonialSlider = dynamic(() => import("../../../components/TestimonialSlider"));
const ResponsiveScreens = dynamic(() => import("../../../components/ResponsiveScreens"));
const Integration = dynamic(() => import("../../../components/Integration"));
const FAQDropdown = dynamic(() => import("../../../components/Services/FAQDropdown"));

function WordPressWebsiteDevelopment() {
  const wordpressImage = Wordpress.wordpressWebsiteDevelopment.map((wordpressData) => (
    <ServiceImage
      image={wordpressData.image}
      altText={wordpressData.altText}
      imageAngle="none"
      height={wordpressData.height}
      width={wordpressData.width}
      key={wordpressData.image}
    />
  ));

  const wordpressText = Wordpress.wordpressWebsiteDevelopment.map((wordpressData) => (
    <StandardTextBlock
      title={wordpressData.title}
      text={wordpressData.text}
      key={wordpressData.title}
    />
  ));

  const customBuiltImage = Wordpress.customBuilt.map((wordpressData) => (
    <ServiceImage
      image={wordpressData.image}
      altText={wordpressData.altText}
      imageAngle="none"
      height={wordpressData.height}
      width={wordpressData.width}
      key={wordpressData.image}
    />
  ));

  const customBuiltText = Wordpress.customBuilt.map((wordpressData) => (
    <StandardTextBlock
      title={wordpressData.title}
      text={wordpressData.text}
      key={wordpressData.title}
    />
  ));

  const responsiveDesignImage = Wordpress.responsiveDesign.map(
    (wordpressData) => (
      <ServiceImage
        image={wordpressData.image}
        altText={wordpressData.altText}
        imageAngle="none"
        height={wordpressData.height}
        width={wordpressData.width}
        key={wordpressData.image}
      />
    )
  );

  const responsiveDesignText = Wordpress.responsiveDesign.map(
    (wordpressData) => (
      <StandardTextBlock
        titleLength="max-w-md"
        title={wordpressData.title}
        text={wordpressData.text}
        key={wordpressData.title}
      />
    )
  );

  const seoImage = Wordpress.seo.map((wordpressData) => (
    <ServiceImage
      image={wordpressData.image}
      altText={wordpressData.altText}
      imageAngle="none"
      height={wordpressData.height}
      width={wordpressData.width}
      key={wordpressData.image}
    />
  ));

  const seoText = Wordpress.seo.map((wordpressData) => (
    <StandardTextBlock
      title={wordpressData.title}
      text={wordpressData.text}
      key={wordpressData.title}
    />
  ));

  const userExperienceImage = Wordpress.userExperience.map((wordpressData) => (
    <ServiceImage
      image={wordpressData.image}
      altText={wordpressData.altText}
      imageAngle="none"
      height={wordpressData.height}
      width={wordpressData.width}
      key={wordpressData.image}
    />
  ));

  const userExperienceText = Wordpress.userExperience.map((wordpressData) => (
    <StandardTextBlock
      title={wordpressData.title}
      titleLength="max-w-xl"
      text={wordpressData.text}
      key={wordpressData.title}
    />
  ));

  const performanceImage = Wordpress.performance.map((wordpressData) => (
    <ServiceImage
      image={wordpressData.image}
      altText={wordpressData.altText}
      imageAngle="none"
      height={wordpressData.height}
      width={wordpressData.width}
      key={wordpressData.image}
    />
  ));

  const performanceText = Wordpress.performance.map((wordpressData) => (
    <StandardTextBlock
      title={wordpressData.title}
      text={wordpressData.text}
      key={wordpressData.title}
    />
  ));

  const conversionImage = Wordpress.conversion.map((wordpressData) => (
    <ServiceImage
      image={wordpressData.image}
      altText={wordpressData.altText}
      imageAngle="none"
      height={wordpressData.height}
      width={wordpressData.width}
      key={wordpressData.image}
    />
  ));

  const conversionText = Wordpress.conversion.map((wordpressData) => (
    <StandardTextBlock
      title={wordpressData.title}
      text={wordpressData.text}
      key={wordpressData.title}
    />
  ));

  return (
    <div className="m-auto overflow-hidden">
      <Head>
        <title>WordPress Website Development | WordPress Experts</title>
        <meta name="description" content="Build a user-friendly, SEO-optimized WordPress website that maximizes your online presence with Alkali's bespoke WordPress solutions." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="WordPress Website Development | WordPress Experts" />
        <meta property="og:description" content="Build a user-friendly, SEO-optimized WordPress website that maximizes your online presence with Alkali's bespoke WordPress solutions." />
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
        {Wordpress.headline.map((wordpressData) => (
          <ServiceHero
            sub={wordpressData.subTitle}
            title={wordpressData.title}
            titleLength={wordpressData.titleLength}
            key={wordpressData.title}
          />
        ))}
      </div>
      <div className="">
        <TwoColumnLayout
                flexType="reverse"
          style=""
          child1={wordpressText}
          child2={wordpressImage}

        />
      </div>
      <TwoColumnLayout
        flexType="reverse"
        style="pb-0 lg:pb-24 bg-alkaligrey-300"
        child1={customBuiltText}
        child2={customBuiltImage}
      />
      <div className="py-24 pt-0 bg-alkaligrey-300 px-10 2xl:px-0">
        <div className="flex flex-col space-x-0 lg:space-x-14 lg:flex-row m-auto justify-between max-w-7xl">
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl md:text-4xl font-bold m-auto leading-tight pt-7">
              Advantages:
            </h3>
            <div className="difference-listG">
              <ul>
                <li className="list-item">
                  Bespoke design tailored to your brand, better serving your marketing objectives and communicating your organization's mission
                </li>
                <li className="list-item">
                  Faster page load times, decreasing important metrics such as bounce rate while improving the overall user experience
                </li>
                <li className="list-item">
                  Custom SEO foundation tailored to your business, improving how search engine crawlers interact with your site
                </li>
                <li className="list-item">
                  Eliminate unnecessary elements that cause clutter and slow down the performance of your website
                </li>
                <li className="list-item">
                  Seamlessly scales with your business
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl md:text-4xl font-bold m-auto leading-tight pt-7">
              Disadvantages:
            </h3>
            <div className="difference-listR">
              <ul>
                <li className="list-item">
                  Longer timeline for completion than a traditional template-based alternative
                </li>
                <li className="list-item">
                  Custom sites require a larger upfront investment than template-based sites
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <AuditSection
        backgroundColor=""
        serviceName="Complimentary Website Audit"
        serviceDescription="Every successful engagement begins with an audit. Allow us to provide you a comprehensive 
        audit completely free of charge. Our digital marketing experts will examine your business's 
        website and provide you with actionable insights."
        buttonName="Request Free Audit"
        portalId="20442125"
        formId="a0ec1e71-c6d7-4a48-9bf0-6172bea03a5a"
      />
      <TwoColumnLayout
        flexType="reverse"
        style="bg-alkaligrey-300"
        child2={responsiveDesignImage}
        child1={responsiveDesignText}
      />
      <TwoColumnLayout
        style="pb-10 lg:pb-36"
        child2={seoText}
        child1={seoImage}
      />
      <div className="pt-10">
        <h2 className="px-7 text-4xl md:text-5xl text-center font-bold m-auto leading-tight pb-14">
          Hear It Straight From Our Clients
        </h2>
        <div className="relative z-20">
          <TestimonialSlider>
            {Testimonials.wordpress.map((wordpressData) => (
              <TestimonialSlide
                background={wordpressData.background}
                brandColor={wordpressData.brandColor}
                company={wordpressData.company}
                key={`designTestimonialFor${wordpressData.company}`}
                logo={wordpressData.logo}
                slug={wordpressData.slug}
                logoWidth={wordpressData.logoWidth}
                logoHeight={wordpressData.logoHeight}
                altText={wordpressData.altText}
                name={wordpressData.name}
                quote={wordpressData.quote}
                slugVisibility="true"
              />
            ))}
          </TestimonialSlider>
        </div>
      </div>
      <TwoColumnLayout
        style="bg-alkaligrey-300 pt-72 lg:pt-82 -mt-48"
        child2={userExperienceText}
        child1={userExperienceImage}
      />

      <TwoColumnLayout
        style=""
        flexType="reverse"
        child2={performanceImage}
        child1={performanceText}
      />
      <ClientScheduleCTA
        brandColor="#00baff"
      />
      {Wordpress.responsiveScreens.map((wordpressData) => (
        <ResponsiveScreens
          style="py-24 lg:py-36 overflow-hidden"
          link={wordpressData.link}
          buttonName="View Projects"
          brandColor={wordpressData.brandColor}
          desktopLeft={wordpressData.desktopLeft}
          desktopRight={wordpressData.desktopRight}
          tablet={wordpressData.tablet}
          phone={wordpressData.phone}
          desktopLeftLink={wordpressData.desktopLeftLink}
          desktopRightLink={wordpressData.desktopRightLink}
          tabletLink={wordpressData.tabletLink}
          phoneLink={wordpressData.phoneLink}
        />
      ))}
      <TwoColumnLayout
        style="bg-alkaligrey-300 pt-96 -mt-96"
        child2={conversionText}
        child1={conversionImage}
      />
      <div className="py-24 pb-0 bg-white">
        <h2 className="text-4xl md:text-5xl pb-7 text-center font-bold m-auto leading-normal px-7 ">
          Integration Is the Name of the Game
        </h2>
        <p className="text-center max-w-4xl m-auto text-lg font-normal pt-4 px-7">
          A website shouldn't only be an extension of your business or brand
          that looks good. It should fit within and optimize your existing
          business processes. Integrations shouldn't be an afterthought, but a
          central part of your next website build.
        </p>
        <Integration style="py-24" />
      </div>
      <FAQContainer name="WordPress Development" titleLength="max-w-5xl">
        {Wordpress.faq.map((wordpressData) => (
          <FAQDropdown
            question={wordpressData.question}
            answer={wordpressData.answer}
            key={wordpressData.question}
          />
        ))}
      </FAQContainer>
    </div>
  );
}

export default WordPressWebsiteDevelopment;
