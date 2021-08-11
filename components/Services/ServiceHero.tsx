import Modal from '../Modal'
import BGParticles from '../BGParticles'

const ServiceHero = props => {
    return (
        <div className="bg-alkali-500">
            <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
                <div style={{ position: 'absolute' }}>
                    <div className="w-screen h-screen">
                        <BGParticles />
                    </div>

                </div>
                <div className="max-w-7xl flex justify-between items-center m-auto py-24 relative px-10 2xl:px-0">
                    <div className="">
                        <h1 className="portfolio-title font-open text-white uppercase font-open text-md font-bold">{props.sub}</h1>
                        <h2 className="text-4xl md:text-6xl text-white font-play font-bold pt-3 py-10 max-w-4xl">{props.title}</h2>
                        <Modal
                            style="p-3 px-4 font-semibold text-alkali-500 shadow-2xl rounded-md transition duration-500 ease-in-out bg-white hover:bg-gray-100"
                            text="Schedule a Discovery Call"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceHero