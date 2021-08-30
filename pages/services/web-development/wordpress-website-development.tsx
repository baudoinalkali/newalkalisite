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
const TestimonialSlide = dynamic(() => import("../../../components/TestimonialSlide"));
const TestimonialSlider = dynamic(() => import("../../../components/TestimonialSlider"));
const ResponsiveScreens = dynamic(() => import("../../../components/ResponsiveScreens"));
const Integration = dynamic(() => import("../../../components/Integration"));
const FAQDropdown = dynamic(() => import("../../../components/Services/FAQDropdown"));

function WordPressWebsiteDevelopment() {
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
        <link rel="canonical" href="https://new.alkali.cloud/services/web-development/wordpress-website-development/" />
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
        <div className="py-24 px-0 lg:px-14">
          <div className="flex flex-col space-x-0 lg:space-x-14 lg:flex-row m-auto justify-between items-center max-w-7xl">
            <div className="px-10 w-full lg:w-1/2 2xl:px-0 pb-20 lg:pb-0">
              <h2 className="text-4xl md:text-5xl font-bold m-auto leading-tight">
                WordPress Website Development
              </h2>
              <p className="text-alkaligrey-400 max-w-4xl text-lg font-normal pt-7">
                You’ve probably heard of WordPress, but here is the short version: WordPress started as a way for people to create
                blogs easily, but it has evolved so much over the years. It is now the most widely used Content Management System
                (CMS) in the world. Now, it's leveraged by people from all walks of life and all levels of business. From Fortune
                500 companies to someone starting their first blog, WordPress suits a variety of use cases. If you’re looking for
                guidance on if WordPress is suitable for you, we can help! We have been designing, developing, and customizing WordPress
                for years.
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
      <div className="pt-24 px-10 2xl:px-0">
        <h2 className="text-4xl md:text-5xl pb-7 text-center font-bold m-auto leading-tight">
          Not All Websites Are Created Equal
        </h2>
        <p className="text-center max-w-4xl m-auto text-lg font-normal pt-4">
          An unfortunate reality of WordPress websites, particularly template
          based build are the overeliance on plugins, lack of customization
        </p>
      </div>
      <TwoColumnLayout
        flexType="reverse"
        child1={responsiveDesignImage}
        child2={responsiveDesignText}
      />

      <TwoColumnLayout
        style="bg-alkaligrey-300 pb-100 mb-2"
        child1={seoText}
        child2={seoImage}
      />

      <div className="-mt-72 px-10 2xl:px-0">
        <h2 className="text-4xl md:text-5xl text-center font-bold m-auto leading-tight pb-14">
          Hear It Straight From Our Clients
        </h2>
      </div>
      <div className="relative z-20">
        <TestimonialSlider>
          {Testimonials.wordpress.map((testimonial) => (
            <TestimonialSlide
              background={testimonial.background}
              backgroundOverlay={testimonial.backgroundOverlay}
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
        child1={userExperienceText}
        child2={userExperienceImage}
      />

      <TwoColumnLayout
        style="bg-alkaligrey-300"
        flexType="reverse"
        child1={performanceImage}
        child2={performanceText}
      />
      {Wordpress.responsiveScreens.map((responsiveScreens) => (
        <ResponsiveScreens
          style="py-36 pb-12 overflow-hidden z-30 relative"
          link="/clients"
          buttonName="View Projects"
          desktopLeft="/"
          desktopRight="/"
          tablet="/"
          phone="/"
          desktopLeftLink="/"
          desktopRightLink="/"
          tabletLink="/"
          phoneLink="/"
          key="/"
        />
      ))}
      <TwoColumnLayout
        style="bg-alkaligrey-300 z-10 relative -mt-48 pt-72"
        child1={conversionText}
        child2={conversionImage}
      />

      <div className="py-24 px-14 2xl:px-0 bg-white">
        <h2 className="text-4xl md:text-5xl pb-7 text-center font-bold m-auto leading-tight">
          Integration Is the Name of the Game
        </h2>
        <p className="text-center max-w-4xl m-auto text-lg font-normal pt-4">
          A website shouldn't only be an extension of your business or brand
          that looks good. It should fit within and optimize your existing
          business processes. Integrations shouldn't be an afterthought, but a
          central part of your next website build.
        </p>
      </div>
      <Integration style="pb-24 bg-white py-14 2xl:px-0" />
      <div className="py-24 max-w-7xl m-auto">
        <h2 className="text-3xl md:text-4xl pb-7 text-center font-bold m-auto leading-tight">
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
