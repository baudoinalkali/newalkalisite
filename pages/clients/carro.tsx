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
import ClientScheduleCTA from "../../components/Clients/ClientScheduleCTA";
import clientMainPage from "../../content/clientPages/clientMainPage";
import ClientCard from "../../components/Clients/ClientCard";

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
        {CarroContent.carro.hero.map((hero) => (
          <ClientHeader
            sub={hero.industry}
            title={hero.name}
            services={hero.services}
            heroImage={hero.image}
            heroImageWidth={hero.width}
            heroImageHeight={hero.height}
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
        <div className="pb-4 lg:pb-10 -mt-56">
          {Testimonials.carro.map((carro) => (
            <TestimonialSlide
              style="max-w-7xl m-auto shadow-2xl rounded-md"
              background="/images/clients/carro/carro-testimonial-bg.jpg"
              backgroundOverlay="bg-pink-300"
              brandColor="#F9A8D4"
              company="Carro"
              logo="/images/clients/carro/logo.svg"
              logoWidth="175"
              logoHeight="40"
              altText=" "
              name="Person"
              quote="Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial."
            />
          ))}
        </div>
      </div>

      <TwoColumnLayout
        style="py-24 pb-20 lg:pb-24 mb-0 lg:mb-6"
        child1={carroResultText}
        child2={carroResultImage}
      />
      {CarroContent.carro.about.map((about) => (
        <ClientScheduleCTA
          brandColor={about.brandColor}
        />
      ))}
      {CarroContent.carro.screens.map((carro) => (
        <ResponsiveScreens
          style="py-24 lg:py-36 overflow-hidden"
          link="https://getcarro.com"
          buttonName="Visit Site"
          brandColor="#93469a"
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
