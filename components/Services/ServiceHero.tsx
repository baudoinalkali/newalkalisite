import Modal from '../Modal'
import BGParticles from '../BGParticles'

const ServiceHero = props => {
    return (
        <div className="bg-alkali-500">
            <div className="App px-7" style={{ position: 'relative', overflow: "hidden" }}>
                <div style={{ position: 'absolute' }}>
                    <div className="w-screen h-screen invisible lg:visible">
                        <BGParticles />
                    </div>
                </div>
                <div className="max-w-7xl flex justify-between items-center m-auto py-24 relative">
                    <div className="w-full lg:w-8/12">
                        <h1 className="portfolio-title text-white uppercase text-md font-bold">{props.sub}</h1>
                        <h2 className={`text-4xl md:text-6xl text-white font-bold pt-3 py-10 ${props.titleLength}`}>{props.title}</h2>
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