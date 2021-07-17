import Modal from '../components/Modal'

const PageHero = props => {
    return (
        <div className="flex justify-between items-center max-w-7xl m-auto pt-12">
            <div className="w-3/5 z-10">
                <div className="">
                    <h1 className="text-6xl font-bold max-w-2xl">{props.title}</h1>
                    <p className="text-lg pt-11 max-w-2xl">{props.text}</p>
                    <div className="flex max-w-7xl m-auto items-center pt-7">
                        <div>
                            <a href={props.button1url}>
                            <button className="bg-alkali-500 border-1 p-2 px-6 text-white rounded-md shadow-2xl">
                                {props.button1}
                            </button>
                            </a>
                        </div>
                        <div className="ml-7">
                            <Modal
                                style="p-3 px-6 font-semibold text-alkali-500 transition duration-500 ease-in-out"
                                text="Contact Us &rarr;"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/5 z-10">
                <div className="">
                    <img src={props.image}/>
                </div>
            </div>
        </div>
    )
}
export default PageHero