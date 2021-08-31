import ClientCardContainer from "../../components/Clients/ClientCardContainer";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import StandardImage from "../../components/StandardImage";
import StandardTextBlock from "../../components/StandardTextBlock";
import ClientCard from "../../components/Clients/ClientCard";
import BenContent from "../../content/clientPages/clientContent";
import CarroScreenImages from "../../content/clientPages/screenImages";
import ClientHeader from "../../components/Clients/ClientHeader";
import ClientAbout from "../../components/Clients/ClientAbout";
import dynamic from 'next/dynamic';
import ClientScheduleCTA from "../../components/Clients/ClientScheduleCTA";
import clientMainPage from "../../content/clientPages/clientMainPage";
import Head from "next/head";
const TestimonialSlide = dynamic(() => import("../../components/TestimonialSlide"));
const ResponsiveScreens = dynamic(() => import("../../components/ResponsiveScreens"));

function Ben() {
  const carroGoalImage = BenContent.ben.section1.map((ben) => (
    <StandardImage
      altText={ben.altText}
      imageAngle="left"
      image={ben.image}
      key={`carroGoalImageClientBlocksFor${ben.image}`}
    />
  ));

  const carroGoalText = BenContent.ben.section1.map((ben) => (
    <StandardTextBlock
      sub={ben.sub}
      title={ben.title}
      text={ben.text}
      key={`carroGoalTextClientBlocksFor${ben.title}`}
    />
  ));

  const carroResultImage = BenContent.ben.section2.map((ben) => (
    <StandardImage
      altText={ben.altText}
      imageAngle="right"
      image={ben.image}
      key={`carroResultImageClientBlocksFor${ben.image}`}
    />
  ));

  const carroResultText = BenContent.ben.section2.map((ben) => (
    <StandardTextBlock
      sub={ben.sub}
      title={ben.title}
      text={ben.text}
      key={`carroResultTextClientBlocksFor${ben.title}`}
    />
  ));

  return (
    <div className="m-auto overflow-hidden">
      <Head>
        <title>Blockchain Education Network Project | Alkali</title>
        <meta name="description" content="Learn more about how we transformed Blockchain Education Network's website to better align with their organization's goals." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical"/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blockchain Education Network Project | Alkali" />
        <meta property="og:description" content="Learn more about how we transformed Blockchain Education Network's website to better align with their organization's goals." />
        <meta property="og:url" content="/" />
        <meta property="og:site_name" content="Alkali" />
        <meta property="article:modified_time" content="2021-08-05T14:33:32+00:00" />
        <meta property="og:image" content="/images/facebook-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="">
        {BenContent.ben.hero.map((hero) => (
          <ClientHeader
            sub={hero.industry}
            title={hero.name}
            backgroundColor="#ff936b"
            services={hero.services}
            heroImage={hero.image}
            heroImageWidth={hero.width}
            heroImageHeight={hero.height}
            style="py-20 lg:py-20"
          />
        ))}
      </div>
      {BenContent.ben.about.map((ben) => (
        <ClientAbout
          name={ben.name}
          about={ben.bio}
          slug={ben.slug}
          brandColor={ben.brandColor}
        />
      ))}

      <TwoColumnLayout
        flexType="reverse"
        style="bg-alkaligrey-300 py-24 lg:py-36 pb-80 lg:pb-80 mb-6"
        child1={carroGoalImage}
        child2={carroGoalText}
      ></TwoColumnLayout>

      <div className="px-7">
      <div className="pb-4 lg:pb-10 client-testimonial-container">
          <TestimonialSlide
            style="max-w-7xl m-auto shadow-2xl rounded-md"
            background="/images/clients/ben/ben-slide-bg.jpg"
            brandColor="#FF936B"
            company="ben"
            logo="/images/clients/ben/logo.svg"
            logoWidth="225"
            logoHeight="71"
            altText=""
            slug="ben"
            name="António Gomes, Director of Operations"
            quote="Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial."
          />
        </div>
      </div>

      <TwoColumnLayout
        style="py-24 pb-20 lg:pb-24 mb-0 lg:mb-6"
        child1={carroResultText}
        child2={carroResultImage}
      />
      {BenContent.ben.about.map((about) => (
        <ClientScheduleCTA
          brandColor={about.brandColor}
        />
      ))}

      {CarroScreenImages.carro.map((carro) => (
        <ResponsiveScreens
        style="py-24 lg:py-36 overflow-hidden"
        link="https://ben.ai"
          buttonName="Visit Site"
          brandColor="#ff936b"
          desktopLeft="/images/clients/ben/desktop-left.png"
          desktopRight="/images/clients/ben/desktop-right.png"
          tablet="/images/clients/ben/tablet.png"
          phone="/images/clients/ben/mobile.png"
          desktopLeftLink="https://ben.ai"
          desktopRightLink="https://ben.ai/about"
          tabletLink="https://ben.ai/pricing"
          phoneLink="https://ben.ai/product"
        />
      ))}
      <section className="bg-alkaligrey-300 pt-96 -mt-96">
        <h3 className="text-center text-4xl md:text-5xl font-bold max-w-4xl m-auto mb-14 lg:mb-20 leading-normal">
          Other Projects
        </h3>
        <div className="max-w-7xl m-auto -mb-20">
          <ClientCardContainer>
            {clientMainPage.slice(3, 6).map((clientMainPage, idx) => (
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

export default Ben;
