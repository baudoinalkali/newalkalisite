const SiteMapContainer = props => {
    return (
        <a href={`/solutions/${props.slug}`} className="text-alkaligrey-400 text-md">
            <div className="py-4">{props.name}</div>
        </a>
    )
}

export default SiteMapContainer