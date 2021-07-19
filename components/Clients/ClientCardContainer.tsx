const ClientCardContainer = props => {
    return (
        <div className={`${props} px-7`}>
            <div className="max-w-7xl m-auto py-36 pt-72 -mt-72">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 max-w-7xl m-auto transition duration-500 content-center relative justify-center">
                    {props.children}
                </ul>
            </div>
        </div>
    )
}
export default ClientCardContainer