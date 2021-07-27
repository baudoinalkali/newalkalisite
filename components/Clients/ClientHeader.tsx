import Image from 'next/image'
import CombinedNavigation from '../Navigation/CombinedNavigation'

const ClientHeader = props => {
    const headerBackgroundType = () => {
        return `${props.backgroundOverlay == 'true' ? 'client-hero' : ''}`
    }

    return (
        <section className={headerBackgroundType()} style={{ backgroundImage: `url(${props.backgroundImg})`, backgroundColor: `${props.backgroundColor}`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <CombinedNavigation
                headerColor="white"
                headerLogoColor="white"
            />
            <div className={`max-w-7xl flex-col lg:flex-row flex justify-between items-center m-auto ${props.style} px-7`}>
                <div className="w-full lg:w-1/2 2xl:mx-0">
                    <p className="uppercase text-white font-bold">{props.sub}</p>
                    <h1 className="text-6xl text-white font-bold pt-3 pb-10">{props.title}</h1>
                    <div className="">
                        <div className="">
                            {props.service.map(service =>
                                <a href={props.serviceSlug}>
                                    <span className="border border-white p-2 mr-7 rounded-md text-xs text-center text-white uppercase font-medium hover:bg-white hover:text-alkaligrey-800" key={service}>
                                        {service}
                                    </span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex">
                    <img
                        src={props.heroImage}
                    />
                </div>
            </div>
        </section>
    )
}

export default ClientHeader