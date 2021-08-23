import Modal from '../../components/Modal'
import ClientCardContainer from '../../components/Clients/ClientCardContainer'
import Testimonials from '../../content/testimonials'
import TwoColumnLayout from '../../components/TwoColumnLayout'
import StandardImage from '../../components/StandardImage'
import StandardTextBlock from '../../components/StandardTextBlock'
import ClientMainPage from '../../content/clientPages/clientMainPage'
import ClientCard from '../../components/Clients/ClientCard'
import BlueCollarContent from '../../content/clientPages/clientContent'
import CarroScreenImages from '../../content/clientPages/screenImages'
import ChattrHeroContent from '../../content/clientPages/clientHeroContent'
import ClientHeader from '../../components/Clients/ClientHeader'
import ClientAbout from '../../components/Clients/ClientAbout'
import dynamic from 'next/dynamic';
const TestimonialSlide = dynamic(() => import("../../components/TestimonialSlide"));
const ResponsiveScreens = dynamic(() => import("../../components/ResponsiveScreens"));

function BlueCollar() {
    const carroGoalImage = BlueCollarContent.bluecollar.section1.map(bluecollar =>
        <StandardImage
            imageAngle="left"
            image={bluecollar.image}
            key={`carroGoalImageClientBlocksFor${bluecollar.image}`}
        />
    )

    const carroGoalText = BlueCollarContent.bluecollar.section1.map(bluecollar =>
        <StandardTextBlock
            sub={bluecollar.sub}
            title={bluecollar.title}
            text={bluecollar.text}
            key={`carroGoalTextClientBlocksFor${bluecollar.title}`}
        />
    )

    const carroResultImage = BlueCollarContent.bluecollar.section2.map(bluecollar =>
        <StandardImage
            imageAngle="right"
            image={bluecollar.image}
            key={`carroResultImageClientBlocksFor${bluecollar.image}`}
        />
    )

    const carroResultText = BlueCollarContent.bluecollar.section2.map(bluecollar =>
        <StandardTextBlock
            sub={bluecollar.sub}
            title={bluecollar.title}
            text={bluecollar.text}
            key={`carroResultTextClientBlocksFor${bluecollar.title}`}
        />
    )

    return <div className="m-auto overflow-hidden">
        <div className="">
            {BlueCollarContent.bluecollar.hero.map(bluecollar =>
                <ClientHeader
                    sub={bluecollar.industry}
                    title={bluecollar.name}
                    backgroundImg={bluecollar.backgroundImg}
                    backgroundOverlay={bluecollar.backgroundOverlay}
                    service={bluecollar.service}
                    serviceSlug={bluecollar.serviceSlug}
                    heroImage={bluecollar.image}
                    heroImageWidth={bluecollar.width}
                    heroImageHeight={bluecollar.height}
                    style="py-40"
                    key={`ameliaAmeliaHeroContentFor${bluecollar.name}`}
                />
            )}
        </div>
        {BlueCollarContent.bluecollar.about.map(bluecollar =>
            <ClientAbout
                name={bluecollar.name}
                about={bluecollar.bio}
                slug={bluecollar.slug}
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
                    background="/images/clients/bluecollar/slide-testimonial-bg.jpg"
                    brandColor="#0d0d0d"
                    company="Bluecollar"
                    logo="/images/clients/bluecollar/logo.png"
                    logoWidth="325"
                    logoHeight="45"
                    altText=""
                    slug="bluecollar"
                    name="Ashley McCarthy, Program Development Director"
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

        {BlueCollarContent.bluecollar.screens.map(bluecollar =>
            <ResponsiveScreens
                style="py-24 overflow-hidden"
                link="https://bluecollaraccess.com"
                buttonName="Visit Site"
                brandColor="#1caaeb"
                desktopLeft={bluecollar.desktopLeft}
                desktopRight={bluecollar.desktopRight}
                tablet={bluecollar.tablet}
                phone={bluecollar.phone}
                desktopLeftLink={bluecollar.desktopLeftLink}
                desktopRightLink={bluecollar.desktopRightLink}
                tabletLink={bluecollar.tabletLink}
                phoneLink={bluecollar.phoneLink}
            />
        )}
    </div>
}

export default BlueCollar