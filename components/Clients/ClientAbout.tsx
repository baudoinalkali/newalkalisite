import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component

const ClientAbout = props => {
    return (
        <div className="py-24 flex flex-col md:flex-row justify-between max-w-7xl items-center justify-center m-auto mx-7 xl:mx-auto">
            <div className="w-full xs:w-1/2 pb-14 lg:pb-0">
                <h3 className="text-4xl alkaligrey-800 font-play font-bold m-auto leading-tight pb-4 lg:pb-7">{`About ${props.name}`}</h3>
                <div className="flex">
                <a href={props.slug} target="_blank" rel="noopener noreferrer" className="uppercase font-open font-bold text-lg text-alkali-500 duration-500 hover:mr-3">Visit Website</a>
                <FontAwesomeIcon className="text-alkali-500 ml-3 w-5" icon={faLongArrowAltRight}></FontAwesomeIcon>
                </div>
                
            </div>
            <div className="w-full xs:w-1/2 ">
                <p className="text-alkaligrey-400 font-open max-w-4xl text-lg font-normal">{props.about}</p>
            </div>
        </div>
    )
}

export default ClientAbout