import Modal from "../../components/Modal";
import ResponsiveScreens from "../../components/ResponsiveScreens";
import ClientCardContainer from "../../components/Clients/ClientCardContainer";
import TestimonialSlide from "../../components/TestimonialSlide";
import Testimonials from "../../content/testimonials";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import StandardImage from "../../components/StandardImage";
import StandardTextBlock from "../../components/StandardTextBlock";
import ClientMainPage from "../../content/clientPages/clientMainPage";
import ClientCard from "../../components/Clients/ClientCard";
import THFContent from "../../content/clientPages/clientContent";
import CarroScreenImages from "../../content/clientPages/screenImages";
import ChattrHeroContent from "../../content/clientPages/clientHeroContent";
import ClientHeader from "../../components/Clients/ClientHeader";
import ClientAbout from "../../components/Clients/ClientAbout";

function Carro() {
  const carroGoalImage = THFContent.thf.section1.map((thf) => (
    <StandardImage
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
      <div className="">
        {THFContent.thf.hero.map((thf) => (
          <ClientHeader
            sub={thf.industry}
            title={thf.name}
            backgroundImg={thf.backgroundImg}
            heroImage={thf.image}
            heroImageWidth={thf.width}
            heroImageHeight={thf.height}
            backgroundOverlay={thf.backgroundOverlay}
            service={thf.service}
            serviceSlug={thf.serviceSlug}
            style="py-40"
            key={`ameliaAmeliaHeroContentFor${thf.name}`}
          />
        ))}
      </div>
      {THFContent.thf.about.map((thf) => (
        <ClientAbout name={thf.name} about={thf.bio} slug={thf.slug} />
      ))}

      <TwoColumnLayout
        flexType="reverse"
        style="bg-alkaligrey-300 py-24 pb-80 mb-6"
        child1={carroGoalImage}
        child2={carroGoalText}
      ></TwoColumnLayout>

      <div className="px-7">
        <div className="pb-24 -mt-56">
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
        style="bg-white py-24 mb-6"
        child1={carroResultText}
        child2={carroResultImage}
      />
      <div className="p-4 py-24 bg-clients-chattr">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl m-auto mx-3 xl:mx-auto">
          <div>
            <h3 className="text-4xl font-bold max-w-7xl m-auto text-white leading-tight text-center mb-14 lg:mb-0">
              We're here to realize your vision.
            </h3>
          </div>
          <div className="">
            <Modal
              style="p-3 px-6 font-semibold text-white rounded-md transition hover:text-clients-chattr duration-500 ease-in-out border border-white hover:bg-white"
              text="Schedule a call"
            />
          </div>
        </div>
      </div>

      {THFContent.thf.screens.map((thf) => (
        <ResponsiveScreens
          style="py-24 overflow-hidden"
          link="https://thehidfactory.com"
          buttonName="Visit Name"
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
    </div>
  );
}

export default Carro;
