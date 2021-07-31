import Image from 'next/image'

const ClientCardTest = props => {
    const clientNameLength = () => {
        return `${props.name.length > 20 ? '22rem' : '24.5rem'} `
    }

    const clientNameLength2 = () => {
        return `${props.name.length > 20 ? '-7.2rem' : '-9.5rem'} `
    }

    return (
        <a href={`/clients/${props.slug}`}>
            <div className="group duration-500 rounded shadow-2xl px-4 pb-10 m-auto client-card-bg" style={{ paddingTop: `${clientNameLength()}`, height: "475px", backgroundImage: `url("${props.backgroundImage}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundColor: `${props.backgroundColor}` }}>
                <div className="justify-center p-4 px-6 w-48 m-auto font-medium text-white hover:bg-white hover:bg-opacity-20 rounded-md transition duration-500 ease-in-out border border-white hidden group-hover:flex" style={{ marginTop: `${clientNameLength2()}`}}>View Project</div>
                <div className="text-white group-hover:hidden">{props.industry}</div>
                <div className="font-bold text-2xl xl:text-4xl text-white group-hover:hidden">{props.name}</div>
            </div>
        </a>
    )
}

export default ClientCardTest