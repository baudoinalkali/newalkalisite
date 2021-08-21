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
    <div className="m-auto">
      <div className="carro-bg">
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

      <div className="p-4 py-24 bg-alkali-500">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl m-auto mx-3 xl:mx-auto">
          <div>
            <h3 className="text-4xl font-bold max-w-7xl m-auto text-white leading-tight text-center mb-14 lg:mb-0">
              We're here to realize your vision.
            </h3>
          </div>
          <div className="">
            <Modal
              style="p-3 px-6 font-semibold text-alkaligrey-800 shadow-2xl rounded-md transition duration-500 ease-in-out bg-white hover:bg-alkaligrey-700"
              text="Schedule a call"
            />
          </div>
        </div>
      </div>

      {AmeliaScreenImages.amelia.map((amelia) => (
        <ResponsiveScreens
          style="py-24 overflow-hidden"
          link="https://getcarro.com"
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
    </div>
  );
}

export default Amelia;
