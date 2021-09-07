import CombinedNavigation from "../components/Navigation/CombinedNavigation";
import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import HubspotForm from "react-hubspot-form";
import Head from "next/head";
import Image from "next/image";

function Contact() {

  const contactInfo = [
    {
      method: "Chat",
      description: "We'd love to talk about how we can work together",
      slug: "/contact/#hs-chat-open",
      icon: "/images/chat.svg",
      alt: "Start a chat with Alkali",
      buttonName: "Start Chat"
    },
    {
      method: "Email",
      description: "We'd love to talk about how we can work together",
      slug: "mailto:solutions@alkalidesigns.com",
      icon: "/images/email.svg",
      alt: "Send an email to Alkali",
      buttonName: "Send Email"
    },
    {
      method: "Phone",
      description: "We'd love to talk about how we can work together",
      slug: "tel:2819445711",
      icon: "/images/phone.svg",
      altText: "Start a call with Alkali",
      buttonName: "Start Call"
    }
  ]

  return (
    <div>
      <Head>
        <title>Contact | Alkali</title>
        <meta name="description" content="Alkali is your one-stop destination for all your web and digital marketing needs. We are here to maximize your online presence." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical"/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact | Alkali" />
        <meta property="og:description" content="Alkali is your one-stop destination for all your web and digital marketing needs. We are here to maximize your online presence." />
        <meta property="og:url" content="/" />
        <meta property="og:site_name" content="Alkali" />
        <meta property="article:modified_time" content="2021-08-05T14:33:32+00:00" />
        <meta property="og:image" content="/images/facebook-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="bg-alkaligrey-300">
        <CombinedNavigation headerBackground="bg-alkaligrey-300" />
        <div className="py-20 pb-64 flex text-center justify-center z-20">
          <div className="relative z-20">
            <h1 className="text-alkaligrey-800 font-bold pt-5 text-5xl lg:text-6xl max-w-6xl">
              Contact
            </h1>
            <p className="text-white py-10 text-alkaligrey-800 max-w-2xl m-auto text-xl lg:text-2xl">
              Get in touch and let us know how we can help.
            </p>
          </div>
        </div>
      </div>
      <section className="px-7">
        <div className="flex flex-col lg:flex-row gap-x-0 md:gap-x-10 gap-y-24 lg:gap-y-0  xl:mx-auto justify-between items-center max-w-7xl -mt-32">
          {contactInfo.map((item) => (
            <div className="rounded-md shadow-2xl p-14 bg-white">
              <div className="-mt-24 rounded-full bg-white w-36 h-36 shadow-2xl mx-auto" style={{backgroundImage: `url(${item.icon})`, backgroundSize:"fit", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
              </div>
              <h2 className="text-center py-3 pt-11 text-xl font-medium">{item.method}</h2>
              <p className="text-center max-w-xs text-lg pb-7">
                {item.description}
              </p>
              <div className="flex justify-center">
                <a href={item.slug}>
                  <button className="p-2 px-8 font-medium shadow-2xl rounded-md bg-alkali-500 hover:bg-alkali-700 text-white">
                    {item.buttonName}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="px-7">
        <div className="max-w-7xl m-auto pt-36 pb-14">
          <div id="contact-form" className="">
            <HubspotForm
              portalId="20442125"
              formId="2f4a9401-2350-4ee1-9f35-57193a77aa76"
              loading={
                <div
                  className="flex justify-center items-center w-full"
                  style={{ height: 600 }}
                >
                </div>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
