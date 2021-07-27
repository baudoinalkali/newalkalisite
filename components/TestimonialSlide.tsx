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
                            className="relative"
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
                        <div className={`relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed ${slugVisibilitySpacing()}`}>
                            <p className="text-gray-900">
                                {props.quote}
                            </p>
                            <p className="mt-5 font-bold">
                                {`- ${props.name}`}
                            </p>
                            <p className={`mt-6 flex items-center ${slugVisibilityType()}`}>
                                <a href={`/clients/${props.slug}`} style={{ color: `${props.brandColor}` }} className="font-medium duration-500 hover:text-gray-900 hover:mr-3">
                                    {`Learn more about ${props.company}'s project`}
                                </a>
                                <FontAwesomeIcon className="ml-3 w-5" icon={faLongArrowAltRight} style={{ color: `${props.brandColor}` }}></FontAwesomeIcon>
                            </p>
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