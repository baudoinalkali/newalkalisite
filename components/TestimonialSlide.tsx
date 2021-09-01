import Image from 'next/image'
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component


const TestimonialSlide = (props) => {

    const slugVisibilityType = () => {
        return `${props.slugVisibility === "true" ? '' : 'hidden'} `
    }

    const slugVisibilitySpacing = () => {
        return `${props.slugVisibility === "true" ? '' : 'my-0 lg:my-4'} `
    }
    const slugSpacing = () => {
        return `${props.slugVisibility === "true" ? 'mb-7' : 'mb-0'} `
    }

    return (
        <div className={props.style}>
            <div className="relative">
                <div className="relative lg:flex overflow-hidden rounded-md">
                    <div className="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center" style={{ fontSize: '0' }}>
                        <Image
                            className="absolute object-cover"
                            src={props.background}
                            layout="fill"
                        />
                        <div style={{ backgroundColor: `${props.brandColor}` }} className="absolute inset-0 opacity-75"></div>
                        <Image
                            className="relative "
                            src={props.logo}
                            alt={props.altText}
                            width={props.logoWidth}
                            height={props.logoHeight}
                        />
                    </div>
                    <div className="relative lg:w-7/12 bg-white">
                        <svg className="absolute h-full text-white w-24 -ml-12" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                        <div className={`relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 text-lg leading-relaxed ${slugVisibilitySpacing()}`}>
                            <p className="text-gray-900">
                                {props.quote}
                            </p>
                            <p className={`mt-5 font-medium ${slugSpacing()}`}>
                                {`- ${props.name}`}
                            </p>
                            <div className={`flex items-center justify-start group space-x-3 ${slugVisibilityType()}`}>
                                <a href={props.slug} className={`text-md text-alkaligrey-900`} style={{color: `${props.brandColor}`}}>Learn More</a>
                                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:transform duration-500 group-hover:translate-x-3 h-5 w-5" style={{color: `${props.brandColor}`}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 left-0 lg:flex lg:items-center">
                </div>
                <div className="absolute inset-y-0 right-0 lg:flex lg:items-center">
                </div>
            </div>
        </div>
    )
}

export default TestimonialSlide