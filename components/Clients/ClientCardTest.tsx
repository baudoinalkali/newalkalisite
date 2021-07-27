import Image from 'next/image'

const ClientCardTest = props => {

    return (
        <a href={`/clients/${props.slug}`} className="group transition duration-500 rounded-md shadow-2xl pt-14 px-7 overflow-hidden text-white" style={{ height: "500px", backgroundColor: `${props.backgroundColor}`}}>
            <div className="font-bold text-4xl group-hover:hidden">{props.name}</div>
            <div className="group-hover:hidden">{props.industry}</div>
            <div className="justify-center p-4 px-6 w-48 m-auto font-medium text-white hover:bg-white hover:bg-opacity-20 rounded-md transition duration-500 ease-in-out border border-white hidden group-hover:flex" style={{ marginTop: "10.5rem" }}>View Project</div>
            <img className="mt-10 group-hover:hidden shadow-2xl" src={props.pageImage}></img>
        </a>
    )
}

export default ClientCardTest