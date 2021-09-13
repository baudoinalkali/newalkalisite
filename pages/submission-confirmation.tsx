import Head from "next/head";
import CombinedNavigation from "../components/Navigation/CombinedNavigation";
import Image from "next/image"

export default function SubmissionConfirmation() {
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
                <div className="py-24 lg:py-36 flex text-center justify-center z-20 px-7">
                    <div className="relative z-20">
                        <Image
                            src="/images/thank-you.svg"
                            width="460"
                            height="311"
                        />
                        <p className="py-10 pt-24 text-alkaligrey-800 max-w-xl m-auto text-lg lg:text-xl">
                            Thank you for your submission, we will be in touch shortly. Should you need to contact us sooner, please use the email below:
                        </p>
                        <a className="text-alkali-500 text-xl" href="mailto:solutions@alkalidesigns.com">solutions@alkalidesigns.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
