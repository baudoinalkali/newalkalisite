import Modal from '../../components/Modal'
import ResponsiveScreens from '../../components/ResponsiveScreens'
import ClientCardContainer from '../../components/Clients/ClientCardContainer'
import TestimonialSlide from '../../components/TestimonialSlide'
import Testimonials from '../../content/testimonials'
import TwoColumnLayout from '../../components/TwoColumnLayout'
import StandardImage from '../../components/StandardImage'
import StandardTextBlock from '../../components/StandardTextBlock'
import ClientMainPage from '../../content/clientPages/clientMainPage'
import ClientCard from '../../components/Clients/ClientCard'
import CarroContent from '../../content/clientPages/clientContentBlocks'
import CarroScreenImages from '../../content/clientPages/screenImages'
import CarroHeroContent from '../../content/clientPages/clientHeroContent'
import ClientHeader from '../../components/Clients/ClientHeader'
import ClientAbout from '../../components/Clients/ClientAbout'

function Carro() {
  const carroGoalImage = CarroContent.carro.goal.map(Carro =>
    <StandardImage
      imageAngle="left"
      image={Carro.image}
      key={`carroGoalImageClientBlocksFor${Carro.image}`}
    />
  )

  const carroGoalText = CarroContent.carro.goal.map(Carro =>
    <StandardTextBlock
      sub={Carro.sub}
      title={Carro.title}
      text={Carro.text}
      key={`carroGoalTextClientBlocksFor${Carro.title}`}
    />
  )

  const carroResultImage = CarroContent.carro.result.map(carro =>
    <StandardImage
      imageAngle="right"
      image={carro.image}
      key={`carroResultImageClientBlocksFor${carro.image}`}
    />
  )

  const carroResultText = CarroContent.carro.result.map(carro =>
    <StandardTextBlock
      sub={carro.sub}
      title={carro.title}
      text={carro.text}
      key={`carroResultTextClientBlocksFor${carro.title}`}
    />
  )

  return <div className="m-auto">
    <div className="carro-bg">
      {CarroHeroContent.carro.map(carro =>
        <ClientHeader
          sub={carro.sub}
          title={carro.title}
          backgroundImg={carro.backgroundImg}
          service={carro.service}
          heroImage={carro.heroImage}
          serviceSlug={carro.serviceSlug}
          style="py-24"
        />
      )}
    </div>
    {CarroHeroContent.carro.map(carro =>
        <ClientAbout
          name={carro.name}
          about={carro.about}
          slug={carro.title}
        />
      )}

    <TwoColumnLayout
      flexType="reverse"
      style="bg-alkaligrey-300 py-24 pb-80 mb-6"
      child1={carroGoalImage}
      child2={carroGoalText}
    >
    </TwoColumnLayout>

    <div className="mx-7">
      <div className="pb-24 -mt-56">
        {Testimonials.carro.map(carro =>
          <TestimonialSlide
            style="max-w-7xl m-auto shadow-2xl rounded-md"
            background={carro.background}
            brandColor="#F9A8D4"
            company={carro.company}
            key={`designTestimonialFor${carro.company}`}
            logo={carro.logo}
            logoWidth={carro.logoWidth}
            logoHeight={carro.logoHeight}
            altText={carro.altText}
            name={carro.name}
            quote={carro.quote}
          />
        )}
      </div>
    </div>

    <TwoColumnLayout
      style="bg-white py-24 mb-6"
      child1={carroResultText}
      child2={carroResultImage}
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
    
    {CarroScreenImages.carro.map(carro =>
      <ResponsiveScreens
        style="py-24 overflow-hidden"
        link="https://getcarro.com"
        desktopLeft={carro.desktopLeft}
        desktopRight={carro.desktopRight}
        tablet={carro.tablet}
        phone={carro.phone}
        desktopLeftLink={carro.desktopLeftLink}
        desktopRightLink={carro.desktopRightLink}
        tabletLink={carro.tabletLink}
        phoneLink={carro.phoneLink}
      />
    )}
    <ClientCardContainer>
      {ClientMainPage.map(clientMainPage =>
        <ClientCard
          name={clientMainPage.name}
          backgroundImg={clientMainPage.backgroundImg}
          slug={clientMainPage.slug}
        />
      )}
    </ClientCardContainer>
  </div>
}

export default Carro