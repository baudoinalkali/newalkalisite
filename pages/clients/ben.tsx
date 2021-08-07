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
import BenContent from "../../content/clientPages/clientContent";
import CarroScreenImages from "../../content/clientPages/screenImages";
import BenHeroContent from "../../content/clientPages/clientHeroContent";
import ClientHeader from "../../components/Clients/ClientHeader";
import ClientAbout from "../../components/Clients/ClientAbout";

function Ben() {
  const carroGoalImage = BenContent.ben.section1.map((ben) => (
    <StandardImage
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
      <div className="">
        {BenHeroContent.ben.map((ben) => (
          <ClientHeader
            sub={ben.sub}
            title={ben.title}
            backgroundColor="#FF936B"
            service={ben.service}
            heroImage={ben.heroImage}
            serviceSlug={ben.serviceSlug}
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
        style="bg-alkaligrey-300 py-24 pb-80 mb-6"
        child1={carroGoalImage}
        child2={carroGoalText}
      ></TwoColumnLayout>

      <div className="px-7">
        <div className="pb-24 -mt-56">
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
            name="Jim Schimpf, Founder"
            quote="Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial."
          />
        </div>
      </div>

      <TwoColumnLayout
        style="bg-white py-24 mb-6"
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
              style="p-3 px-6 font-semibold text-white rounded-md transition hover:text-alkali-500 duration-500 ease-in-out border border-white hover:bg-white"
              text="Schedule a call"
            />
          </div>
        </div>
      </div>

      {CarroScreenImages.carro.map((carro) => (
        <ResponsiveScreens
          style="py-36 overflow-hidden"
          link="https://ben.ai"
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
    </div>
  );
}

export default Ben;
