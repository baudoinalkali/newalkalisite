import Head from "next/head";
import CombinedNavigation from "../components/Navigation/CombinedNavigation";

function Privacy() {
    return (
        <div>
            <Head>
                <title>Privacy Policy | Alkali</title>
                <meta name="robots" content="noindex, follow," />
                <link rel="canonical" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Privacy Policy | Alkali" />
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
                    <h1 className="text-5xl lg:text-6xl font-bold pb-14">
                        Privacy Policy
                    </h1>
                    <div>
                        <p className="text-lg text-alkaligrey-400">
                            Privacy is of high priority for Alkali. Therefore, we do our best to protect the privacy of users that browse our website. Our Privacy Policy discloses how we collect, use, and safeguard our clients’ & users’ privacy. This policy explains how we use the information that you provide and/or we collect from our website users. By using our website, services, mailings, and other services we provide, you agree to the collection and use of the information that you provide outlined in our Privacy Policy.
                        </p>
                        <h2 className="mt-14 mb-5 text-3xl lg:text-4xl font-bold">What We May Collect</h2>
                        <p className="text-lg text-alkaligrey-400">
                            We may automatically collect information such as: name of domain, host from which you access the internet, IP address of the computer, browser software & operating system, and internet address that linked you to our site. However, personal information such as: name, address, e-mail, and phone number can only be collected with your consent through signing up for newsletter and/or contacting us.
                        </p>
                        <h2 className="mt-14 mb-5 text-3xl lg:text-4xl font-bold">Why We Collect</h2>
                        <p className="text-lg text-alkaligrey-400">
                            Alkali keeps this data anonymous and within the company. We do not share, rent, nor sell the information provided to us. Personal information is only used to fulfill your inquiries, contact you, provide services, and marketing efforts.
                            Non-personal information is used to identify which features of our website do users find useful. We do this in order to keep on improving our website for better user experience.
                            Your privacy is our top priority. All information transmitted between the user and Alkali is encrypted and transmitted between the two parties in a secured way.
                            We may release information when we deem it appropriate to comply with the law.
                        </p>
                        <h2 className="mt-14 mb-5 text-3xl lg:text-4xl font-bold">Privacy Policy Updates</h2>
                        <p className="text-lg text-alkaligrey-400">
                            Any new changes to our Privacy Policy will be posted here in order to keep our users updated on any improvements of our privacy policies.
                            For any questions about our Privacy Policies, feel free to contact us through: solutions@alkalidesigns.com.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Privacy;
