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
const TestimonialSlide = dynamic(() => import("../../../components/TestimonialSlide"));
const TestimonialSlider = dynamic(() => import("../../../components/TestimonialSlider"));
const ResponsiveScreens = dynamic(() => import("../../../components/ResponsiveScreens"));
const Integration = dynamic(() => import("../../../components/Integration"));
const FAQDropdown = dynamic(() => import("../../../components/Services/FAQDropdown"));

function WordPressWebsiteDevelopment() {
  const wordpressImage = Wordpress.wordpressWebsiteDevelopment.map((wordpressWebsiteDevelopment) => (
    <ServiceImage
      image={wordpressWebsiteDevelopment.image}
      altText={wordpressWebsiteDevelopment.altText}
      imageAngle="none"
      height={wordpressWebsiteDevelopment.height}
      width={wordpressWebsiteDevelopment.width}
      key={wordpressWebsiteDevelopment.image}
    />
  ));

  const wordpressText = Wordpress.wordpressWebsiteDevelopment.map((wordpressWebsiteDevelopment) => (
    <StandardTextBlock
      title={wordpressWebsiteDevelopment.title}
      text={wordpressWebsiteDevelopment.text}
      key={wordpressWebsiteDevelopment.title}
    />
  ));

  const customBuiltImage = Wordpress.customBuilt.map((customBuilt) => (
    <ServiceImage
      image={customBuilt.image}
      altText={customBuilt.altText}
      imageAngle="none"
      height={customBuilt.height}
      width={customBuilt.width}
      key={customBuilt.image}
    />
  ));

  const customBuiltText = Wordpress.customBuilt.map((customBuilt) => (
    <StandardTextBlock
      title={customBuilt.title}
      text={customBuilt.text}
      key={customBuilt.title}
    />
  ));

  const responsiveDesignImage = Wordpress.responsiveDesign.map(
    (responsiveDesign) => (
      <ServiceImage
        image={responsiveDesign.image}
        altText={responsiveDesign.altText}
        imageAngle="none"
        height={responsiveDesign.height}
        width={responsiveDesign.width}
        key={responsiveDesign.image}
      />
    )
  );

  const responsiveDesignText = Wordpress.responsiveDesign.map(
    (responsiveDesign) => (
      <StandardTextBlock
        title={responsiveDesign.title}
        text={responsiveDesign.text}
        key={responsiveDesign.title}
      />
    )
  );

  const seoImage = Wordpress.seo.map((seo) => (
    <ServiceImage
      image={seo.image}
      altText={seo.altText}
      imageAngle="none"
      height={seo.height}
      width={seo.width}
      key={seo.image}
    />
  ));

  const seoText = Wordpress.seo.map((seo) => (
    <StandardTextBlock
      title={seo.title}
      text={seo.text}
      key={seo.title}
    />
  ));

  const userExperienceImage = Wordpress.userExperience.map((userExperience) => (
    <ServiceImage
      image={userExperience.image}
      altText={userExperience.altText}
      imageAngle="none"
      height={userExperience.height}
      width={userExperience.width}
      key={userExperience.image}
    />
  ));

  const userExperienceText = Wordpress.userExperience.map((userExperience) => (
    <StandardTextBlock
      title={userExperience.title}
      text={userExperience.text}
      key={userExperience.title}
    />
  ));

  const performanceImage = Wordpress.performance.map((performance) => (
    <ServiceImage
      image={performance.image}
      altText={performance.altText}
      imageAngle="none"
      height={performance.height}
      width={performance.width}
      key={performance.image}
    />
  ));

  const performanceText = Wordpress.performance.map((performance) => (
    <StandardTextBlock
      title={performance.title}
      text={performance.text}
      key={performance.title}
    />
  ));

  const conversionImage = Wordpress.conversion.map((conversion) => (
    <ServiceImage
      image={conversion.image}
      altText={conversion.altText}
      imageAngle="none"
      height={conversion.height}
      width={conversion.width}
      key={conversion.image}
    />
  ));

  const conversionText = Wordpress.conversion.map((conversion) => (
    <StandardTextBlock
      title={conversion.title}
      text={conversion.text}
      key={conversion.title}
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
        {Wordpress.headline.map((wordpress) => (
          <ServiceHero
            sub={wordpress.subTitle}
            title={wordpress.title}
            titleLength={wordpress.titleLength}
            key={wordpress.title}
          />
        ))}
      </div>
      <div className="">
        <TwoColumnLayout
          style=""
          child1={wordpressText}
          child2={wordpressImage}

        />
      </div>
      <TwoColumnLayout
        style="bg-alkaligrey-300"
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
        serviceName="SEO"
        area1="Full website weview (content, CRO, performance)"
        area2="SEO: Comprehensive on-page audit"
        area3="Digital marketing/reputation management"
        portalId="20442125"
        formId="a7151b69-9aec-4d86-b2bf-577b81ddc8ca"
      />
      <TwoColumnLayout
        flexType="reverse"
        style="bg-alkaligrey-300"
        child1={responsiveDesignImage}
        child2={responsiveDesignText}
      />
      <TwoColumnLayout
        style="pb-20 lg:pb-36"
        child1={seoText}
        child2={seoImage}
      />
      <div className="pt-10">
        <h2 className="px-7 text-4xl md:text-5xl text-center font-bold m-auto leading-tight pb-14">
          Hear It Straight From Our Clients
        </h2>
        <div className="relative z-20">
          <TestimonialSlider>
            {Testimonials.wordpress.map((testimonial) => (
              <TestimonialSlide
                background={testimonial.background}
                backgroundOverlay={testimonial.backgroundOverlay}
                brandColor={testimonial.brandColor}
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
      </div>
      <TwoColumnLayout
        style="bg-alkaligrey-300 pt-72 lg:pt-82 -mt-48"
        child1={userExperienceText}
        child2={userExperienceImage}
      />

      <TwoColumnLayout
        style=""
        flexType="reverse"
        child1={performanceImage}
        child2={performanceText}
      />
      <ClientScheduleCTA
        brandColor="#00baff"
      />
      {Wordpress.responsiveScreens.map((responsiveScreens) => (
        <ResponsiveScreens
          style="py-24 lg:py-36 overflow-hidden"
          link={responsiveScreens.link}
          buttonName="View Projects"
          brandColor={responsiveScreens.brandColor}
          desktopLeft={responsiveScreens.desktopLeft}
          desktopRight={responsiveScreens.desktopRight}
          tablet={responsiveScreens.tablet}
          phone={responsiveScreens.phone}
          desktopLeftLink={responsiveScreens.desktopLeftLink}
          desktopRightLink={responsiveScreens.desktopRightLink}
          tabletLink={responsiveScreens.tabletLink}
          phoneLink={responsiveScreens.phoneLink}
        />
      ))}
      <TwoColumnLayout
        style="bg-alkaligrey-300 pt-96 -mt-96"
        child1={conversionText}
        child2={conversionImage}
      />
      <div className="py-24 pb-0 px-7 bg-white">
        <h2 className="text-4xl md:text-5xl pb-7 text-center font-bold m-auto leading-normal">
          Integration Is the Name of the Game
        </h2>
        <p className="text-center max-w-4xl m-auto text-lg font-normal pt-4">
          A website shouldn't only be an extension of your business or brand
          that looks good. It should fit within and optimize your existing
          business processes. Integrations shouldn't be an afterthought, but a
          central part of your next website build.
        </p>
        <Integration style="py-24 2xl:px-0" />
      </div>
      <div className="py-24 max-w-7xl m-auto">
        <h2 className="text-3xl md:text-4xl pb-7 text-center font-bold m-auto leading-normal">
          Frequently Asked Questions About Our WordPress Development
        </h2>
        <div className="w-full px-4 pt-16">
          <div className="p-2 mx-auto bg-white rounded-2xl">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10">
              {Wordpress.faq.map((faq) => (
                <FAQDropdown
                  question={faq.question}
                  answer={faq.answer}
                  key={faq.question}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordPressWebsiteDevelopment;
