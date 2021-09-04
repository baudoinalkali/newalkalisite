const StandardTextBlock = (props) => {
    return (
        <div className="pb-10 lg:pb-0 text-center lg:text-left">
            <div className="portfolio-title text-alkaligrey-400 uppercase text-md font-medium">{props.sub}</div>
            <h2 className={`text-4xl md:text-5xl font-bold m-auto lg:m-0 leading-tight pt-3 lg:${props.titleLength}`}>{props.title}</h2>
            <p className="text-alkaligrey-400 max-w-4xl text-lg font-normal pt-10">{props.text}</p>
        </div>
    )
}

export default StandardTextBlock