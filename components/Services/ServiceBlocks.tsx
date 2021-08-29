import Image from 'next/image'

const ServiceBlocks = (props) => {
    return (
        <div className="rounded shadow-2xl p-7 bg-white">
            <Image 
                src={props.image}
                width={60}
                height={60}
                alt={props.altText}
            />
            <h4 className="py-3 font-bold">{props.serviceTitle}</h4>
            <p className="text-alkaligrey-400">{props.serviceText}</p>
        </div>
    )
}

export default ServiceBlocks