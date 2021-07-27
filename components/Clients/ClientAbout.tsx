import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component

const ClientAbout = props => {
    return (
        <section className="max-w-7xl m-auto">
            <div className="py-24 flex flex-col lg:flex-row justify-between  items-center justify-center px-7 xl:mx-auto">
                <div className="w-full text-center lg:text-left xs:w-1/2 pb-14 lg:pb-0">
                    <h3 className="text-4xl alkaligrey-800 font-bold m-auto leading-tight pb-4 lg:pb-7">{`About ${props.name}`}</h3>
                    <div className="flex items-center justify-center lg:justify-start">
                        <a href={props.slug} target="_blank" rel="noopener noreferrer" className="uppercase font-bold text-lg duration-500 hover:mr-3" style={{color: `${props.brandColor}`}}>Visit Website</a>
                        <FontAwesomeIcon className="ml-3 w-5" icon={faLongArrowAltRight} style={{color:`${props.brandColor}`}}></FontAwesomeIcon>
                    </div>

                </div>
                <div className="w-full xs:w-1/2 text-center lg:text-left">
                    <p className="text-alkaligrey-400 max-w-4xl text-lg font-normal">{props.about}</p>
                </div>
            </div>
        </section>
    )
}

export default ClientAbout