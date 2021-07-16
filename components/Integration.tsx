import Image from 'next/image'
import WordPressIntegrations from '../content/servicePages/integrationContent'

const Integrations = props => {
    return (
        <div className={`${props.style}`}>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-y-10 max-w-7xl m-auto">
                {
                    WordPressIntegrations.wordpress.map((wordpress) =>
                        <div className="relative m-auto" style={{ fontSize: '0' }}>
                            <Image
                                height={144}
                                width={144}
                                quality={100}
                                className="object-center object-cover pointer-events-none rounded-full duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                                src={`/images/icons/${wordpress.fileName}.png`}
                                alt={wordpress.altText}
                            />
                            <div className="IntegrationIconContainer relative z-1">
                                <div className="IntegrationIcon text-center py-16 m-auto shadow-2xl h-36 w-36 rounded-full bg-center">
                                    <span className="IconSpan transition duration-500 pointer-events-none shadow-2xl relative-30">{wordpress.name}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <p className="text-center text-lg pt-16">and many more</p>
        </div>
    )
}
export default Integrations;
