import Image from 'next/image'
import Modal from '../components/Modal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function Footer() {

    const solutionLinks = [
        {
            name: "SEO",
            slug: " "
        },
        {
            name: "PPC & Retargeting",
            slug: ""
        },
        {
            name: "Local SEO",
            slug: ""
        },
        {
            name: "Content Marketing",
            slug: ""
        },

        {
            name: "Social Media Marketing",
            slug: ""
        },
        {
            name: "WordPress Websites",
            slug: ""
        },
        {
            name: "E-commerce Websites",
            slug: ""
        },
        {
            name: "Custom Websites",
            slug: ""
        },
        {
            name: "Reputation Management",
            slug: ""
        },
    ]

    return (
        <div className="footer px-7">
            <div className="max-w-7xl m-auto">
                <div className="footer-icon-container">
                    <div className="px-3">
                        <Image
                            src="/images/alkali-logo-small.svg"
                            width={80}
                            height={80}
                        />
                    </div>
                </div>
            </div>
            <div className="flex py-6 pb-14 flex flex-col space-x-0 md:space-x-14 items-end lg:flex-row justify-between max-w-7xl justify-center mx-auto border-b">
                <div className="flex justify-center lg:justify-start w-full lg:w-1/2 m-auto">
                    <div>
                        <p className="text-2xl font-bold text-center lg:text-left">Get in Touch:</p>
                        <a href="tel:+12819445711">
                            <p className="text-3xl font-medium my-6 mb-8 text-alkali-500 text-center lg:text-left">(281) 944-5711</p>
                        </a>
                        <div className="flex items-center space-x-10">
                            <Modal
                                style="p-4 px-8 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700"
                                text="Schedule a Call"
                            />
                            <p className={`flex items-center`}>
                                <a
                                    href={`/contact/#contact-form`}
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
                </div>
                <div className="w-full lg:w-1/2 pt-14">
                    <div className="flex justify-center lg:justify-end gap-x-5 pb-7">
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
                    <div className="gap-x-10 flex justify-center lg:justify-end">
                        <div>
                            About
                        </div>
                        <div>
                            Site Map
                        </div>
                        <div>
                            Privacy Policy
                        </div>
                        <div>
                            Terms of Use
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-center text-alkaligrey-400">
                Alkali © 2021 All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer