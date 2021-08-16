import Modal from '../../components/Modal'
import ClientCardContainer from '../../components/Clients/ClientCardContainer'
import Testimonials from '../../content/testimonials'
import TwoColumnLayout from '../../components/TwoColumnLayout'
import StandardImage from '../../components/StandardImage'
import StandardTextBlock from '../../components/StandardTextBlock'
import ClientMainPage from '../../content/clientPages/clientMainPage'
import ClientCard from '../../components/Clients/ClientCard'
import CarTalkContent from '../../content/clientPages/clientContent'
import CarroScreenImages from '../../content/clientPages/screenImages'
import ChattrHeroContent from '../../content/clientPages/clientHeroContent'
import ClientHeader from '../../components/Clients/ClientHeader'
import ClientAbout from '../../components/Clients/ClientAbout'
import dynamic from 'next/dynamic';
const TestimonialSlide = dynamic(() => import("../../components/TestimonialSlide"));
const ResponsiveScreens = dynamic(() => import("../../components/ResponsiveScreens"));

function CarTalkRepair() {
    const carroGoalImage = CarTalkContent.cartalkRepair.section1.map(cartalkRepair =>
        <StandardImage
            imageAngle="left"
            image={cartalkRepair.image}
            key={`carroGoalImageClientBlocksFor${cartalkRepair.image}`}
        />
    )

    const carroGoalText = CarTalkContent.cartalkRepair.section1.map(cartalkRepair =>
        <StandardTextBlock
            sub={cartalkRepair.sub}
            title={cartalkRepair.title}
            text={cartalkRepair.text}
            key={`carroGoalTextClientBlocksFor${cartalkRepair.title}`}
        />
    )

    const carroResultImage = CarTalkContent.cartalkRepair.section2.map(cartalkRepair =>
        <StandardImage
            imageAngle="right"
            image={cartalkRepair.image}
            key={`carroResultImageClientBlocksFor${cartalkRepair.image}`}
        />
    )

    const carroResultText = CarTalkContent.cartalkRepair.section2.map(cartalkRepair =>
        <StandardTextBlock
            sub={cartalkRepair.sub}
            title={cartalkRepair.title}
            text={cartalkRepair.text}
            key={`carroResultTextClientBlocksFor${cartalkRepair.title}`}
        />
    )

    return <div className="m-auto overflow-hidden">
        <div className="">
            {CarTalkContent.cartalkRepair.hero.map(cartalkRepair =>
                <ClientHeader
                    sub={cartalkRepair.industry}
                    title={cartalkRepair.name}
                    backgroundImg={cartalkRepair.backgroundImg}
                    backgroundOverlay={cartalkRepair.backgroundOverlay}
                    service={cartalkRepair.service}
                    serviceSlug={cartalkRepair.serviceSlug}
                    style="py-40"
                    key={`ameliaAmeliaHeroContentFor${cartalkRepair.name}`}
                />
            )}
        </div>
        {CarTalkContent.cartalkRepair.about.map(cartalkRepair =>
            <ClientAbout
                name={cartalkRepair.name}
                about={cartalkRepair.bio}
                slug={cartalkRepair.slug}
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
                    background="/images/clients/the-hid-factory/thf-slide-bg.png"
                    brandColor="#0d0d0d"
                    company="Chattr"
                    logo="/images/clients/the-hid-factory/logo.png"
                    logoWidth="275"
                    logoHeight="50"
                    altText=""
                    slug="chattr"
                    name="Travis Deleon, Operations Manager"
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

        {CarTalkContent.cartalkRepair.screens.map(cartalkRepair =>
            <ResponsiveScreens
                style="py-24 overflow-hidden"
                link="https://chattr.ai"
                desktopLeft={cartalkRepair.desktopLeft}
                desktopRight={cartalkRepair.desktopRight}
                tablet={cartalkRepair.tablet}
                phone={cartalkRepair.phone}
                desktopLeftLink={cartalkRepair.desktopLeftLink}
                desktopRightLink={cartalkRepair.desktopRightLink}
                tabletLink={cartalkRepair.tabletLink}
                phoneLink={cartalkRepair.phoneLink}
            />
        )}
    </div>
}

export default CarTalkRepair