import Head from "next/head";
import CombinedNavigation from "../components/Navigation/CombinedNavigation";

export default function ThankYou() {
    return (
        <div>
            <div className="">
                <Head>
                    <title>Thank You | Alkali</title>
                    <meta name="robots" content="noindex, follow," />
                    <link rel="canonical"/>
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
                <div className="py-36 flex text-center justify-center z-20">
                    <div className="relative z-20">
                        <h1 className="text-alkaligrey-800 font-bold pt-5 text-5xl lg:text-6xl max-w-6xl">
                            Thank You!
                        </h1>
                        <video className="mx-auto mt-14 rounded-md shadow-2xl" width="600" height="240" controls poster="/images/thank-you-cover.png">
                            <source src="https://f.hubspotusercontent20.net/hubfs/20442125/thank-you-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="py-10 text-alkaligrey-800 max-w-xl m-auto text-lg lg:text-xl">
                            If you need to talk before your scheduled meeting please use the following email:
                        </p>
                        <a className="text-alkali-500 text-xl" href="mailto:solutions@alkalidesigns.com">solutions@alkalidesigns.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
