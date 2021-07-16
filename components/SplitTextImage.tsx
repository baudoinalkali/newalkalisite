const SectionIntroAlt = props => {
    return (
        <div className={props.style}>
            <div className="p-4 flex flex-col lg:flex-row justify-between items-center max-w-7xl m-auto">
                <div className="w-full lg:w-3/6 px-14 2xl:px-0 mr-14">
                    <div className="portfolio-title text-alkaligrey-400 uppercase text-md font-bold">{props.sub}</div>
                    <h3 className="text-4xl font-bold m-auto leading-tight pt-7">{props.title}</h3>
                    <p className="text-alkaligrey-400 max-w-4xl text-lg font-normal pt-7">{props.text}</p>
                </div>
                <div className="w-full lg:w-3/6">
                    <div className=""><img className="rounded-md" src={props.image}/></div>
                </div>
            </div>
        </div>
    )
}
export default SectionIntroAlt