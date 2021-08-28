import Modal from '../../components/Modal'
import ClientCardContainer from '../../components/Clients/ClientCardContainer'
import Testimonials from '../../content/testimonials'
import TwoColumnLayout from '../../components/TwoColumnLayout'
import StandardImage from '../../components/StandardImage'
import StandardTextBlock from '../../components/StandardTextBlock'
import ClientMainPage from '../../content/clientPages/clientMainPage'
import ClientCard from '../../components/Clients/ClientCard'
import LessonsContent from '../../content/clientPages/clientContent'
import CarroScreenImages from '../../content/clientPages/screenImages'
import ChattrHeroContent from '../../content/clientPages/clientHeroContent'
import ClientHeader from '../../components/Clients/ClientHeader'
import ClientAbout from '../../components/Clients/ClientAbout'
import dynamic from 'next/dynamic';
const TestimonialSlide = dynamic(() => import("../../components/TestimonialSlide"));
const ResponsiveScreens = dynamic(() => import("../../components/ResponsiveScreens"));

function Carro() {
    const carroGoalImage = LessonsContent.lessonsThatRock.section1.map(lessonsThatRock =>
        <StandardImage
            imageAngle="left"
            image={lessonsThatRock.image}
            key={`carroGoalImageClientBlocksFor${lessonsThatRock.image}`}
        />
    )

    const carroGoalText = LessonsContent.lessonsThatRock.section1.map(lessonsThatRock =>
        <StandardTextBlock
            sub={lessonsThatRock.sub}
            title={lessonsThatRock.title}
            text={lessonsThatRock.text}
            key={`carroGoalTextClientBlocksFor${lessonsThatRock.title}`}
        />
    )

    const carroResultImage = LessonsContent.lessonsThatRock.section2.map(lessonsThatRock =>
        <StandardImage
            imageAngle="right"
            image={lessonsThatRock.image}
            key={`carroResultImageClientBlocksFor${lessonsThatRock.image}`}
        />
    )

    const carroResultText = LessonsContent.lessonsThatRock.section2.map(lessonsThatRock =>
        <StandardTextBlock
            sub={lessonsThatRock.sub}
            title={lessonsThatRock.title}
            text={lessonsThatRock.text}
            key={`carroResultTextClientBlocksFor${lessonsThatRock.title}`}
        />
    )

    // return <div className="m-auto overflow-hidden">
    //     <div className="">
    //         {LessonsContent.lessonsThatRock.hero.map(hero =>
    //             <ClientHeader
    //                 sub={hero.industry}
    //                 title={hero.name}
    //                 backgroundImg={hero.backgroundImg}
    //                 backgroundOverlay={hero.backgroundOverlay}
    //                 services={hero.services}
    //                 style="py-40"
    //                 key={`ameliaAmeliaHeroContentFor${hero.name}`}
    //             />
    //         )}
    //     </div>
    //     {LessonsContent.lessonsThatRock.about.map(lessonsThatRock =>
    //         <ClientAbout
    //             name={lessonsThatRock.name}
    //             about={lessonsThatRock.bio}
    //             slug={lessonsThatRock.slug}
    //         />
    //     )}

    //     <TwoColumnLayout
    //         flexType="reverse"
    //         style="bg-alkaligrey-300 py-24 pb-80 mb-6"
    //         child1={carroGoalImage}
    //         child2={carroGoalText}
    //     >
    //     </TwoColumnLayout>

    //     <div className="px-7">
    //         <div className="pb-24 -mt-56">
    //             <TestimonialSlide
    //                 style="max-w-7xl m-auto shadow-2xl rounded-md"
    //                 background="/images/clients/the-hid-factory/lessonsThatRock-slide-bg.png"
    //                 brandColor="#0d0d0d"
    //                 company="Chattr"
    //                 logo="/images/clients/the-hid-factory/logo.png"
    //                 logoWidth="275"
    //                 logoHeight="50"
    //                 altText=""
    //                 slug="chattr"
    //                 name="Travis Deleon, Operations Manager"
    //                 quote="Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial."
    //             />
    //         </div>
    //     </div>

    //     <TwoColumnLayout
    //         style="bg-white py-24 mb-6"
    //         child1={carroResultText}
    //         child2={carroResultImage}
    //     />
    //     <div className="p-4 py-24 bg-clients-chattr">
    //         <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl m-auto mx-3 xl:mx-auto">
    //             <div><h3 className="text-4xl font-bold max-w-7xl m-auto text-white leading-tight text-center mb-14 lg:mb-0">We're here to realize your vision.</h3></div>
    //             <div className="">
    //                 <Modal
    //                     style="p-3 px-6 font-semibold text-white rounded-md transition hover:text-clients-chattr duration-500 ease-in-out border border-white hover:bg-white"
    //                     text="Schedule a call"
    //                 />
    //             </div>
    //         </div>
    //     </div>

    //     {LessonsContent.lessonsThatRock.screens.map(lessonsThatRock =>
    //         <ResponsiveScreens
    //             style="py-24 overflow-hidden"
    //             link="https://chattr.ai"
    //             desktopLeft={lessonsThatRock.desktopLeft}
    //             desktopRight={lessonsThatRock.desktopRight}
    //             tablet={lessonsThatRock.tablet}
    //             phone={lessonsThatRock.phone}
    //             desktopLeftLink={lessonsThatRock.desktopLeftLink}
    //             desktopRightLink={lessonsThatRock.desktopRightLink}
    //             tabletLink={lessonsThatRock.tabletLink}
    //             phoneLink={lessonsThatRock.phoneLink}
    //         />
    //     )}
    // </div>
}

export default Carro