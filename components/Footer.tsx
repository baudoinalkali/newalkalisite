import Image from 'next/image'
import Modal from '../components/Modal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function Footer() {
    return (
        <div className="footer">
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
                    <p className="text-2xl font-bold">Get in Touch:</p>
                    <a href="tel:+12819445711">
                        <p className="text-3xl font-medium my-6 mb-8 text-alkali-500">(281) 944-5711</p>
                    </a>
                    <div className="flex items-center space-x-10">
                        <Modal
                            style="p-4 px-8 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700"
                            text="Schedule a Call"
                        />
                        <p className={`flex items-center`}>
                            <a
                                href={`/contact`}
                                className="font-medium duration-500 hover:mr-3 text-alkaligrey-900"
                            >
                                {`Contact Form`}
                            </a>
                            <FontAwesomeIcon
                                className="ml-3 w-5 text-alkaligrey-900"
                                icon={faLongArrowAltRight}
                            ></FontAwesomeIcon>
                        </p>
                    </div>

                </div>
                <div className="w-full md:w-3/5">
                    <div className="flex pt-8 flex space-x-20 max-w-7xl justify-center md:justify-end m-auto">
                        <div className="">
                            <div className="font-bold text-xl">
                                Solutions
                            </div>
                            <div className="grid grid-cols-2">
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
                        </div>
                        <div className="">
                            <div className="font-bold text-xl">
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
            <div className="flex max-w-7xl m-auto mb-10 text-alkaligrey-400 items-center">
                <div className="w-1/2 gap-x-10 flex">
                    <div>
                        Sitemap
                    </div>
                    <div>
                        Privacy Policy
                    </div>
                    <div>
                        Terms of Use
                    </div>
                </div>
                <div className="w-1/2 flex justify-end gap-x-5">
                    <Image
                        src="/images/facebook-icon.svg"
                        width="32"
                        height="32"
                    />
                    <Image
                        src="/images/instagram-icon.svg"
                        width="32"
                        height="32"
                    />
                    <Image
                        src="/images/linkedin-icon.svg"
                        width="32"
                        height="32"
                    />
                    <Image
                        src="/images/twitter-icon.svg"
                        width="32"
                        height="32"
                    />
                </div>
            </div>
            <div className="bg-alkaligrey-300 py-6 text-center text-alkaligrey-400">
                Alkali © 2021 All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer