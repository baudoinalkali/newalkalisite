import Modal from "../../components/Modal";
import ClientCardContainer from "../../components/Clients/ClientCardContainer";
import Testimonials from "../../content/testimonials";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import StandardImage from "../../components/StandardImage";
import StandardTextBlock from "../../components/StandardTextBlock";
import ClientMainPage from "../../content/clientPages/clientMainPage";
import ClientCard from "../../components/Clients/ClientCard";
import ChattrContent from "../../content/clientPages/clientContent";
import CarroScreenImages from "../../content/clientPages/screenImages";
import ChattrHeroContent from "../../content/clientPages/clientHeroContent";
import ClientHeader from "../../components/Clients/ClientHeader";
import ClientAbout from "../../components/Clients/ClientAbout";
import dynamic from 'next/dynamic';
const TestimonialSlide = dynamic(() => import("../../components/TestimonialSlide"));
const ResponsiveScreens = dynamic(() => import("../../components/ResponsiveScreens"));

function Carro() {
  const carroGoalImage = ChattrContent.chattr.section1.map((chattr) => (
    <StandardImage
      imageAngle="left"
      image={chattr.image}
      key={`carroGoalImageClientBlocksFor${chattr.image}`}
    />
  ));

  const carroGoalText = ChattrContent.chattr.section1.map((chattr) => (
    <StandardTextBlock
      sub={chattr.sub}
      title={chattr.title}
      text={chattr.text}
      key={`carroGoalTextClientBlocksFor${chattr.title}`}
    />
  ));

  const carroResultImage = ChattrContent.chattr.section2.map((chattr) => (
    <StandardImage
      imageAngle="right"
      image={chattr.image}
      key={`carroResultImageClientBlocksFor${chattr.image}`}
    />
  ));

  const carroResultText = ChattrContent.chattr.section2.map((chattr) => (
    <StandardTextBlock
      sub={chattr.sub}
      title={chattr.title}
      text={chattr.text}
      key={`carroResultTextClientBlocksFor${chattr.title}`}
    />
  ));

  return (
    <div className="m-auto overflow-hidden">
      <div className="">
        {ChattrContent.chattr.hero.map((chattr) => (
          <ClientHeader
            sub={chattr.industry}
            title={chattr.name}
            backgroundColor="#36ad8b"
            service={chattr.service}
            heroImage={chattr.image}
            heroImageWidth={chattr.width}
            heroImageHeight={chattr.height}
            serviceSlug={chattr.serviceSlug}
            style="py-20 lg:py-56"
          />
        ))}
      </div>
      {ChattrContent.chattr.about.map((chattr) => (
        <ClientAbout name={chattr.name} about={chattr.bio} slug={chattr.slug} />
      ))}

      <TwoColumnLayout
        flexType="reverse"
        style="bg-alkaligrey-300 py-24 pb-80 mb-6 "
        child1={carroGoalImage}
        child2={carroGoalText}
      ></TwoColumnLayout>

      <div className="px-7">
        <div className="pb-24 -mt-56">
          <TestimonialSlide
            style="max-w-7xl m-auto shadow-2xl rounded-md"
            background="/images/clients/chattr/chattr-slide-bg.jpg"
            brandColor="#36ad8b"
            company="Chattr"
            logo="/images/clients/chattr/logo.svg"
            logoWidth="200"
            logoHeight="80"
            altText=""
            slug="chattr"
            name="Jim Schimpf, Founder"
            quote="Alkali not only delivered on the technical skills, but they literally acted like one of our team members diving head first, always available, immediate responses, over-communication and adherence to timelines."
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

      {ChattrContent.chattr.screens.map((chattr) => (
        <ResponsiveScreens
          style="py-24 overflow-hidden"
          link="https://chattr.ai"
          buttonName="Visit Site"
          desktopLeft={chattr.desktopLeft}
          desktopRight={chattr.desktopRight}
          tablet={chattr.tablet}
          phone={chattr.phone}
          desktopLeftLink={chattr.desktopLeftLink}
          desktopRightLink={chattr.desktopRightLink}
          tabletLink={chattr.tabletLink}
          phoneLink={chattr.phoneLink}
        />
      ))}
    </div>
  );
}

export default Carro;
