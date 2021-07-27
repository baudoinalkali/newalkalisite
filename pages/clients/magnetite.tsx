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
import MagnetiteContent from '../../content/clientPages/clientContent'
import CarroScreenImages from '../../content/clientPages/screenImages'
import ChattrHeroContent from '../../content/clientPages/clientHeroContent'
import ClientHeader from '../../components/Clients/ClientHeader'
import ClientAbout from '../../components/Clients/ClientAbout'

function Carro() {
    const carroGoalImage = MagnetiteContent.magnetite.section1.map(magnetite =>
        <StandardImage
            imageAngle="left"
            image={magnetite.image}
            key={`carroGoalImageClientBlocksFor${magnetite.image}`}
        />
    )

    const carroGoalText = MagnetiteContent.magnetite.section1.map(magnetite =>
        <StandardTextBlock
            sub={magnetite.sub}
            title={magnetite.title}
            text={magnetite.text}
            key={`carroGoalTextClientBlocksFor${magnetite.title}`}
        />
    )

    const carroResultImage = MagnetiteContent.magnetite.section2.map(magnetite =>
        <StandardImage
            imageAngle="right"
            image={magnetite.image}
            key={`carroResultImageClientBlocksFor${magnetite.image}`}
        />
    )

    const carroResultText = MagnetiteContent.magnetite.section2.map(magnetite =>
        <StandardTextBlock
            sub={magnetite.sub}
            title={magnetite.title}
            text={magnetite.text}
            key={`carroResultTextClientBlocksFor${magnetite.title}`}
        />
    )

    return <div className="m-auto overflow-hidden">
        <div className="">
            {MagnetiteContent.magnetite.hero.map(magnetite =>
                <ClientHeader
                    sub={magnetite.industry}
                    title={magnetite.name}
                    backgroundImg={magnetite.backgroundImg}
                    backgroundOverlay={magnetite.backgroundOverlay}
                    service={magnetite.service}
                    serviceSlug={magnetite.serviceSlug}
                    style="py-40"
                    key={`ameliaAmeliaHeroContentFor${magnetite.name}`}
                />
            )}
        </div>
        {MagnetiteContent.magnetite.about.map(magnetite =>
            <ClientAbout
                name={magnetite.name}
                about={magnetite.bio}
                slug={magnetite.slug}
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
                    background="/images/clients/magnetite/testimonial-bg-large.png"
                    brandColor="#46b7e6"
                    company="Chattr"
                    logo="/images/clients/magnetite/logo.png"
                    logoWidth="275"
                    logoHeight="65"
                    altText=""
                    slug="chattr"
                    name="Ray Wolfe, Owner"
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

        {MagnetiteContent.magnetite.screens.map(magnetite =>
            <ResponsiveScreens
                style="py-24 overflow-hidden"
                link="https://chattr.ai"
                desktopLeft={magnetite.desktopLeft}
                desktopRight={magnetite.desktopRight}
                tablet={magnetite.tablet}
                phone={magnetite.phone}
                desktopLeftLink={magnetite.desktopLeftLink}
                desktopRightLink={magnetite.desktopRightLink}
                tabletLink={magnetite.tabletLink}
                phoneLink={magnetite.phoneLink}
            />
        )}
    </div>
}

export default Carro