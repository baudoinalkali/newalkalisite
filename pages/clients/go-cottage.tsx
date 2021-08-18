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
      <div className="">
        {GoCottageContent.goCottage.hero.map((goCottage) => (
          <ClientHeader
            sub={goCottage.industry}
            title={goCottage.name}
            backgroundImg={goCottage.backgroundImg}
            backgroundOverlay={goCottage.backgroundOverlay}
            service={goCottage.service}
            serviceSlug={goCottage.serviceSlug}
            style="py-40"
            key={`ameliaAmeliaHeroContentFor${goCottage.name}`}
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
        style="bg-alkaligrey-300 py-24 pb-80 mb-6"
        child1={carroGoalImage}
        child2={carroGoalText}
      ></TwoColumnLayout>

      <div className="px-7">
        <div className="pb-24 -mt-56">
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

      {GoCottageContent.goCottage.screens.map((goCottage) => (
        <ResponsiveScreens
          style="py-24 overflow-hidden"
          link="https://chattr.ai"
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
    </div>
  );
}

export default Carro;
