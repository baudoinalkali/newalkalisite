import Image from 'next/image'

function Footer() {
    return (
        <div className="">
            <div className="max-w-7xl m-auto">
                <div className="footer-icon-container">
                    <Image
                        src="/images/alkali-logo-small.svg"
                        width={80}
                        height={80}
                    />
                </div>
            </div>
            <div className="flex py-10 flex flex-col space-x-0 md:space-x-14 md:flex-row justify-between max-w-7xl justify-center mx-auto border-b mb-10 px-7">
                <div className="w-full md:w-2/5 m-auto">
                    <p className="text-alkaligrey-400 max-w-full md:max-w-md py-5 text-lg m-auto">
                        Information about Alkali. Information about Alkali. Information about Alkali. Information about Alkali. Information about Alkali. Information about Alkali. Information about Alkali. Information about Alkali. Information about Alkali.
                    </p>
                </div>
                <div className="w-full md:w-3/5">
                    <div className="flex pt-8 flex space-x-20 max-w-7xl justify-center md:justify-end m-auto">
                        <div className="">
                            <div className="font-bold uppercase text-lg">
                                Solutions
                            </div>
                            <div className="text-alkaligrey-400 text-lg pt-4">
                                Digital Marketing
                            </div>
                            <div className="text-alkaligrey-400 text-lg pt-4">
                                Web Design & Development
                            </div>
                            <div className="text-alkaligrey-400 text-lg pt-4">
                                PPC & Retargeting
                            </div>
                            <div className="text-alkaligrey-400 text-lg pt-4">
                                SEO Services
                            </div>
                            <div className="text-alkaligrey-400 text-white text-lg pt-4">
                                Local SEO
                            </div>
                            <div className="text-alkaligrey-400 text-white text-lg pt-4">
                                Content Marketing
                            </div>
                            <div className="text-alkaligrey-400 text-white text-lg pt-4">
                                Social Media Marketing
                            </div>
                            <div className="text-alkaligrey-400 text-white text-lg pt-4">
                                Reputation Management
                            </div>
                        </div>
                        <div className="">
                            <div className="font-bold uppercase text-lg">
                                Inside Alkali
                            </div>
                            <div className="text-alkaligrey-400 text-lg pt-4">
                                About
                            </div>
                            <div className="text-alkaligrey-400 text-lg pt-4">
                                Clients
                            </div>
                            <div className="text-alkaligrey-400 text-lg pt-4">
                                Blog
                            </div>
                            <div className="text-alkaligrey-400 text-lg pt-4">
                                Contact Us
                            </div>
                            <div className="text-alkaligrey-400 text-lg pt-4">
                                Careers
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex max-w-7xl m-auto mb-10 text-alkaligrey-400">
                <div className="w-1/2 gap-x-10 flex">
                    <div>
                        Sitemap
                    </div>
                    <div>
                        Privacy
                    </div>
                </div>
                <div className="w-1/2">

                </div>
            </div>
        </div>
    )
}

export default Footer