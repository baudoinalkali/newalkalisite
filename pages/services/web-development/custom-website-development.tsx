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

function WordPressWebsiteDevelopment() {
  const customBuiltImage = Custom.customBuilt.map((customBuilt) => (
    <ServiceImage
      image={customBuilt.image}
      altText={customBuilt.altText}
      imageAngle="none"
      key={customBuilt.image}
      width={customBuilt.width}
      height={customBuilt.height}
    />
  ));

  const customBuiltText = Custom.customBuilt.map((customBuilt) => (
    <StandardTextBlock
      title={customBuilt.title}
      text={customBuilt.text}
      key={customBuilt.title}
    />
  ));

  const responsiveDesignImage = Custom.responsiveDesign.map(
    (responsiveDesign) => (
      <ServiceImage
        image={responsiveDesign.image}
        altText={responsiveDesign.altText}
        imageAngle="none"
        key={responsiveDesign.image}
        width={responsiveDesign.width}
        height={responsiveDesign.height}
      />
    )
  );

  const responsiveDesignText = Custom.responsiveDesign.map(
    (responsiveDesign) => (
      <StandardTextBlock
        title={responsiveDesign.title}
        text={responsiveDesign.text}
        key={responsiveDesign.title}
      />
    )
  );

  const seoImage = Custom.seo.map((seo) => (
    <ServiceImage
      image={seo.image}
      altText={seo.altText}
      imageAngle="none"
      key={seo.image}
      width={seo.width}
      height={seo.height}
    />
  ));

  const seoText = Custom.seo.map((seo) => (
    <StandardTextBlock title={seo.title} text={seo.text} key={seo.title} />
  ));

  const userExperienceImage = Custom.userExperience.map((userExperience) => (
    <ServiceImage
      image={userExperience.image}
      altText={userExperience.altText}
      imageAngle="none"
      key={userExperience.image}
      width={userExperience.width}
      height={userExperience.height}
    />
  ));

  const userExperienceText = Custom.userExperience.map((userExperience) => (
    <StandardTextBlock
      title={userExperience.title}
      text={userExperience.text}
      key={userExperience.title}
    />
  ));

  const performanceImage = Custom.performance.map((performance) => (
    <ServiceImage
      image={performance.image}
      altText={performance.altText}
      imageAngle="none"
      key={performance.image}
      width={performance.width}
      height={performance.height}
    />
  ));

  const performanceText = Custom.performance.map((performance) => (
    <StandardTextBlock
      title={performance.title}
      text={performance.text}
      key={performance.title}
    />
  ));

  const conversionImage = Custom.conversion.map((conversion) => (
    <ServiceImage
      image={conversion.image}
      altText={conversion.altText}
      imageAngle="none"
      key={conversion.image}
      width={conversion.width}
      height={conversion.height}
    />
  ));

  const conversionText = Custom.conversion.map((conversion) => (
    <StandardTextBlock
      title={conversion.title}
      text={conversion.text}
      key={conversion.title}
    />
  ));

  return (
    <div className="m-auto overflow-hidden">
      <Head>
        <title>Custom Website Development | Nothing Beats Bespoke</title>
        <meta name="description" content="We build custom websites that are specifically tailored to your business, processes, and needs, not something that is one-size fits all." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical"/>
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
        {Custom.headline.map((custom) => (
          <ServiceHero
            sub={custom.subTitle}
            title={custom.title}
            titleLength={custom.titleLength}
            key={custom.title}
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
      <ServiceLeadSection
        style="bg-alkali-500 py-24"
        title="We're Here to Realize Your Vision"
        text="Do you have an idea and vision for your website but not sure where to start? Our team of professionals are standing by to answer any questions you may have. Whether you need a free audit of your current website or want to discuss specifics of a new WordPress website build, we look forward to serving you!"
        buttonText="Schedule a Discovery Call"
      />
      <TwoColumnLayout
        flexType="reverse"
        child1={responsiveDesignImage}
        child2={responsiveDesignText}
      />

      <TwoColumnLayout
        style="bg-alkaligrey-300 pb-100 lg:pb-98 mb-2"
        child1={seoText}
        child2={seoImage}
      />

      <div className="-mt-96 lg:-mt-80 pt-2 px-10 2xl:px-0">
        <h2 className="text-4xl md:text-5xl text-center font-bold m-auto leading-tight pb-14">
          Hear It Straight From Our Clients
        </h2>
      </div>
      <div className="relative z-20">
        <TestimonialSlider>
          {CustomSlide.map((testimonial) => (
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
      <TwoColumnLayout
        style="pt-24 lg:pt-36"
        child1={userExperienceText}
        child2={userExperienceImage}
      />
      {CarroScreenImages.carro.map((carro) => (
        <ResponsiveScreens
          style="pt-0 lg:pt-14 py-36 pb-12 overflow-hidden z-30 relative"
          link="/clients/"
          brandColor="#00baff"
          buttonName="View Projects"
          desktopLeft="/images/clients/ben/desktop-left.png"
          desktopRight="/images/clients/chattr/section1.png"
          tablet="/images/clients/ben/tablet.png"
          phone="/images/clients/chattr/mobile.png"
          desktopLeftLink={carro.desktopLeftLink}
          desktopRightLink={carro.desktopRightLink}
          tabletLink={carro.tabletLink}
          phoneLink={carro.phoneLink}
          key={carro.desktopLeft}
        />
      ))}
      <div className="pt-80 lg:pt-96 -mt-64 py-24 px-14 2xl:px-0 bg-alkaligrey-300">
        <h2 className="text-4xl md:text-5xl pb-7 text-center font-bold m-auto leading-normal">
          Integration Is the Name of the Game
        </h2>
        <p className="text-center max-w-4xl m-auto text-lg font-normal pt-4">
          A website shouldn't only be an extension of your business or brand
          that looks good. It should fit within and optimize your existing
          business processes. Integrations shouldn't be an afterthought, but a
          central part of your next website build.
        </p>
        <Integration style="pt-24 2xl:px-0" />
      </div>
      <div className="py-24 max-w-7xl m-auto">
        <h2 className="text-3xl md:text-4xl pb-7 text-center font-bold m-auto leading-normal">
          Frequently Asked Questions About Our Custom Development
        </h2>
        <div className="w-full px-4 pt-16">
          <div className="p-2 mx-auto bg-white rounded-2xl">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10">
              {WordpressFAQ.wordpress.map((wordpress) => (
                <FAQDropdown
                  question={wordpress.question}
                  answer={wordpress.answer}
                  key={wordpress.question}
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
