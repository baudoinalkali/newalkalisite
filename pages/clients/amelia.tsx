import Modal from '../../components/Modal'
import ResponsiveScreens from '../../components/ResponsiveScreens'
import ClientCardContainer from '../../components/Clients/ClientCardContainer'
import TestimonialSlide from '../../components/TestimonialSlide'
import AmeliaSlide from '../../content/testimonials'
import TwoColumnLayout from '../../components/TwoColumnLayout'
import StandardImage from '../../components/StandardImage'
import StandardTextBlock from '../../components/StandardTextBlock'
import ClientMainPage from '../../content/clientPages/clientMainPage'
import ClientCard from '../../components/Clients/ClientCard'
import AmeliaContent from '../../content/clientPages/clientContentBlocks'
import AmeliaScreenImages from '../../content/clientPages/screenImages'
import AmeliaHeroContent from '../../content/clientPages/clientHeroContent'
import ClientHeader from '../../components/Clients/ClientHeader'
import ClientAbout from '../../components/Clients/ClientAbout'

function Amelia() {
  const ameliaGoalImage = AmeliaContent.amelia.goal.map(amelia =>
    <StandardImage
      imageAngle="left"
      image={amelia.image}
      key={`ameliaGoalImageClientBlocksFor${amelia.image}`}
    />
  )

  const ameliaGoalText = AmeliaContent.amelia.goal.map(amelia =>
    <StandardTextBlock
      sub={amelia.sub}
      title={amelia.title}
      text={amelia.text}
      key={`ameliaGoalTextClientBlocksFor${amelia.title}`}
    />
  )

  const ameliaResultImage = AmeliaContent.amelia.result.map(amelia =>
    <StandardImage
      imageAngle="right"
      image={amelia.image}
      key={`ameliaResultImageClientBlocksFor${amelia.image}`}
    />
  )

  const ameliaResultText = AmeliaContent.amelia.result.map(amelia =>
    <StandardTextBlock
      sub={amelia.sub}
      title={amelia.title}
      text={amelia.text}
      key={`ameliaResultTextClientBlocksFor${amelia.title}`}
    />
  )

  return <div className="m-auto">
    <div className="carro-bg">
      {AmeliaHeroContent.amelia.map(amelia =>
        <ClientHeader
          sub={amelia.sub}
          backgroundOverlay={amelia.backgroundOverlay}
          title={amelia.title}
          backgroundImg={amelia.backgroundImg}
          service={amelia.service}
          serviceSlug={amelia.serviceSlug}
          style="py-40"
          key={`ameliaAmeliaHeroContentFor${amelia.title}`}
        />
      )}
    </div>

    {AmeliaHeroContent.amelia.map(amelia =>
        <ClientAbout
          name={amelia.name}
          about={amelia.about}
          slug={amelia.title}
          key={`ameliaAmeliaHeroContentFor${amelia.title}`}
        />
      )}

    <TwoColumnLayout
      flexType="reverse"
      style="bg-alkaligrey-300 py-24 pb-80 mb-6"
      child1={ameliaGoalImage}
      child2={ameliaGoalText}
    >
    </TwoColumnLayout>

    <div className="mx-14">
      <div className="pb-24 -mt-56">
        {AmeliaSlide.amelia.map(amelia =>
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
        )}
      </div>
    </div>

    <TwoColumnLayout
      style="bg-white py-24 mb-6"
      child1={ameliaResultText}
      child2={ameliaResultImage}
    />

    <div className="p-4 py-24 bg-alkali-500">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl m-auto mx-3 xl:mx-auto">
        <div><h3 className="text-4xl font-bold max-w-7xl m-auto text-white leading-tight text-center mb-14 lg:mb-0">We're here to realize your vision.</h3></div>
        <div className="">
          <Modal
            style="p-3 px-6 font-semibold text-alkaligrey-800 shadow-2xl rounded-md transition duration-500 ease-in-out bg-white hover:bg-alkaligrey-700"
            text="Schedule a call"
          />
        </div>
      </div>
    </div>
    
    {AmeliaScreenImages.amelia.map(amelia =>
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
    )}
  </div>
}

export default Amelia