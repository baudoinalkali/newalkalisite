import Head from "next/head";
import CombinedNavigation from "../components/Navigation/CombinedNavigation";
import Image from "next/image"

const ServiceLinks = [
    {
        name: "Search Engine Optimization",
        slug: "digital-marketing/search-engine-optimization"
    },
    {
        name: "WordPress Development",
        slug: "web-development/wordpress-website-development"
    },
    {
        name: "PPC & Retargeting",
        slug: "digital-marketing/pay-per-click-advertising"
    },
    {
        name: "E-commerce Development",
        slug: "web-development/ecommerce-website-development"
    },
    {
        name: "Local Seach Engine Optimization",
        slug: "digital-marketing/local-search-engine-optimization"
    },
    {
        name: "Reputation Management",
        slug: "digital-marketing/reputation-management"
    },
    {
        name: "Content Marketing",
        slug: "digital-marketing/content-marketing"
    },
    {
        name: "Custom Development",
        slug: "web-development/custom-website-development"
    },
    {
        name: "Social Media Marketing",
        slug: "digital-marketing/social-media-marketing"
    }
]

const clientLinks = [
    {
        name: "Carro",
        slug: "carro",
    },
    {
        name: "Chattr",
        slug: "chattr",
    },
    {
        name: "Blockchain Education Network",
        slug: "ben",
    },
    {
        name: "Homewatch Amelia",
        slug: "amelia",
    },
    {
        name: "Bobtail",
        slug: "bobtail",
    },
    {
        name: "Magnetite",
        slug: "magnetite",
    },
    {
        name: "Go-Cottage",
        slug: "go-cottage",
    },
    {
        name: "The HID Factory",
        slug: "the-hid-factory",
    },
    {
        name: "CarTalk Repair",
        slug: "cartalk-repair",
    },
    {
        name: "The Blue Collar Success Group",
        slug: "bluecollar",
    },
    {
        name: "AWP Delivers",
        slug: "awp",
    }
]

export default function ThankYou() {
    return (
        <div>
            <div className="">
                <Head>
                    <title>Thank You | Alkali</title>
                    <meta name="robots" content="noindex, follow," />
                    <link rel="canonical" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Thank You | Alkali" />
                    <meta property="og:url" content="/" />
                    <meta property="og:site_name" content="Alkali" />
                    <meta property="article:modified_time" content="2021-08-05T14:33:32+00:00" />
                    <meta property="og:image" content="/images/facebook-image.jpg" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <CombinedNavigation headerBackground="bg-white" />
                <section className="px-7">
                    <div className="max-w-7xl m-auto py-24">
                        <h1 className="text-5xl lg:text-6xl font-bold">
                            Site Map
                        </h1>
                        <ul className="list-disc text-lg ml-10 pt-10 space-y-3">
                            <li className="text-alkali-500">
                                    <a href="/" className="text-alkaligrey-400 hover:text-alkali-500 duration-500">
                                        Home
                                    </a>
                            </li>
                            <li className="text-alkali-500">
                                <a href="" className="text-alkaligrey-400 hover:text-alkali-500 duration-500">
                                    Solutions
                                </a>
                            </li>
                            {ServiceLinks.map((linksData) => (
                                <li className="text-alkali-500 ml-10">
                                        <a href={`/solutions/${linksData.slug}`} className="text-alkaligrey-400 hover:text-alkali-500 duration-500">
                                            {linksData.name}
                                        </a>
                                </li>
                            ))}
                            <li className="text-alkali-500">
                                    <a href="/clients" className="text-alkaligrey-400 hover:text-alkali-500 duration-500">
                                        Clients
                                    </a>
                            </li>
                            {clientLinks.map((linksData) => (
                                <li className="text-alkali-500 ml-10">
                                        <a href={`/clients/${linksData.slug}`} className="text-alkaligrey-400 hover:text-alkali-500 duration-500">
                                            {linksData.name}
                                        </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}
