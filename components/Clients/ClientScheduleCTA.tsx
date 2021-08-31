import Modal from "../../components/Modal";

const ClientScheduleCTA = props => {
    return (
        <section className="px-7" style={{backgroundColor:`${props.brandColor}`}}>
            <div className=" py-24 max-w-7xl m-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl m-auto mx-3 xl:mx-auto">
                    <div>
                        <h3 className="text-4xl font-bold max-w-7xl m-auto text-white leading-tight text-center mb-14 lg:mb-0">
                            We're Here to Realize Your Vision.
                        </h3>
                    </div>
                    <div className="">
                        <Modal
                            style="p-3 px-6 font-semibold text-alkaligrey-800 shadow-2xl rounded-md transition duration-500 ease-in-out bg-white hover:bg-alkaligrey-700"
                            text="Schedule a call"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientScheduleCTA