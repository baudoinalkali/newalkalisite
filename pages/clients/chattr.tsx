import Modal from "../../components/Modal";
import ClientCardContainer from "../../components/Clients/ClientCardContainer";
import Testimonials from "../../content/testimonials";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import StandardImage from "../../components/StandardImage";
import StandardTextBlock from "../../components/StandardTextBlock";
import ClientMainPage from "../../content/clientPages/clientMainPage";
import ClientCard from "../../components/Clients/ClientCard";
import ChattrContent from "../../content/clientPages/clientContent";
import CarroScreenImages from "../../content/clientPages/screenImages";
import ChattrHeroContent from "../../content/clientPages/clientHeroContent";
import ClientHeader from "../../components/Clients/ClientHeader";
import ClientAbout from "../../components/Clients/ClientAbout";
import dynamic from 'next/dynamic';
import clientMainPage from "../../content/clientPages/clientMainPage";
import ClientScheduleCTA from "../../components/Clients/ClientScheduleCTA";
import Head from "next/head";
const TestimonialSlide = dynamic(() => import("../../components/TestimonialSlide"));
const ResponsiveScreens = dynamic(() => import("../../components/ResponsiveScreens"));

function Carro() {
  const carroGoalImage = ChattrContent.chattr.section1.map((chattr) => (
    <StandardImage
      altText={chattr.altText}
      imageAngle="left"
      image={chattr.image}
      key={`carroGoalImageClientBlocksFor${chattr.image}`}
    />
  ));

  const carroGoalText = ChattrContent.chattr.section1.map((chattr) => (
    <StandardTextBlock
      sub={chattr.sub}
      title={chattr.title}
      text={chattr.text}
      key={`carroGoalTextClientBlocksFor${chattr.title}`}
    />
  ));

  const carroResultImage = ChattrContent.chattr.section2.map((chattr) => (
    <StandardImage
      altText={chattr.altText}
      imageAngle="right"
      image={chattr.image}
      key={`carroResultImageClientBlocksFor${chattr.image}`}
    />
  ));

  const carroResultText = ChattrContent.chattr.section2.map((chattr) => (
    <StandardTextBlock
      sub={chattr.sub}
      title={chattr.title}
      text={chattr.text}
      key={`carroResultTextClientBlocksFor${chattr.title}`}
    />
  ));

  return (
    <div className="m-auto overflow-hidden">
      <Head>
        <title>Chattr Project | Alkali</title>
        <meta name="description" content="Learn more about how we transformed Chattr's online presence putting people first." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Chattr Project | Alkali" />
        <meta property="og:description" content="Learn more about how we transformed Chattr's online presence putting people first." />
        <meta property="og:url" content="/" />
        <meta property="og:site_name" content="Alkali" />
        <meta property="article:modified_time" content="2021-08-05T14:33:32+00:00" />
        <meta property="og:image" content="/images/facebook-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="">
        {ChattrContent.chattr.hero.map((hero) => (
          <ClientHeader
            sub={hero.industry}
            title={hero.name}
            backgroundColor="#36ad8b"
            services={hero.services}
            heroImage={hero.image}
            heroImageWidth={hero.width}
            heroImageHeight={hero.height}
            style="py-20 lg:py-56"
          />
        ))}
      </div>
      {ChattrContent.chattr.about.map((chattr) => (
        <ClientAbout name={chattr.name} about={chattr.bio} slug={chattr.slug} />
      ))}

      <TwoColumnLayout
        flexType="reverse"
        style="bg-alkaligrey-300 py-24 lg:py-36 pb-72 lg:pb-80 mb-6"
        child1={carroGoalImage}
        child2={carroGoalText}
      ></TwoColumnLayout>

      <div className="px-7">
        <div className="pb-4 lg:pb-10 -mt-56">
          <TestimonialSlide
            style="max-w-7xl m-auto shadow-2xl rounded-md"
            background="/images/clients/chattr/chattr-slide-bg.jpg"
            brandColor="#36ad8b"
            company="Chattr"
            logo="/images/clients/chattr/logo.svg"
            logoWidth="200"
            logoHeight="80"
            altText=""
            slug="chattr"
            name="Jim Schimpf, Founder"
            quote="Alkali not only delivered on the technical skills, but they literally acted like one of our team members diving head first, always available, immediate responses, over-communication and adherence to timelines."
          />
        </div>
      </div>

      <TwoColumnLayout
        style="py-24 pb-20 lg:pb-24 mb-0 lg:mb-6"
        child1={carroResultText}
        child2={carroResultImage}
      />
      {ChattrContent.chattr.about.map((about) => (
        <ClientScheduleCTA
          brandColor={about.brandColor}
        />
      ))}

      {ChattrContent.chattr.screens.map((chattr) => (
        <ResponsiveScreens
          style="py-24 lg:py-36 overflow-hidden"
          link="https://chattr.ai"
          buttonName="Visit Site"
          brandColor="#36ad8b"
          desktopLeft={chattr.desktopLeft}
          desktopRight={chattr.desktopRight}
          tablet={chattr.tablet}
          phone={chattr.phone}
          desktopLeftLink={chattr.desktopLeftLink}
          desktopRightLink={chattr.desktopRightLink}
          tabletLink={chattr.tabletLink}
          phoneLink={chattr.phoneLink}
        />
      ))}
      <section className="bg-alkaligrey-300 pt-96 -mt-96">
        <h3 className="text-center pt-10 lg:pt-4 text-4xl md:text-5xl font-bold max-w-4xl m-auto mb-14 lg:mb-20 leading-normal">
          Other Projects
        </h3>
        <div className="max-w-7xl m-auto -mb-20">
          <ClientCardContainer>
            {clientMainPage.slice(1, 4).map((clientMainPage, idx) => (
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

export default Carro;
