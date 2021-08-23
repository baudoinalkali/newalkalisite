import Modal from "../../components/Modal";
import ClientCardContainer from "../../components/Clients/ClientCardContainer";
import Testimonials from "../../content/testimonials";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import StandardImage from "../../components/StandardImage";
import StandardTextBlock from "../../components/StandardTextBlock";
import CarroContent from "../../content/clientPages/clientContent";
import ClientHeader from "../../components/Clients/ClientHeader";
import ClientAbout from "../../components/Clients/ClientAbout";
import dynamic from 'next/dynamic';
const TestimonialSlide = dynamic(() => import("../../components/TestimonialSlide"));
const ResponsiveScreens = dynamic(() => import("../../components/ResponsiveScreens"));

function Carro() {
  const carroGoalImage = CarroContent.carro.section1.map((Carro) => (
    <StandardImage
      imageAngle="left"
      image={Carro.image}
      key={`carroGoalImageClientBlocksFor${Carro.image}`}
    />
  ));

  const carroGoalText = CarroContent.carro.section1.map((Carro) => (
    <StandardTextBlock
      sub={Carro.sub}
      title={Carro.title}
      text={Carro.text}
      key={`carroGoalTextClientBlocksFor${Carro.title}`}
    />
  ));

  const carroResultImage = CarroContent.carro.section2.map((carro) => (
    <StandardImage
      imageAngle="right"
      image={carro.image}
      key={`carroResultImageClientBlocksFor${carro.image}`}
    />
  ));

  const carroResultText = CarroContent.carro.section2.map((carro) => (
    <StandardTextBlock
      sub={carro.sub}
      title={carro.title}
      text={carro.text}
      key={`carroResultTextClientBlocksFor${carro.title}`}
    />
  ));

  return (
    <div className="m-auto overflow-hidden">
      <div className="carro-bg">
        {CarroContent.carro.hero.map((carro) => (
          <ClientHeader
            sub={carro.industry}
            title={carro.name}
            service={carro.service}
            serviceSlug={carro.serviceSlug}
            heroImage={carro.image}
            heroImageWidth={carro.width}
            heroImageHeight={carro.height}
            style="py-24"
          />
        ))}
      </div>
      {CarroContent.carro.about.map((carro) => (
        <ClientAbout name={carro.name} about={carro.bio} slug={carro.slug} />
      ))}

      <TwoColumnLayout
        flexType="reverse"
        style="bg-alkaligrey-300 py-24 lg:py-36 pb-72 lg:pb-80 mb-6"
        child1={carroGoalImage}
        child2={carroGoalText}
      ></TwoColumnLayout>

      <div className="mx-7">
        <div className="pb-0 lg:pb-10 -mt-56">
          {Testimonials.carro.map((carro) => (
            <TestimonialSlide
              style="max-w-7xl m-auto shadow-2xl rounded-md"
              background={carro.background}
              brandColor={carro.brandColor}
              company={carro.company}
              key={`designTestimonialFor${carro.company}`}
              logo={carro.logo}
              logoWidth={carro.logoWidth}
              logoHeight={carro.logoHeight}
              altText={carro.altText}
              name={carro.name}
              quote={carro.quote}
            />
          ))}
        </div>
      </div>

      <TwoColumnLayout
        style="py-24 pb-20 lg:pb-24 mb-0 lg:mb-6"
        child1={carroResultText}
        child2={carroResultImage}
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

      {CarroContent.carro.screens.map((carro) => (
        <ResponsiveScreens
          style="py-24 lg:py-36 overflow-hidden"
          link="https://getcarro.com"
          buttonName="Visit Site"
          brandColor="#00baff"
          desktopLeft={carro.desktopLeft}
          desktopRight={carro.desktopRight}
          tablet={carro.tablet}
          phone={carro.phone}
          desktopLeftLink={carro.desktopLeftLink}
          desktopRightLink={carro.desktopRightLink}
          tabletLink={carro.tabletLink}
          phoneLink={carro.phoneLink}
        />
      ))}
    </div>
  );
}

export default Carro;
