import Modal from '../Modal'

const ServiceHero = props => {
    return (
        <div className="bg-alkali-500 px-7">
            <div className="App max-w-7xl m-auto" style={{ position: 'relative', overflow: "hidden" }}>
                <div style={{ position: 'absolute' }}>
                    <div className="w-screen h-screen">
                    </div>

                </div>
                <div className="flex justify-between items-center py-24 relative">
                    <div className="">
                        <h1 className="portfolio-title text-white uppercase text-md font-bold">{props.sub}</h1>
                        <h2 className="text-4xl md:text-6xl text-white font-bold pt-3 pb-14 max-w-4xl leading-normal">{props.title}</h2>
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