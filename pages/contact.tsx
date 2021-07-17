import Header from "../components/Header"
import Modal from "../components/Modal"

function Contact() {
    return (
        <div>
            <div className="bg-alkaligrey-200">
                <Header 
                headerColor="blue"
                />
                <div className="mx-7 xl:mx-auto max-w-7xl m-auto py-44 pb-80">
                    <h1 className="text-6xl font-bold">Contact</h1>
                    <p className="text-xl pt-7">Get in touch and let us know how we can help.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 mx-7 xl:mx-auto justify-between items-center max-w-7xl -mt-32">
                    <div className="rounded-md mb-24 md:mb-0 shadow-2xl p-14 bg-white">
                        <div className="">
                            <img className="-mt-24 w-32 h-32 text-center rounded-full p-5 bg-white shadow-2xl" src="../images/alkalismall.png"/>
                        </div>
                        <h2 className="text-center py-3 pt-11 text-xl font-medium">Chat</h2>
                        <p className="text-center max-w-xs text-lg pb-7">We'd love to talk about how we can work together.</p>
                        <button className="bg-alkali-500 border-1 p-2 px-6 text-white rounded-md shadow-2xl">
                            Chat Now
                    </button>
                    </div>
                    <div className="rounded-md mb-24 md:mb-0 shadow-2xl p-14 bg-white">
                        <div className="">
                            <img className="-mt-24 w-32 h-32 text-center rounded-full p-5 bg-white shadow-2xl" src="../images/alkalismall.png"/>
                        </div>
                        <h2 className="text-center py-3 pt-11 text-xl font-medium">Chat</h2>
                        <p className="text-center max-w-xs text-lg pb-7">We'd love to talk about how we can work together.</p>
                        <button className="bg-alkali-500 border-1 p-2 px-6 text-white rounded-md shadow-2xl">
                            Chat Now
                    </button>
                    </div>
                    <div className="rounded-md mb-24 md:mb-0 shadow-2xl p-14 bg-white">
                        <div className="">
                            <img className="-mt-24 w-32 h-32 text-center rounded-full p-5 bg-white shadow-2xl" src="../images/alkalismall.png"/>
                        </div>
                        <h2 className="text-center py-3 pt-11 text-xl font-medium">Chat</h2>
                        <p className="text-center max-w-xs text-lg pb-7">We'd love to talk about how we can work together.</p>
                        <button className="bg-alkali-500 border-1 p-2 px-6 text-white rounded-md shadow-2xl">
                            Chat Now
                    </button>
                    </div>
            </div>
        </div>
    )
}

export default Contact