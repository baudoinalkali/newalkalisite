import Header from '../../components/Header'
import Modal from '../../components/Modal'
import ResponsiveScreens from '../../components/ResponsiveScreens'
import AngledSplitTextImage from '../../components/AngledSplitTextImage'
import SplitTextImageAlt from '../../components/SplitTextImageAlt'
import TestimonialSlide from '../../components/TestimonialSlide'
import ClientCardContainer from '../../components/Clients/ClientCardContainer'
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import Testimonials from '../../content/testimonials'
import React from 'react'
import ClientMainPage from '../../content/clientPages/clientMainPage'
import ClientCard from '../../components/Clients/ClientCard'
import Image from 'next/image'

function CarTalkRepair() {
  return <div className="m-auto">
    <div className="">
      <div className="client-hero" style={{ backgroundImage: "url(../../images/cartalk-hero.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <Header />
        <div className="max-w-7xl flex justify-between items-center m-auto py-56">
          <div className="ml-7 2xl:mx-0">
            <p className="uppercase text-white font-medium">Automotive</p>
            <h1 className="text-6xl text-white font-bold pt-3 py-10">CarTalk Repair</h1>
            <div className="max-w-7xl m-auto flex space-x-7">
              <div className="border border-white p-2 px-5 tracking-widest rounded-md text-xs text-center text-white uppercase font-bold hover:bg-white hover:text-alkaligrey-800">
                Web Development
              </div>
              <div className="border border-white p-2 px-5 tracking-widest rounded-md text-xs text-center text-white uppercase font-bold hover:bg-white hover:text-alkaligrey-800">
                Branding
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-24 flex flex-col md:flex-row justify-between max-w-7xl items-center justify-center m-auto mx-7 xl:mx-auto">
      <div className="w-full xs:w-1/2 pb-14 lg:pb-0">
        <h3 className="text-4xl alkaligrey-800 font-bold m-auto leading-tight pb-4 lg:pb-7">About CarTalk Repair</h3>
        <a href="https://cartalkrepair.com" target="_blank" rel="noopener noreferrer" className="uppercase font-bold text-lg text-alkali-500 duration-500 hover:mr-3">Visit Website</a><FontAwesomeIcon className="text-alkali-500 ml-3" icon={faLongArrowAltRight}></FontAwesomeIcon>
      </div>
      <div className="w-full xs:w-1/2 ">
        <p className="text-alkaligrey-400 max-w-4xl text-lg font-normal">Carro is the world’s largest collaborative commerce network, with more than 25,000 brands and 6.5 million influencers. The platform seamlessly enables brands to work with influencers and each other so they can sell more, together.</p>
      </div>
    </div>
    <div className="max-w-7xl m-auto">
    </div>

    <SplitTextImageAlt
      style="bg-alkaligrey-300 pt-36 pb-80 overflow-hidden"
      sub="The Goal"
      title="Rebrand Existing Site"
      image="../images/carro-before.png"
      text="Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website."
    />
    <div className="mx-14">
      <div className="pb-24 -mt-40">
          {Testimonials.wordpress.slice(0, 1).map(testimonial =>
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
    <AngledSplitTextImage
      style="pb-24 overflow-hidden"
      sub="The Goal"
      title="Rebrand Existing Site"
      image="../images/carro-desktop.png"
      text="Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website."
    />
    <div className="p-4 py-24 bg-alkali-500">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl m-auto mx-3 xl:mx-auto">
        <div><h3 className="text-4xl font-bold max-w-7xl m-auto text-white leading-tight text-center mb-14 lg:mb-0">We're here to realize your vision.</h3></div>
        <div className="">
          <Modal
            style="p-3 px-6 font-semibold text-alkali-500 shadow-2xl rounded-md transition duration-500 ease-in-out bg-white hover:bg-alkali-700"
            text="Schedule a call"
          />
        </div>
      </div>
    </div>
    <div className="">

    </div>
  </div>
}

export default CarTalkRepair