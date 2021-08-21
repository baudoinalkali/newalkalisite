import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCaretUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import ServiceLeadSection from "../../../components/ServiceLeadSection";
import TestimonialSlider from "../../../components/TestimonialSlider";
import TestimonialSlide from "../../../components/TestimonialSlide";
import Testimonials from "../../../content/testimonials";
import Ecommerce from "../../../content/servicePages/ecommerce";
import Integration from "../../../components/Integration";
import OurProcessComp from "../../../components/Services/OurProcess";
import TwoColumnLayout from "../../../components/TwoColumnLayout";
import StandardImage from "../../../components/StandardImage";
import StandardTextBlock from "../../../components/StandardTextBlock";
import ServiceHeroContent from "../../../content/servicePages/serviceHeroContent";
import ServiceHero from "../../../components/Services/ServiceHero";
import CarroScreenImages from "../../../content/clientPages/screenImages";
import ResponsiveScreens from "../../../components/ResponsiveScreens";
import Image from "next/image";
import CombinedNavigation from "../../../components/Navigation/CombinedNavigation";
import FAQDropdown from "../../../components/Services/FAQDropdown";
import WordpressFAQ from "../../../content/servicePages/faq";
import EcommerceServices from "../../../content/servicePages/serviceBlocks";
import ServiceBlocks from "../../../components/Services/ServiceBlocks";
import ecommerceProcess from "../../../content/servicePages/ourProcess";
import ServiceImage from "../../../components/Services/ServiceImage";

function EcommerceWebsiteDevelopment() {
  const image1 = Ecommerce.text1.map((text1) => (
    <ServiceImage 
    image={text1.image} 
    imageAngle="none" 
    height={text1.height}
    width={text1.width}
    />
  ));

  const text1 = Ecommerce.text1.map((text1) => (
    <StandardTextBlock title={text1.title} text={text1.text} />
  ));

  const image2 = Ecommerce.text2.map((text2) => (
    <ServiceImage 
    image={text2.image} 
    height={text2.height}
    width={text2.width}
    imageAngle="none" />
  ));

  const text2 = Ecommerce.text2.map((text2) => (
    <StandardTextBlock title={text2.title} text={text2.text} />
  ));

  const image3 = Ecommerce.text3.map((text3) => (
    <ServiceImage 
    image={text3.image} 
    height={text3.height}
    width={text3.width}
    imageAngle="none" />
  ));

  const text3 = Ecommerce.text3.map((text3) => (
    <StandardTextBlock title={text3.title} text={text3.text} />
  ));

  const image4 = Ecommerce.text4.map((text4) => (
    <ServiceImage 
    image={text4.image} 
    height={text4.height}
    width={text4.width}
    imageAngle="none" />
  ));

  const text4 = Ecommerce.text4.map((text4) => (
    <StandardTextBlock title={text4.title} text={text4.text} />
  ));

  const image5 = Ecommerce.text5.map((text5) => (
    <ServiceImage 
    image={text5.image} 
    height={text5.height}
    width={text5.width}
    imageAngle="none" />
  ));

  const text5 = Ecommerce.text5.map((text5) => (
    <StandardTextBlock title={text5.title} text={text5.text} />
  ));

  
  return (
    <div className="m-auto overflow-hidden">
      <div>
        <CombinedNavigation
          headerBackground="bg-alkali-500"
          headerColor="white"
        />
        {ServiceHeroContent.ecommerce.map((ecommerce) => (
          <ServiceHero
            sub={ecommerce.sub}
            title={ecommerce.title}
            backgroundImg={ecommerce.backgroundImg}
          />
        ))}
      </div>
      <div className="">
        <div className="p-4 py-24 px-0 lg:px-14">
          <div className="flex flex-col space-x-0 lg:space-x-14 lg:flex-row m-auto justify-between items-center max-w-7xl">
            <div className="w-5/6 lg:w-1/2 pb-20 lg:pb-0">
              <h3 className="text-3xl md:text-4xl font-bold m-auto leading-tight">
                E-commerce Website Development
              </h3>
              <p className="text-alkaligrey-400 max-w-4xl text-lg font-normal pt-7">
              Whether you’re an existing brick-and-mortar store looking to add another sales channel or about to 
              launch your B2C product, we can help guide you along your e-commerce journey. There are many options 
              when it comes to e-commerce platforms, which is why we’re always learning. With our knowledge and expertise, 
              we aim to thoroughly understand your business so that we can work closely with you to see your goals realized. 
              So if you’re looking to have a store developed from scratch, increase your conversion rate or sales, you’ve come 
              to the right place.
              </p>
            </div>
            <div className="z-0 pointer-events-none">
              <div className="angled-mockup rounded-md shadow-2xl">
                <div className="browser-mockup z-0">
                  <div style={{ fontSize: "0" }}>
                    <Image
                      src="/images/wordpress-stats.png"
                      alt=""
                      className="rounded-b-md"
                      width={588}
                      height={410}
                      quality={100}
                    />
                  </div>
                </div>
                <div className="bg-white stat-container float-right -mr-6 shadow-2xl p-7 rounded-md text-center uppercase font-medium text-sm -mt-14 relative">
                  <p className="pb-4">Wordpress Statistics</p>
                  <div className="flex justify-between items-center max-w-7xl m-auto">
                    <div className="w-1/2 m-auto -ml-3 border-r">
                      <p className="font-bold text-5xl pb-4">
                        <FontAwesomeIcon
                          className="text-2xl relative top-0 mr-3"
                          icon={faCaretUp}
                        ></FontAwesomeIcon>
                        40%
                      </p>
                      <p className="text-xs ml-4">Sites Use WordPress</p>
                    </div>
                    <div className="w-1/2 m-auto">
                      <p className="font-bold text-5xl pb-4">
                        <FontAwesomeIcon
                          className="text-2xl relative top-0 mr-3"
                          icon={faCaretUp}
                        ></FontAwesomeIcon>
                        150%
                      </p>
                      <p className="text-xs ml-4">Monthly Leads Request</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 px-14 2xl:px-0 bg-alkaligrey-300">
        <h6 className="text-3xl md:text-4xl text-center font-bold m-auto leading-tight pb-24">
          Our E-commerce Services
        </h6>
        <div className="grid grid-cols md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto gap-x-14 gap-y-14">
          {Ecommerce.features.map((features) => (
            <ServiceBlocks
              serviceTitle={features.serviceTitle}
              serviceText={features.serviceText}
              image={features.image}
              altText={features.altText}
            />
          ))}
        </div>
      </div>
      <ServiceLeadSection
        style="bg-alkali-500 py-24"
        title="We're Here to Realize Your Vision"
        text="Do you have an idea and vision for your website but not sure where to start? Our team of professionals are standing by to answer any questions you may have. Whether you need a free audit of your current website or want to discuss specifics of a new WordPress website build, we look forward to serving you!"
        buttonText="Schedule a Discovery Call"
      />
      <div className="pt-24 px-14 2xl:px-0">
        <h6 className="text-3xl md:text-4xl pb-7 text-center font-bold m-auto leading-tight">
          Tailored for Your Business
        </h6>
        <p className="text-center max-w-2xl m-auto text-lg font-normal pt-4">
        There are a lot of e-commerce solutions out there, which can make the selection process 
        complicated. To combat this, we spend the time to truly understand your business to provide a 
        recommendation based on our years of experience.
        </p>
      </div>
      <TwoColumnLayout flexType="reverse" child1={image2} child2={text2} />

      <TwoColumnLayout style="pt-0 mb-2" child1={text3} child2={image3} />
      <TwoColumnLayout
        flexType="reverse"
        style="pt-0"
        child2={text4}
        child1={image4}
      />
      <div className="px-14 pt-24 2xl:px-0">
        <h3 className="text-3xl md:text-4xl text-center font-bold m-auto leading-tight pb-14">
          Hear It Straight From Our Clients
        </h3>
      </div>
      <div className="relative mb-3 z-20">
        <TestimonialSlider>
          {Testimonials.wordpress.map((testimonial) => (
            <TestimonialSlide
              background={testimonial.background}
              backgroundOverlay={testimonial.backgroundOverlay}
              company={testimonial.company}
              key={`designTestimonialFor${testimonial.company}`}
              logo={testimonial.logo}
              logoHeight={testimonial.logoHeight}
              logoWidth={testimonial.logoWidth}
              altText={testimonial.altText}
              name={testimonial.name}
              quote={testimonial.quote}
              slugVisibility="true"
            />
          ))}
        </TestimonialSlider>
      </div>
      <TwoColumnLayout
        style="pt-80 -mt-48 bg-alkaligrey-300"
        flexType="reverse"
        child1={image5}
        child2={text5}
      />
      {CarroScreenImages.carro.map((carro) => (
        <ResponsiveScreens
          style="py-36 pb-12 overflow-hidden z-30 relative"
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
      ))}
      <TwoColumnLayout
        style="bg-alkaligrey-300 z-10 relative -mt-48 pt-72"
        child1={text5}
        child2={image5}
      />

      <div className="py-24 px-14 2xl:px-0 bg-white">
        <h6 className="text-3xl md:text-4xl pb-7 text-center font-bold m-auto leading-tight">
          Keep Your Store Connected
        </h6>
        <p className="text-center max-w-4xl m-auto text-lg font-normal pt-4">
        Platforms such as Shopify, WooCommerce, BigCommerce, and Magento offer countless 
        third-party integrations. These integrations provide endless opportunities to streamline 
        your workflow, ultimately allowing you to spend more time growing your business.
        </p>
      </div>
      <Integration style="pb-24 bg-white py-14 2xl:px-0" />
      <div className="py-24 max-w-7xl m-auto">
        <h6 className="text-3xl md:text-4xl pb-7 text-center font-bold m-auto leading-tight">
          Frequently Asked Questions About Our WordPress Development
        </h6>
        <div className="w-full px-4 pt-16">
          <div className="p-2 mx-auto bg-white rounded-2xl">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10">
              {Ecommerce.faq.map((ecommerce) => (
                <FAQDropdown
                  question={ecommerce.question}
                  answer={ecommerce.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcommerceWebsiteDevelopment;
