import Image from 'next/image'
import Modal from '../components/Modal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function Footer() {

    const solutionLinks = [
        {
            name: "SEO",
            slug: ""
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
                        <div className="flex flex-col md:flex-row space-x-0 space-y-10 items-center md:space-y-0 md:space-x-10">
                            <Modal
                                style="p-4 px-8 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700"
                                text="Schedule a Call"
                            />
                            <a href="/contact">
                                <div className="flex items-center lg:justify-start group space-x-3">
                                    <div className="font-medium text-md text-alkaligrey-400 group-hover:text-alkali-500">
                                        Contact Form
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="group-hover:transform duration-500 group-hover:translate-x-3 h-4 w-4 group-hover:text-alkali-500 text-alkaligrey-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 pt-14">
                    <div className="flex justify-center lg:justify-end gap-x-5 pb-7">
                        <a href="https://facebook.com/alkalidesigns" target="_blank">
                            <Image
                                src="/images/facebook-icon.svg"
                                width="32"
                                height="32"
                            />
                        </a>
                        <a href="https://instagram.com/alkalidesigns" target="_blank">
                            <Image
                                src="/images/instagram-icon.svg"
                                width="32"
                                height="32"
                            />
                        </a>
                        <a href="https://www.linkedin.com/company/alkalidesigns" target="_blank">
                            <Image
                                src="/images/linkedin-icon.svg"
                                width="32"
                                height="32"
                            />
                        </a>
                        <a href="https://twitter.com/alkalidesigns" target="_blank">
                            <Image
                                src="/images/twitter-icon.svg"
                                width="32"
                                height="32"
                            />
                        </a>
                    </div>
                    <div className="pt-6 lg:pt-0 gap-x-10 flex justify-center lg:justify-end text-alkaligrey-400">
                        <a href="/about/">
                            About
                        </a>
                        <a href="/site-map">
                            Site Map
                        </a>
                        <a href="/privacy-policy/">
                            Privacy Policy
                        </a>
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