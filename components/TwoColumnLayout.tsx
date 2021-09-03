const TwoColumnLayout = props => {
    const flexType = () => {
        return `${props.flexType === 'reverse' ? 'flex-col-reverse' : 'flex-col'} flex lg:flex-row m-auto justify-between items-center max-w-7xl space-x-0 lg:space-x-10`
    }

    return (
        <div className={`${props.style} py-24 px-7`}>
            <div className={flexType()}>
                <div className="w-full lg:w-1/2">
                    {props.child1}
                </div>
                <div className="w-full lg:w-1/2">
                    {props.child2}
                </div>
            </div>
        </div>
    )
}

export default TwoColumnLayout