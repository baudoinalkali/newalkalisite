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
import ChattrContent from '../../content/clientPages/clientContentBlocks'
import CarroScreenImages from '../../content/clientPages/screenImages'
import ChattrHeroContent from '../../content/clientPages/clientHeroContent'
import ClientHeader from '../../components/Clients/ClientHeader'
import ClientAbout from '../../components/Clients/ClientAbout'

function Carro() {
  const carroGoalImage = ChattrContent.chattr.goal.map(chattr =>
    <StandardImage
      imageAngle="left"
      image={chattr.image}
      key={`carroGoalImageClientBlocksFor${chattr.image}`}
    />
  )

  const carroGoalText = ChattrContent.chattr.goal.map(chattr =>
    <StandardTextBlock
      sub={chattr.sub}
      title={chattr.title}
      text={chattr.text}
      key={`carroGoalTextClientBlocksFor${chattr.title}`}
    />
  )

  const carroResultImage = ChattrContent.chattr.result.map(chattr =>
    <StandardImage
      imageAngle="right"
      image={chattr.image}
      key={`carroResultImageClientBlocksFor${chattr.image}`}
    />
  )

  const carroResultText = ChattrContent.chattr.result.map(chattr =>
    <StandardTextBlock
      sub={chattr.sub}
      title={chattr.title}
      text={chattr.text}
      key={`carroResultTextClientBlocksFor${chattr.title}`}
    />
  )

  return <div className="m-auto overflow-hidden">
    <div className="">
      {ChattrHeroContent.chattr.map(chattr =>
        <ClientHeader
          sub={chattr.sub}
          title={chattr.title}
          backgroundColor="#36ad8b"
          service={chattr.service}
          heroImage={chattr.heroImage}
          serviceSlug={chattr.serviceSlug}
          style="py-20 lg:py-56"
        />
      )}
    </div>
    {ChattrHeroContent.chattr.map(chattr =>
      <ClientAbout
        name={chattr.name}
        about={chattr.about}
        slug={chattr.title}
      />
    )}

    <TwoColumnLayout
      flexType="reverse"
      style="bg-alkaligrey-300 py-24 pb-80 mb-6"
      child1={carroGoalImage}
      child2={carroGoalText}
    >
    </TwoColumnLayout>

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
        <div><h3 className="text-4xl font-bold max-w-7xl m-auto text-white leading-tight text-center mb-14 lg:mb-0">We're here to realize your vision.</h3></div>
        <div className="">
          <Modal
            style="p-3 px-6 font-semibold text-white rounded-md transition hover:text-clients-chattr duration-500 ease-in-out border border-white hover:bg-white"
            text="Schedule a call"
          />
        </div>
      </div>
    </div>

    {CarroScreenImages.carro.map(carro =>
      <ResponsiveScreens
        style="py-24 overflow-hidden"
        link="https://chattr.ai"
        desktopLeft="/images/clients/chattr/desktop-left.png"
        desktopRight="/images/clients/chattr/desktop-right.png"
        tablet="/images/clients/chattr/tablet.png"
        phone="/images/clients/chattr/mobile.png"
        desktopLeftLink="https://chattr.ai"
        desktopRightLink="https://chattr.ai/about"
        tabletLink="https://chattr.ai/pricing"
        phoneLink="https://chattr.ai/product"
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