import Modal from "../../components/Modal";
import ClientCardContainer from "../../components/Clients/ClientCardContainer";
import AmeliaSlide from "../../content/testimonials";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import StandardImage from "../../components/StandardImage";
import StandardTextBlock from "../../components/StandardTextBlock";
import ClientMainPage from "../../content/clientPages/clientMainPage";
import ClientCard from "../../components/Clients/ClientCard";
import AWPContent from "../../content/clientPages/clientContent";
import AmeliaScreenImages from "../../content/clientPages/screenImages";
import AmeliaHeroContent from "../../content/clientPages/clientHeroContent";
import ClientHeader from "../../components/Clients/ClientHeader";
import ClientAbout from "../../components/Clients/ClientAbout";
import dynamic from 'next/dynamic';
import ClientScheduleCTA from "../../components/Clients/ClientScheduleCTA";
import clientMainPage from "../../content/clientPages/clientMainPage";
const TestimonialSlide = dynamic(() => import("../../components/TestimonialSlide"));
const ResponsiveScreens = dynamic(() => import("../../components/ResponsiveScreens"));

function Amelia() {
  const ameliaGoalImage = AWPContent.awp.section1.map((section1) => (
    <StandardImage
      imageAngle="left"
      image={section1.image}
      key={`ameliaGoalImageClientBlocksFor${section1.image}`}
    />
  ));

  const ameliaGoalText = AWPContent.awp.section1.map((section1) => (
    <StandardTextBlock
      sub={section1.sub}
      title={section1.title}
      text={section1.text}
      key={`ameliaGoalTextClientBlocksFor${section1.title}`}
    />
  ));

  const ameliaResultImage = AWPContent.awp.section2.map((section2) => (
    <StandardImage
      imageAngle="right"
      image={section2.image}
      key={`ameliaResultImageClientBlocksFor${section2.image}`}
    />
  ));

  const ameliaResultText = AWPContent.awp.section2.map((section2) => (
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
        {AWPContent.awp.hero.map((hero) => (
          <ClientHeader
            sub={hero.industry}
            title={hero.name}
            backgroundImg={hero.backgroundImg}
            backgroundOverlay={hero.backgroundOverlay}
            service={hero.service}
            serviceSlug={hero.serviceSlug}
            services={hero.services}
            heroImage={hero.image}
            heroImageWidth={hero.width}
            heroImageHeight={hero.height}
            style="py-40"
            key={`ameliaAmeliaHeroContentFor${hero.name}`}
          />
        ))}
      </div>

      {AWPContent.awp.about.map((awp) => (
        <ClientAbout
          name={awp.name}
          about={awp.bio}
          slug={awp.slug}
          key={`ameliaAmeliaHeroContentFor${awp.name}`}
        />
      ))}

      <TwoColumnLayout
        flexType="reverse"
        style="bg-alkaligrey-300 py-24 lg:py-36 pb-72 lg:pb-80 mb-6"
        child1={ameliaGoalImage}
        child2={ameliaGoalText}
      ></TwoColumnLayout>

      <div className="px-7">
        <div className="pb-4 lg:pb-10 -mt-56">
          {AmeliaSlide.amelia.map((amelia) => (
            <TestimonialSlide
              style="max-w-7xl m-auto shadow-2xl rounded-md"
              background="/images/clients/awp/slide-testimonial-bg.jpg"
              brandColor="#d4d9e2"
              company="Aerial Work Platforms"
              logo="/images/clients/awp/logo.png"
              logoWidth="220"
              logoHeight="104"
              altText=""
              slug="chattr"
              name="Robert Rivera, Founder"
              quote="Alkali not only delivered on the technical skills, but they literally acted like one of our team members diving head first, always available, immediate responses, over-communication and adherence to timelines."
            />
          ))}
        </div>
      </div>

      <TwoColumnLayout
        style="py-24 pb-20 lg:pb-24 mb-0 lg:mb-6"
        child1={ameliaResultText}
        child2={ameliaResultImage}
      />
      {AWPContent.amelia.about.map((about) => (
        <ClientScheduleCTA
          brandColor={about.brandColor}
        />
      ))}
      {AWPContent.amelia.screens.map((screens) => (
        <ResponsiveScreens
          style="py-24 lg:py-36 overflow-hidden"
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

export default Amelia;
