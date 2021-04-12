import Header from '../../components/Header'
import Modal from '../../components/Modal'
import ResponsiveScreens from '../../components/ResponsiveScreens'
import AngledSplitTextImage from '../../components/AngledSplitTextImage'
import AngledSplitTextImageAlt from '../../components/AngledSplitTextImageAlt'
import SplitTextImageAlt from '../../components/SplitTextImageAlt'
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import ClientsSummary from '../../components/ClientsSummary'
import TestimonialSlide from '../../components/TestimonialSlide'
import Testimonials from '../../content/testimonials'
import TwoColumnLayoutTwo from '../../components/TwoColumnLayoutTwo'
import Wordpress from '../../content/servicePages/wordpress'
import AngledImage from '../../components/AngledImage'
import StandardTextBlock from '../../components/StandardTextBlock'
import ArrowImages from '../../content/clientPages/arrowImages'
import ClientMainPage from '../../content/clientPages/clientMainPage'
import ClientContainer from '../../components/ClientContainer'
import ClientBlocks from '../../content/clientPages/clientBlocks'



function Carro() {
  const carroImages = ClientBlocks.carro.map(carro =>
    <AngledImage
      image={carro.image}
      layout="left"
    />
  )

  const carroText = ClientBlocks.carro.map(carro =>
    <StandardTextBlock
      sub={carro.sub}
      title={carro.title}
      text={carro.text}
    />
  )

  return <div className="m-auto">
    <div className="carro-bg">
      <Header />
      <div className="max-w-7xl flex justify-between items-center m-auto py-14">
        <div className="ml-7 2xl:mx-0">
          <p className="uppercase text-white font-open font-medium">Technology</p>
          <h1 className="text-6xl text-white font-play font-bold py-7">Carro</h1>
          <div className="max-w-7xl m-auto">
            <div className="border border-white p-2 rounded-md text-xs text-center text-white uppercase font-open font-bold hover:bg-white hover:text-alkaligrey-800">
              Web Development
          </div>
          </div>
        </div>
        <div>
          <img src="../images/carro-header-image.png"></img>
        </div>
      </div>
    </div>
    <div className="py-24 flex flex-col md:flex-row justify-between max-w-7xl items-center justify-center m-auto mx-7 xl:mx-auto">
      <div className="w-full xs:w-1/2 pb-14 lg:pb-0">
        <h3 className="text-4xl alkaligrey-800 font-play font-bold m-auto leading-tight pb-4 lg:pb-7">About Carro</h3>
        <a href="" className="uppercase font-open font-bold text-lg text-alkali-500 duration-500 hover:mr-3">Visit Website</a><FontAwesomeIcon className="text-alkali-500 ml-3" icon={faLongArrowAltRight}></FontAwesomeIcon>
      </div>
      <div className="w-full xs:w-1/2 ">
        <p className="text-alkaligrey-400 font-open max-w-4xl text-lg font-normal">Carro is the world’s largest collaborative commerce network, with more than 25,000 brands and 6.5 million influencers. The platform seamlessly enables brands to work with influencers and each other so they can sell more, together.</p>
      </div>
    </div>

    <TwoColumnLayoutTwo
      child1={carroImages}
      child2={carroText}
    >
    </TwoColumnLayoutTwo>


    <div className="mx-14">
      <div className="pb-24 -mt-72">
        {Testimonials.wordpress.slice(1).map(testimonial =>
          <TestimonialSlide
            style="max-w-7xl m-auto shadow-2xl rounded-md"
            background={testimonial.background}
            backgroundOverlay={testimonial.backgroundOverlay}
            company={testimonial.company}
            key={`designTestimonialFor${testimonial.company}`}
            logo={testimonial.logo}
            altText={testimonial.altText}
            name={testimonial.name}
            quote={testimonial.quote}
          />
        )}
      </div>
    </div>
    <TwoColumnLayoutTwo
      child2={
        ClientBlocks.carro.slice(1).map(carro =>
          <AngledImage
            image={carro.image}
            layout="right"
          />
        )
    }
      child1={
          ClientBlocks.carro.slice(1).map(carro =>
            <StandardTextBlock
              sub={carro.sub}
              title={carro.title}
              text={carro.text}
            />
          )
      }
    >
    </TwoColumnLayoutTwo>

    <div className="p-4 py-24 bg-alkali-500">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl m-auto mx-3 xl:mx-auto">
        <div><h3 className="text-4xl font-play font-bold max-w-7xl m-auto text-white leading-tight text-center mb-14 lg:mb-0">We're here to realize your vision.</h3></div>
        <div className="">
          <Modal
            style="p-3 px-6 font-semibold text-alkali-500 shadow-2xl rounded-md transition duration-500 ease-in-out bg-white hover:bg-alkali-700"
            text="Schedule a call"
          />
        </div>
      </div>
    </div>
    {ArrowImages.carro.map(arrowImages =>
      <ResponsiveScreens
        style="py-24 overflow-hidden"
        link="https://getcarro.com"
        desktopLeft={arrowImages.desktopLeft}
        desktopRight={arrowImages.desktopRight}
        tablet={arrowImages.tablet}
        phone={arrowImages.phone}
        desktopLeftLink={arrowImages.desktopLeftLink}
        desktopRightLink={arrowImages.desktopRightLink}
        tabletLink={arrowImages.tabletLink}
        phoneLink={arrowImages.phoneLink}
      />
    )}
    <ClientsSummary
      style="bg-alkaligrey-300"
    >
      {ClientMainPage.map(clientMainPage =>
        <ClientContainer
          name={clientMainPage.name}
          backgroundImg={clientMainPage.backgroundImg}
        />
      )}
    </ClientsSummary>
  </div>
}

export default Carro