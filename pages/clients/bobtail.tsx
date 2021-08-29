import Modal from "../../components/Modal";
import ClientCardContainer from "../../components/Clients/ClientCardContainer";
import BobtailSlide from "../../content/testimonials";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import StandardImage from "../../components/StandardImage";
import StandardTextBlock from "../../components/StandardTextBlock";
import ClientMainPage from "../../content/clientPages/clientMainPage";
import ClientCard from "../../components/Clients/ClientCard";
import BobtailContent from "../../content/clientPages/clientContent";
import AmeliaScreenImages from "../../content/clientPages/screenImages";
import BobtailHeroContent from "../../content/clientPages/clientHeroContent";
import ClientHeader from "../../components/Clients/ClientHeader";
import ClientAbout from "../../components/Clients/ClientAbout";
import dynamic from 'next/dynamic';
import ClientScheduleCTA from "../../components/Clients/ClientScheduleCTA";
import clientMainPage from "../../content/clientPages/clientMainPage";
import Head from "next/head";
const TestimonialSlide = dynamic(() => import("../../components/TestimonialSlide"));
const ResponsiveScreens = dynamic(() => import("../../components/ResponsiveScreens"));

function Amelia() {
  const ameliaGoalImage = BobtailContent.bobtail.section1.map((amelia) => (
    <StandardImage
      altText={amelia.altText}
      imageAngle="left"
      image={amelia.image}
      key={`ameliaGoalImageClientBlocksFor${amelia.image}`}
    />
  ));

  const ameliaGoalText = BobtailContent.bobtail.section1.map((amelia) => (
    <StandardTextBlock
      sub={amelia.sub}
      title={amelia.title}
      text={amelia.text}
      key={`ameliaGoalTextClientBlocksFor${amelia.title}`}
    />
  ));

  const ameliaResultImage = BobtailContent.bobtail.section2.map((amelia) => (
    <StandardImage
      altText={amelia.altText}
      imageAngle="right"
      image={amelia.image}
      key={`ameliaResultImageClientBlocksFor${amelia.image}`}
    />
  ));

  const ameliaResultText = BobtailContent.bobtail.section2.map((amelia) => (
    <StandardTextBlock
      sub={amelia.sub}
      title={amelia.title}
      text={amelia.text}
      key={`ameliaResultTextClientBlocksFor${amelia.title}`}
    />
  ));

  return (
    <div className="m-auto overflow-hidden">
      <Head>
        <title>Bobtail Project | Alkali</title>
        <meta name="description" content="Learn more about how we redesigned Bobtail's website to better align with their new branding." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bobtail Project | Alkali" />
        <meta property="og:description" content="Learn more about how we redesigned Bobtail's website to better align with their new branding." />
        <meta property="og:url" content="/" />
        <meta property="og:site_name" content="Alkali" />
        <meta property="article:modified_time" content="2021-08-05T14:33:32+00:00" />
        <meta property="og:image" content="/images/facebook-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="">
        {BobtailContent.bobtail.hero.map((hero) => (
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

      {BobtailContent.bobtail.about.map((bobtail) => (
        <ClientAbout
          name={bobtail.name}
          about={bobtail.bio}
          slug={bobtail.slug}
          key={`ameliaAmeliaHeroContentFor${bobtail.name}`}
        />
      ))}

      <TwoColumnLayout
        flexType="reverse"
        style="bg-alkaligrey-300 py-24 lg:py-36 pb-72 lg:pb-80 mb-6"
        child1={ameliaGoalImage}
        child2={ameliaGoalText}
      ></TwoColumnLayout>

      <div className="mx-14">
        <div className="pb-4 lg:pb-10 -mt-56">
          {BobtailContent.bobtail.testimonial.map((bobtail) => (
            <TestimonialSlide
              style="max-w-7xl m-auto shadow-2xl rounded-md"
              background={bobtail.background}
              backgroundOverlay={bobtail.backgroundOverlay}
              brandColor={bobtail.brandColor}
              slug={bobtail.slug}
              company={bobtail.company}
              key={`designTestimonialFor${bobtail.company}`}
              logo={bobtail.logo}
              logoWidth={bobtail.logoWidth}
              logoHeight={bobtail.logoHeight}
              altText={bobtail.altText}
              name={bobtail.name}
              quote={bobtail.quote}
            />
          ))}
        </div>
      </div>

      <TwoColumnLayout
        style="py-24 pb-20 lg:pb-24 mb-0 lg:mb-6"
        child1={ameliaResultText}
        child2={ameliaResultImage}
      />

      {BobtailContent.bobtail.about.map((about) => (
        <ClientScheduleCTA
          brandColor={about.brandColor}
        />
      ))}

      {BobtailContent.bobtail.screens.map((amelia) => (
        <ResponsiveScreens
          style="py-24 lg:py-36 overflow-hidden"
          link="https://getcarro.com"
          buttonName="Visit Site"
          brandColor="#f6a326"
          desktopLeft={amelia.desktopLeft}
          desktopRight={amelia.desktopRight}
          tablet={amelia.tablet}
          phone={amelia.phone}
          desktopLeftLink={amelia.desktopLeftLink}
          desktopRightLink={amelia.desktopRightLink}
          tabletLink={amelia.tabletLink}
          phoneLink={amelia.phoneLink}
        />
      ))}
      <section className="bg-alkaligrey-300 pt-20 lg:pt-36">
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
          <a href="/clients" className="uppercase font-medium text-alkaligrey-900">View All Projects</a>
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
