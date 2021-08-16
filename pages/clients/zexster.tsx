import Modal from '../../components/Modal'
import ClientCardContainer from '../../components/Clients/ClientCardContainer'
import Testimonials from '../../content/testimonials'
import TwoColumnLayout from '../../components/TwoColumnLayout'
import StandardImage from '../../components/StandardImage'
import StandardTextBlock from '../../components/StandardTextBlock'
import ClientMainPage from '../../content/clientPages/clientMainPage'
import ClientCard from '../../components/Clients/ClientCard'
import ZexsterContent from '../../content/clientPages/clientContent'
import CarroScreenImages from '../../content/clientPages/screenImages'
import ChattrHeroContent from '../../content/clientPages/clientHeroContent'
import ClientHeader from '../../components/Clients/ClientHeader'
import ClientAbout from '../../components/Clients/ClientAbout'
import dynamic from 'next/dynamic';
const TestimonialSlide = dynamic(() => import("../../components/TestimonialSlide"));
const ResponsiveScreens = dynamic(() => import("../../components/ResponsiveScreens"));

function Carro() {
    const carroGoalImage = ZexsterContent.zexster.section1.map(zexster =>
        <StandardImage
            imageAngle="left"
            image={zexster.image}
            key={`carroGoalImageClientBlocksFor${zexster.image}`}
        />
    )

    const carroGoalText = ZexsterContent.zexster.section1.map(zexster =>
        <StandardTextBlock
            sub={zexster.sub}
            title={zexster.title}
            text={zexster.text}
            key={`carroGoalTextClientBlocksFor${zexster.title}`}
        />
    )

    const carroResultImage = ZexsterContent.zexster.section2.map(zexster =>
        <StandardImage
            imageAngle="right"
            image={zexster.image}
            key={`carroResultImageClientBlocksFor${zexster.image}`}
        />
    )

    const carroResultText = ZexsterContent.zexster.section2.map(zexster =>
        <StandardTextBlock
            sub={zexster.sub}
            title={zexster.title}
            text={zexster.text}
            key={`carroResultTextClientBlocksFor${zexster.title}`}
        />
    )

    return <div className="m-auto overflow-hidden">
        <div className="">
            {ZexsterContent.zexster.hero.map(zexster =>
                <ClientHeader
                    sub={zexster.industry}
                    title={zexster.name}
                    backgroundImg={zexster.backgroundImg}
                    backgroundOverlay={zexster.backgroundOverlay}
                    service={zexster.service}
                    serviceSlug={zexster.serviceSlug}
                    style="py-40"
                    key={`ameliaAmeliaHeroContentFor${zexster.name}`}
                />
            )}
        </div>
        {ZexsterContent.zexster.about.map(zexster =>
            <ClientAbout
                name={zexster.name}
                about={zexster.bio}
                slug={zexster.slug}
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

        {ZexsterContent.zexster.screens.map(zexster =>
            <ResponsiveScreens
                style="py-24 overflow-hidden"
                link="https://chattr.ai"
                desktopLeft={zexster.desktopLeft}
                desktopRight={zexster.desktopRight}
                tablet={zexster.tablet}
                phone={zexster.phone}
                desktopLeftLink={zexster.desktopLeftLink}
                desktopRightLink={zexster.desktopRightLink}
                tabletLink={zexster.tabletLink}
                phoneLink={zexster.phoneLink}
            />
        )}
    </div>
}

export default Carro