import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component

const ClientAbout = props => {
    return (
        <section className="px-7">
            <div className="max-w-7xl m-auto ">
                <div className="py-24 flex flex-col lg:flex-row justify-between  items-center justify-center xl:mx-auto">
                    <div className="w-full text-center lg:text-left xs:w-1/2 pb-14 lg:pb-0">
                        <h3 className="text-4xl alkaligrey-800 font-bold m-auto leading-tight pb-4 lg:pb-7 max-w-lg lg:m-0">{`About ${props.name}`}</h3>
                        <div className="flex items-center justify-center lg:justify-start group space-x-3">
                            <a href={props.slug} target="_blank" rel="noopener noreferrer" className="font-medium text-lg" style={{ color: `${props.brandColor}` }}>Visit Website</a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:transform duration-500 group-hover:translate-x-3 h-6 w-6" style={{ color: `${props.brandColor}` }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-full xs:w-1/2 text-center lg:text-left">
                        <p className="text-alkaligrey-400 max-w-4xl text-lg font-normal">{props.about}</p>
                    </div>
                </div>
            </div>
            <style global jsx>{`
        .footer {
          background: #f8f8f8;
        }
      `}</style>
        </section>
    )
}

export default ClientAbout