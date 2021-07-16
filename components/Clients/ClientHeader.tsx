import Image from 'next/image'
import CombinedNavigation from '../Navigation/CombinedNavigation'

const ClientHeader = props => {
    const headerBackgroundType = () => {
        return `${props.backgroundOverlay == 'true' ? 'client-hero' : ''}`
    }

    return (
        <div className={headerBackgroundType()} style={{ backgroundImage: `url(${props.backgroundImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <CombinedNavigation
                headerColor="white"
            />
            <div className={`max-w-7xl flex justify-between items-center m-auto ${props.style}`}>
                <div className="w-full md:w-1/2 ml-7 2xl:mx-0">
                    <p className="uppercase text-white font-open font-medium">{props.sub}</p>
                    <h1 className="text-6xl text-white font-play font-bold pt-3 pb-10">{props.title}</h1>
                    <div className="">
                        <div className="">
                            {props.service.map(service =>
                                <a href={props.serviceSlug}>
                                    <span className="border border-white p-2 mr-7 rounded-md text-xs text-center text-white uppercase font-open font-bold hover:bg-white hover:text-alkaligrey-800" key={service}>
                                        {service}
                                    </span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="invisible md:visible">
                    <img
                        src={props.heroImage}
                    />
                </div>
            </div>
        </div>
    )
}

export default ClientHeader