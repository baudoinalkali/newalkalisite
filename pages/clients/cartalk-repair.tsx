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
import ClientScheduleCTA from '../../components/Clients/ClientScheduleCTA'
import clientMainPage from '../../content/clientPages/clientMainPage'
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
                    heroImage={cartalkRepair.image}
                    heroImageWidth={cartalkRepair.width}
                    heroImageHeight={cartalkRepair.height}
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
            style="bg-alkaligrey-300 py-24 lg:py-36 pb-72 lg:pb-80 mb-6"
            child1={carroGoalImage}
            child2={carroGoalText}
        >
        </TwoColumnLayout>

        <div className="px-7">
            <div className="pb-4 lg:pb-10 -mt-56">
                <TestimonialSlide
                    style="max-w-7xl m-auto shadow-2xl rounded-md"
                    background="/images/clients/cartalk/slide-bg.jpg"
                    brandColor="#fff"
                    company="CarTalk Repair"
                    logo="/images/clients/cartalk/logo.svg"
                    logoWidth="225"
                    logoHeight="102"
                    altText=""
                    slug="chattr"
                    name="Cody Lintz, Owner"
                    quote="I think I chose the best company to do this. The adviser was up front on cost and explained everything to me. He made the experience perfect. He will do all my websites as my company grows."
                />
            </div>
        </div>

        <TwoColumnLayout
            style="py-24 pb-20 lg:pb-24 mb-0 lg:mb-6"
            child1={carroResultText}
            child2={carroResultImage}
        />
        {CarTalkContent.cartalkRepair.about.map((about) => (
            <ClientScheduleCTA
                brandColor={about.brandColor}
            />
        ))}

        {CarTalkContent.cartalkRepair.screens.map(cartalkRepair =>
            <ResponsiveScreens
                style="py-24 lg:py-36 overflow-hidden"
                link="https://chattr.ai"
                buttonName="Visit Site"
                brandColor="#bf1e2e"
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
        <section className="bg-alkaligrey-300 pt-20 lg:pt-36">
            <h3 className="text-center text-4xl md:text-5xl font-bold max-w-4xl m-auto mb-14 lg:mb-20 leading-normal">
                Other Projects
            </h3>
            <div className="max-w-7xl m-auto -mb-20">
                <ClientCardContainer>
                    {clientMainPage.slice(0,3).map((clientMainPage, idx) => (
                        <ClientCard
                            key={idx}
                            name={clientMainPage.name}
                            backgroundColor={clientMainPage.backgroundColor}
                            backgroundImage={clientMainPage.backgroundImage}
                            slug={clientMainPage.slug}
                            industry={clientMainPage.industry}
                        />
                    ))}
                </ClientCardContainer>
            </div>
            <div className="flex items-center justify-center group space-x-3">
                <a href="/clients" className="uppercase font-medium text-alkaligrey-900">View All Projects</a>
                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:transform duration-500 group-hover:translate-x-3 h-6 w-6 text-alkaligrey-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
            <div className="pb-24 lg:pb-36"></div>
        </section>
    </div>
}

export default CarTalkRepair