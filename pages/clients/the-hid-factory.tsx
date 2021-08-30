import ClientCardContainer from "../../components/Clients/ClientCardContainer";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import StandardImage from "../../components/StandardImage";
import StandardTextBlock from "../../components/StandardTextBlock";
import ClientCard from "../../components/Clients/ClientCard";
import THFContent from "../../content/clientPages/clientContent";
import ClientHeader from "../../components/Clients/ClientHeader";
import ClientAbout from "../../components/Clients/ClientAbout";
import dynamic from 'next/dynamic';
import ClientScheduleCTA from "../../components/Clients/ClientScheduleCTA";
import clientMainPage from "../../content/clientPages/clientMainPage";
import Head from "next/head";
const TestimonialSlide = dynamic(() => import("../../components/TestimonialSlide"));
const ResponsiveScreens = dynamic(() => import("../../components/ResponsiveScreens"));

function Carro() {
  const carroGoalImage = THFContent.thf.section1.map((thf) => (
    <StandardImage
      altText={thf.altText}
      imageAngle="left"
      image={thf.image}
      key={`carroGoalImageClientBlocksFor${thf.image}`}
    />
  ));

  const carroGoalText = THFContent.thf.section1.map((thf) => (
    <StandardTextBlock
      sub={thf.sub}
      title={thf.title}
      text={thf.text}
      key={`carroGoalTextClientBlocksFor${thf.title}`}
    />
  ));

  const carroResultImage = THFContent.thf.section2.map((thf) => (
    <StandardImage
      altText={thf.altText}
      imageAngle="right"
      image={thf.image}
      key={`carroResultImageClientBlocksFor${thf.image}`}
    />
  ));

  const carroResultText = THFContent.thf.section2.map((thf) => (
    <StandardTextBlock
      sub={thf.sub}
      title={thf.title}
      text={thf.text}
      key={`carroResultTextClientBlocksFor${thf.title}`}
    />
  ));

  return (
    <div className="m-auto overflow-hidden">
      <Head>
        <title>The HID Factory Project | Alkali</title>
        <meta name="description" content="Learn more about how we crafted a digital solution that drove sales and increased internal productivity." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://new.alkali.cloud/clients/the-hid-factory/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The HID Factory Project | Alkali" />
        <meta property="og:description" content="Learn more about how we crafted a digital solution that drove sales and increased internal productivity." />
        <meta property="og:url" content="/" />
        <meta property="og:site_name" content="Alkali" />
        <meta property="article:modified_time" content="2021-08-05T14:33:32+00:00" />
        <meta property="og:image" content="/images/facebook-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="">
        {THFContent.thf.hero.map((hero) => (
          <ClientHeader
            sub={hero.industry}
            title={hero.name}
            backgroundImg={hero.backgroundImg}
            heroImage={hero.image}
            heroImageWidth={hero.width}
            heroImageHeight={hero.height}
            backgroundOverlay={hero.backgroundOverlay}
            services={hero.services}
            style="py-40"
            key={`ameliaAmeliaHeroContentFor${hero.name}`}
          />
        ))}
      </div>
      {THFContent.thf.about.map((thf) => (
        <ClientAbout name={thf.name} about={thf.bio} slug={thf.slug} />
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
            background="/images/clients/the-hid-factory/thf-slide-bg.png"
            brandColor="#0d0d0d"
            company="Chattr"
            logo="/images/clients/the-hid-factory/logo.png"
            logoWidth="275"
            logoHeight="50"
            altText=""
            slug="chattr"
            name="Travis Deleon, Operations Manager"
            quote="Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial."
          />
        </div>
      </div>

      <TwoColumnLayout
        style="py-24 pb-20 lg:pb-24 mb-0 lg:mb-6"
        child1={carroResultText}
        child2={carroResultImage}
      />

      {THFContent.thf.about.map((about) => (
        <ClientScheduleCTA
          brandColor={about.brandColor}
        />
      ))}

      {THFContent.thf.screens.map((thf) => (
        <ResponsiveScreens
          style="py-24 lg:py-36 overflow-hidden"
          link="https://thehidfactory.com"
          buttonName="Visit Name"
          brandColor="#26a8f6"
          desktopLeft={thf.desktopLeft}
          desktopRight={thf.desktopRight}
          tablet={thf.tablet}
          phone={thf.phone}
          desktopLeftLink={thf.desktopLeftLink}
          desktopRightLink={thf.desktopRightLink}
          tabletLink={thf.tabletLink}
          phoneLink={thf.phoneLink}
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

export default Carro;
