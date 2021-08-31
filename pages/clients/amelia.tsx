import ClientCardContainer from "../../components/Clients/ClientCardContainer";
import AmeliaSlide from "../../content/testimonials";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import StandardImage from "../../components/StandardImage";
import StandardTextBlock from "../../components/StandardTextBlock";
import ClientCard from "../../components/Clients/ClientCard";
import AmeliaContent from "../../content/clientPages/clientContent";
import ClientHeader from "../../components/Clients/ClientHeader";
import ClientAbout from "../../components/Clients/ClientAbout";
import dynamic from 'next/dynamic';
import ClientScheduleCTA from "../../components/Clients/ClientScheduleCTA";
import clientMainPage from "../../content/clientPages/clientMainPage";
import Head from "next/head";
const TestimonialSlide = dynamic(() => import("../../components/TestimonialSlide"));
const ResponsiveScreens = dynamic(() => import("../../components/ResponsiveScreens"));

function Amelia() {
  const ameliaGoalImage = AmeliaContent.amelia.section1.map((section1) => (
    <StandardImage
      imageAngle="left"
      altText={section1.altText}
      image={section1.image}
      key={`ameliaGoalImageClientBlocksFor${section1.image}`}
    />
  ));

  const ameliaGoalText = AmeliaContent.amelia.section1.map((section1) => (
    <StandardTextBlock
      sub={section1.sub}
      title={section1.title}
      text={section1.text}
      key={`ameliaGoalTextClientBlocksFor${section1.title}`}
    />
  ));

  const ameliaResultImage = AmeliaContent.amelia.section2.map((section2) => (
    <StandardImage
      imageAngle="right"
      altText={section2.altText}
      image={section2.image}
      key={`ameliaResultImageClientBlocksFor${section2.image}`}
    />
  ));

  const ameliaResultText = AmeliaContent.amelia.section2.map((section2) => (
    <StandardTextBlock
      sub={section2.sub}
      title={section2.title}
      text={section2.text}
      key={`ameliaResultTextClientBlocksFor${section2.title}`}
    />
  ));

  return (
    <div className="m-auto overflow-hidden">
      <Head>
        <title>Homewatch Amelia Project | Alkali</title>
        <meta name="description" content="Learn more about how we helped Homewatch Amelia create their digital presence and branding from scratch." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Homewatch Amelia Project | Alkali" />
        <meta property="og:description" content="Learn more about how we helped Homewatch Amelia create their digital presence and branding from scratch." />
        <meta property="og:url" content="/" />
        <meta property="og:site_name" content="Alkali" />
        <meta property="article:modified_time" content="2021-08-05T14:33:32+00:00" />
        <meta property="og:image" content="/images/facebook-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="">
        {AmeliaContent.amelia.hero.map((hero) => (
          <ClientHeader
            sub={hero.industry}
            title={hero.name}
            backgroundImg={hero.backgroundImg}
            backgroundOverlay={hero.backgroundOverlay}
            services={hero.services}
            heroImage={hero.image}
            heroImageWidth={hero.width}
            heroImageHeight={hero.height}
            style="py-40"
            key={`ameliaAmeliaHeroContentFor${hero.name}`}
          />
        ))}
      </div>

      {AmeliaContent.amelia.about.map((amelia) => (
        <ClientAbout
          name={amelia.name}
          about={amelia.bio}
          slug={amelia.slug}
          key={`ameliaAmeliaHeroContentFor${amelia.name}`}
        />
      ))}

      <TwoColumnLayout
        flexType="reverse"
        style="bg-alkaligrey-300 py-24 lg:py-36 pb-80 lg:pb-80 mb-6"
        child1={ameliaGoalImage}
        child2={ameliaGoalText}
      ></TwoColumnLayout>

      <div className="px-7">
        <div className="pb-4 lg:pb-10 client-testimonial-container">
          {AmeliaSlide.amelia.map((amelia) => (
            <TestimonialSlide
              style="max-w-7xl m-auto shadow-2xl rounded-md"
              brandColor={amelia.brandColor}
              background={amelia.background}
              backgroundOverlay={amelia.backgroundOverlay}
              company={amelia.company}
              slug={amelia.slug}
              key={`designTestimonialFor${amelia.company}`}
              logo={amelia.logo}
              logoWidth={amelia.logoWidth}
              logoHeight={amelia.logoHeight}
              altText={amelia.altText}
              name={amelia.name}
              quote={amelia.quote}
            />
          ))}
        </div>
      </div>

      <TwoColumnLayout
        style="py-24 pb-20 lg:pb-24 mb-0 lg:mb-6"
        child1={ameliaResultText}
        child2={ameliaResultImage}
      />
      {AmeliaContent.amelia.about.map((about) => (
        <ClientScheduleCTA
          brandColor={about.brandColor}
        />
      ))}
      {AmeliaContent.amelia.screens.map((screens) => (
        <ResponsiveScreens
          style="py-24 lg:py-36 overflow-hidden"
          link="https://getcarro.com"
          brandColor="#4f80c2"
          buttonName="Visit Site"
          desktopLeft={screens.desktopLeft}
          desktopRight={screens.desktopRight}
          tablet={screens.tablet}
          phone={screens.phone}
          desktopLeftLink={screens.desktopLeftLink}
          desktopRightLink={screens.desktopRightLink}
          tabletLink={screens.tabletLink}
          phoneLink={screens.phoneLink}
        />
      ))}
      <section className="bg-alkaligrey-300 pt-96 -mt-96">
        <h3 className="text-center text-4xl md:text-5xl font-bold max-w-4xl m-auto mb-14 lg:mb-20 leading-normal">
          Other Projects
        </h3>
        <div className="max-w-7xl m-auto -mb-20">
          <ClientCardContainer>
            {clientMainPage.slice(0, 3).map((clientMainPage, idx) => (
              <ClientCard
                key={idx}
                name={clientMainPage.name}
                backgroundColor={clientMainPage.backgroundColor}
                backgroundImage={clientMainPage.backgroundImage}
                slug={clientMainPage.slug}
                industry={clientMainPage.industry}
              />
            ))}
          </ClientCardContainer>
        </div>
        <div className="flex items-center justify-center group space-x-3">
          <a href="/clients" className="font-medium text-lg text-alkaligrey-900">View All Projects</a>
          <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:transform duration-500 group-hover:translate-x-3 h-6 w-6 text-alkaligrey-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
        <div className="pb-24 lg:pb-36"></div>
      </section>
    </div>
  );
}

export default Amelia;
