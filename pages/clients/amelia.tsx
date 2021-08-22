import Modal from "../../components/Modal";
import ClientCardContainer from "../../components/Clients/ClientCardContainer";
import AmeliaSlide from "../../content/testimonials";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import StandardImage from "../../components/StandardImage";
import StandardTextBlock from "../../components/StandardTextBlock";
import ClientMainPage from "../../content/clientPages/clientMainPage";
import ClientCard from "../../components/Clients/ClientCard";
import AmeliaContent from "../../content/clientPages/clientContent";
import AmeliaScreenImages from "../../content/clientPages/screenImages";
import AmeliaHeroContent from "../../content/clientPages/clientHeroContent";
import ClientHeader from "../../components/Clients/ClientHeader";
import ClientAbout from "../../components/Clients/ClientAbout";
import dynamic from 'next/dynamic';
import ClientScheduleCTA from "../../components/Clients/ClientScheduleCTA";
const TestimonialSlide = dynamic(() => import("../../components/TestimonialSlide"));
const ResponsiveScreens = dynamic(() => import("../../components/ResponsiveScreens"));

function Amelia() {
  const ameliaGoalImage = AmeliaContent.amelia.section1.map((section1) => (
    <StandardImage
      imageAngle="left"
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
      <div className="">
        {AmeliaContent.amelia.hero.map((hero) => (
          <ClientHeader
            sub={hero.industry}
            title={hero.name}
            backgroundImg={hero.backgroundImg}
            backgroundOverlay={hero.backgroundOverlay}
            service={hero.service}
            serviceSlug={hero.serviceSlug}
            heroImage={hero.image}
            heroImageWidth={hero.width}
            heroImageHeight={hero.height}
            style="py-40"
            key={`ameliaAmeliaHeroContentFor${hero.name}`}
          />
        ))}
      </div>

      {AmeliaHeroContent.amelia.map((amelia) => (
        <ClientAbout
          name={amelia.name}
          about={amelia.about}
          slug={amelia.title}
          key={`ameliaAmeliaHeroContentFor${amelia.title}`}
        />
      ))}

      <TwoColumnLayout
        flexType="reverse"
        style="bg-alkaligrey-300 py-24 pb-80 mb-6"
        child1={ameliaGoalImage}
        child2={ameliaGoalText}
      ></TwoColumnLayout>

      <div className="mx-14">
        <div className="pb-24 -mt-56">
          {AmeliaSlide.amelia.map((amelia) => (
            <TestimonialSlide
              style="max-w-7xl m-auto shadow-2xl rounded-md"
              brandColor={amelia.brandColor}
              background={amelia.background}
              backgroundOverlay={amelia.backgroundOverlay}
              company={amelia.company}
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
        style="bg-white py-24 mb-6"
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
          style="py-24 overflow-hidden"
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
      <section className="bg-alkaligrey-300 pt-36">
        <h3 className="text-center text-4xl md:text-5xl font-bold max-w-4xl m-auto mb-20 leading-normal">
          Other Projects
        </h3>
        <div className="max-w-7xl m-auto">
        <ClientCardContainer>
          {ClientMainPage.slice(0,3).map((clientMainPage, idx) => (
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
      </section>
    </div>
  );
}

export default Amelia;
