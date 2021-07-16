const StandardTextBlock = (props) => {
    return (
        <div className="pb-10 lg:pb-0 text-center lg:text-left">
            <div className="portfolio-title text-alkaligrey-400 uppercase text-md font-bold">{props.sub}</div>
            <h3 className="text-3xl md:text-4xl font-bold m-auto leading-tight pt-7">{props.title}</h3>
            <p className="text-alkaligrey-400 max-w-4xl text-lg font-normal pt-7">{props.text}</p>
        </div>
    )
}

export default StandardTextBlock