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
const TestimonialSlide = dynamic(() => import("../../components/TestimonialSlide"));
const ResponsiveScreens = dynamic(() => import("../../components/ResponsiveScreens"));

function Amelia() {
  const ameliaGoalImage = BobtailContent.bobtail.section1.map((amelia) => (
    <StandardImage
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
    <div className="m-auto">
      <div className="">
        {BobtailContent.bobtail.hero.map((bobtail) => (
          <ClientHeader
            sub={bobtail.industry}
            title={bobtail.name}
            backgroundImg={bobtail.backgroundImg}
            backgroundOverlay={bobtail.backgroundOverlay}
            service={bobtail.service}
            serviceSlug={bobtail.serviceSlug}
            style="py-40"
            key={`ameliaAmeliaHeroContentFor${bobtail.name}`}
          />
        ))}
      </div>

      {BobtailContent.bobtail.about.map((bobtail) => (
        <ClientAbout
          name={bobtail.name}
          about={bobtail.bio}
          slug={bobtail.name}
          key={`ameliaAmeliaHeroContentFor${bobtail.name}`}
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
          {BobtailSlide.bobtail.map((bobtail) => (
            <TestimonialSlide
              style="max-w-7xl m-auto shadow-2xl rounded-md"
              background={bobtail.background}
              backgroundOverlay={bobtail.backgroundOverlay}
              brandColor={bobtail.brandColor}
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

      {BobtailContent.bobtail.screens.map((amelia) => (
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
