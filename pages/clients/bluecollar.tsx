import ClientCardContainer from '../../components/Clients/ClientCardContainer'
import TwoColumnLayout from '../../components/TwoColumnLayout'
import StandardImage from '../../components/StandardImage'
import StandardTextBlock from '../../components/StandardTextBlock'
import ClientCard from '../../components/Clients/ClientCard'
import BlueCollarContent from '../../content/clientPages/clientContent'
import ClientHeader from '../../components/Clients/ClientHeader'
import ClientAbout from '../../components/Clients/ClientAbout'
import dynamic from 'next/dynamic';
import ClientScheduleCTA from '../../components/Clients/ClientScheduleCTA'
import clientMainPage from '../../content/clientPages/clientMainPage'
import Head from 'next/head'
import { bluecollarData } from "../../content/testimonials"
const TestimonialSlide = dynamic(() => import("../../components/TestimonialSlide"));
const ResponsiveScreens = dynamic(() => import("../../components/ResponsiveScreens"));

function BlueCollar() {
    const carroGoalImage = BlueCollarContent.bluecollar.section1.map(bluecollar =>
        <StandardImage
            altText={bluecollar.altText}
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
            altText={bluecollar.altText}
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
        <Head>
            <title>Bluecollar Success Group Project | Alkali</title>
            <meta name="description" content="Learn more about how we enabled Bluecollar to provide a next-level membership experience for their business." />
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <link rel="canonical" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Bluecollar Success Group Project | Alkali" />
            <meta property="og:description" content="Learn more about how we enabled Bluecollar to provide a next-level membership experience for their business." />
            <meta property="og:url" content="/" />
            <meta property="og:site_name" content="Alkali" />
            <meta property="article:modified_time" content="2021-08-05T14:33:32+00:00" />
            <meta property="og:image" content="/images/facebook-image.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <div className="">
            {BlueCollarContent.bluecollar.hero.map(hero =>
                <ClientHeader
                    sub={hero.industry}
                    title={hero.name}
                    backgroundImg={hero.backgroundImg}
                    backgroundOverlay={hero.backgroundOverlay}
                    services={hero.services}
                    heroImage={hero.image}
                    heroImageWidth={hero.width}
                    heroImageHeight={hero.height}
                    style="py-40"
                    key={`ameliaAmeliaHeroContentFor${hero.name}`}
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
            style="bg-alkaligrey-300 py-24 lg:py-36 pb-80 lg:pb-80 mb-6"
            child1={carroGoalImage}
            child2={carroGoalText}
        >
        </TwoColumnLayout>

        <div className="px-7">
            <div className="pb-4 lg:pb-10 client-testimonial-container">
                <TestimonialSlide
                    style="max-w-7xl m-auto shadow-2xl rounded-md"
                    brandColor={bluecollarData.brandColor}
                    background={bluecollarData.background}
                    company={bluecollarData.company}
                    slug={bluecollarData.slug}
                    logo={bluecollarData.logo}
                    logoWidth={bluecollarData.logoWidth}
                    logoHeight={bluecollarData.logoHeight}
                    altText={bluecollarData.altText}
                    name={bluecollarData.name}
                    quote={bluecollarData.quote}
                />
            </div>
        </div>

        <TwoColumnLayout
            style="py-24 pb-20 lg:pb-24 mb-0 lg:mb-6"
            child1={carroResultText}
            child2={carroResultImage}
        />
        {BlueCollarContent.bluecollar.about.map((about) => (
            <ClientScheduleCTA
                brandColor={about.brandColor}
            />
        ))}

        {BlueCollarContent.bluecollar.screens.map(bluecollar =>
            <ResponsiveScreens
                style="py-24 lg:py-36 overflow-hidden"
                link="https://bluecollaraccess.com"
                buttonName="Visit Site"
                brandColor="#1caaeb"
                newTab={true}
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
        <section className="bg-alkaligrey-300 pt-96 -mt-96">
            <h3 className="text-center text-4xl md:text-5xl font-bold max-w-4xl m-auto mb-14 lg:mb-20 leading-normal">
                Other Projects
            </h3>
            <div className="max-w-7xl m-auto -mb-20">
                <ClientCardContainer>
                    {clientMainPage.slice(0, 3).map((clientMainPage, idx) => (
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
                <a href="/clients/" className="font-medium text-lg text-alkaligrey-900">View All Projects</a>
                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:transform duration-500 group-hover:translate-x-3 h-6 w-6 text-alkaligrey-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
            <div className="pb-24 lg:pb-36"></div>
        </section>
    </div>
}

export default BlueCollar