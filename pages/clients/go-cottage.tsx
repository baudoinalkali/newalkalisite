import Modal from "../../components/Modal";
import ClientCardContainer from "../../components/Clients/ClientCardContainer";
import Testimonials from "../../content/testimonials";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import StandardImage from "../../components/StandardImage";
import StandardTextBlock from "../../components/StandardTextBlock";
import ClientMainPage from "../../content/clientPages/clientMainPage";
import ClientCard from "../../components/Clients/ClientCard";
import GoCottageContent from "../../content/clientPages/clientContent";
import CarroScreenImages from "../../content/clientPages/screenImages";
import ChattrHeroContent from "../../content/clientPages/clientHeroContent";
import ClientHeader from "../../components/Clients/ClientHeader";
import ClientAbout from "../../components/Clients/ClientAbout";
import dynamic from 'next/dynamic';
import ClientScheduleCTA from "../../components/Clients/ClientScheduleCTA";
import clientMainPage from "../../content/clientPages/clientMainPage";
import Head from "next/head";
const TestimonialSlide = dynamic(() => import("../../components/TestimonialSlide"));
const ResponsiveScreens = dynamic(() => import("../../components/ResponsiveScreens"));

function Carro() {
  const carroGoalImage = GoCottageContent.goCottage.section1.map(
    (goCottage) => (
      <StandardImage
        imageAngle="left"
        image={goCottage.image}
        key={`carroGoalImageClientBlocksFor${goCottage.image}`}
      />
    )
  );

  const carroGoalText = GoCottageContent.goCottage.section1.map((goCottage) => (
    <StandardTextBlock
      sub={goCottage.sub}
      title={goCottage.title}
      text={goCottage.text}
      key={`carroGoalTextClientBlocksFor${goCottage.title}`}
    />
  ));

  const carroResultImage = GoCottageContent.goCottage.section2.map(
    (goCottage) => (
      <StandardImage
        imageAngle="right"
        image={goCottage.image}
        key={`carroResultImageClientBlocksFor${goCottage.image}`}
      />
    )
  );

  const carroResultText = GoCottageContent.goCottage.section2.map(
    (goCottage) => (
      <StandardTextBlock
        sub={goCottage.sub}
        title={goCottage.title}
        text={goCottage.text}
        key={`carroResultTextClientBlocksFor${goCottage.title}`}
      />
    )
  );

  return (
    <div className="m-auto overflow-hidden">
      <Head>
        <title>Go-Cottage Project | Alkali</title>
        <meta name="description" content="Learn more about how we revitalized Go-Cottage's digital presence to improve user experience." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Go-Cottage Project | Alkali" />
        <meta property="og:description" content="Learn more about how we revitalized Go-Cottage's digital presence to improve user experience." />
        <meta property="og:url" content="/" />
        <meta property="og:site_name" content="Alkali" />
        <meta property="article:modified_time" content="2021-08-05T14:33:32+00:00" />
        <meta property="og:image" content="/images/facebook-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="">
        {GoCottageContent.goCottage.hero.map((hero) => (
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
      {GoCottageContent.goCottage.about.map((goCottage) => (
        <ClientAbout
          name={goCottage.name}
          about={goCottage.bio}
          slug={goCottage.slug}
        />
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
            background="/images/clients/go-cottage/testimonial-slide-bg.jpg"
            brandColor="#778a51"
            company="Chattr"
            logo="/images/clients/go-cottage/logo.svg"
            logoWidth="225"
            logoHeight="80"
            altText=""
            slug="chattr"
            name="Sharon Middendorf, Owner"
            quote="5 stars all the way! Thank you for building our amazing new website. Top notch, professional, on time, responsive. Can't say enough good things about Alkali."
          />
        </div>
      </div>

      <TwoColumnLayout
        style="py-24 pb-20 lg:pb-24 mb-0 lg:mb-6"
        child1={carroResultText}
        child2={carroResultImage}
      />
      {GoCottageContent.goCottage.about.map((about) => (
        <ClientScheduleCTA
          brandColor={about.brandColor}
        />
      ))}
      {GoCottageContent.goCottage.screens.map((goCottage) => (
        <ResponsiveScreens
          style="py-24 lg:py-36 overflow-hidden"
          link="https://go-cottage.com"
          buttonName="Visit Site"
          brandColor="#B3D079"
          desktopLeft={goCottage.desktopLeft}
          desktopRight={goCottage.desktopRight}
          tablet={goCottage.tablet}
          phone={goCottage.phone}
          desktopLeftLink={goCottage.desktopLeftLink}
          desktopRightLink={goCottage.desktopRightLink}
          tabletLink={goCottage.tabletLink}
          phoneLink={goCottage.phoneLink}
        />
      ))}
      <section className="bg-alkaligrey-300 pt-20 lg:pt-36">
        <h3 className="text-center text-4xl md:text-5xl font-bold max-w-4xl m-auto mb-14 lg:mb-20 leading-normal">
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
