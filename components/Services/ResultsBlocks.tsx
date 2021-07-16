import Image from 'next/image'

const ResultsBlocks = (props) => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-white rounded-md shadow-2xl justify-between px-7 py-4 border-none">
            <div className="text-center">
                <Image 
                    src={props.image}
                    width={100}
                    height={100}
                    alt={props.altText}
                />
            </div>
            <div>
                <h3 className="text-alkali-500 relative font-bold text-4xl py-4 pb-4 text-center md:text-left">{props.result}</h3>
                <p className="uppercase text-md">{props.resultName}</p>
            </div>
        </div>
    )
}

export default ResultsBlocks