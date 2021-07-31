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
import SafeDryContent from '../../content/clientPages/clientContent'
import CarroScreenImages from '../../content/clientPages/screenImages'
import ChattrHeroContent from '../../content/clientPages/clientHeroContent'
import ClientHeader from '../../components/Clients/ClientHeader'
import ClientAbout from '../../components/Clients/ClientAbout'

function SafeDry() {
    const carroGoalImage = SafeDryContent.safeDry.section1.map(safeDry =>
        <StandardImage
            imageAngle="left"
            image={safeDry.image}
            key={`carroGoalImageClientBlocksFor${safeDry.image}`}
        />
    )

    const carroGoalText = SafeDryContent.safeDry.section1.map(safeDry =>
        <StandardTextBlock
            sub={safeDry.sub}
            title={safeDry.title}
            text={safeDry.text}
            key={`carroGoalTextClientBlocksFor${safeDry.title}`}
        />
    )

    const carroResultImage = SafeDryContent.safeDry.section2.map(safeDry =>
        <StandardImage
            imageAngle="right"
            image={safeDry.image}
            key={`carroResultImageClientBlocksFor${safeDry.image}`}
        />
    )

    const carroResultText = SafeDryContent.safeDry.section2.map(safeDry =>
        <StandardTextBlock
            sub={safeDry.sub}
            title={safeDry.title}
            text={safeDry.text}
            key={`carroResultTextClientBlocksFor${safeDry.title}`}
        />
    )

    return <div className="m-auto overflow-hidden">
        <div className="">
            {SafeDryContent.safeDry.hero.map(safeDry =>
                <ClientHeader
                    sub={safeDry.industry}
                    title={safeDry.name}
                    backgroundImg={safeDry.backgroundImg}
                    backgroundOverlay={safeDry.backgroundOverlay}
                    service={safeDry.service}
                    serviceSlug={safeDry.serviceSlug}
                    style="py-40"
                    key={`ameliaAmeliaHeroContentFor${safeDry.name}`}
                />
            )}
        </div>
        {SafeDryContent.safeDry.about.map(safeDry =>
            <ClientAbout
                name={safeDry.name}
                about={safeDry.bio}
                slug={safeDry.slug}
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
                    background="/images/clients/the-hid-factory/safeDry-slide-bg.png"
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

        {SafeDryContent.safeDry.screens.map(safeDry =>
            <ResponsiveScreens
                style="py-24 overflow-hidden"
                link="https://chattr.ai"
                desktopLeft={safeDry.desktopLeft}
                desktopRight={safeDry.desktopRight}
                tablet={safeDry.tablet}
                phone={safeDry.phone}
                desktopLeftLink={safeDry.desktopLeftLink}
                desktopRightLink={safeDry.desktopRightLink}
                tabletLink={safeDry.tabletLink}
                phoneLink={safeDry.phoneLink}
            />
        )}
    </div>
}

export default SafeDry