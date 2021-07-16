import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCode, faCubes, faPaintBrush, faRocket, faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const OurProcess = props => {
    const eventDotWrapperClass = () => {
        return `flex flex-col ${props.type % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} rounded-b-md relative self-center max-w-7xl mx-10 2xl:m-auto shadow-2xl md:shadow-none z-10`
    }

    const eventDotClass = () => {
        const directionalClass = props.type % 2 === 0 ? 'event-dotR md:ml-7' : 'event-dotL md:mr-7'
        const pseudoElementClass = props.isLastItem ? 'skipVerticalLine' : ''
        
        return `${directionalClass} ${pseudoElementClass} ml-0 bg-alkali-500 text-center rounded-none md:rounded-full w-auto h-auto md:w-20 md:h-20 self-stretch md:self-center p-6 shadow-none md:shadow-2xl rounded-t-md md:rounded-none`

    }

    const eventTitleContainerClass = () => {
        return `${props.type % 2 === 0 ? `md:rounded-r-md` : `md:rounded-l-md`} bg-alkali-500 relative shadow-none md:shadow-2xl text-white text-xl flex align-center justify-center w-full md:w-3/12 rounded-none relative 1-10`
    }

    const eventTextContainerClass = () => {
        return `${props.type % 2 === 0 ? `rounded-b-md md:rounded-b-none md:rounded-l-md` : `rounded-b-md md:rounded-b-none md:rounded-r-md`} bg-white p-4 py-8 shadow-none md:shadow-2xl w-full md:w-8/12`
    }
    const icons = {
        'faSearch': faSearch,
        'faPaintBrush': faPaintBrush,
        'faCode': faCode,
        'faCubes': faCubes,
        'faRocket': faRocket,
    }

    return (
        <div className="mb-16 md:mb-36">
            <div className={eventDotWrapperClass()}>
                <div className={eventDotClass()}>
                    <FontAwesomeIcon className="text-3xl text-white" icon={icons[props.icon]}></FontAwesomeIcon>
                </div>
                <div className={eventTitleContainerClass()}>
                    <div className="relative self-center text-center px-4 pb-7 md:pb-0">{props.title}</div>
                </div>
                <div className={eventTextContainerClass()}>
                    <div
                        className="text-center sm:text-left ml-none sm:ml-7 lg:ml-14"
                        dangerouslySetInnerHTML={{ __html: props.step }}
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurProcess