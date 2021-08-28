import CombinedNavigation from "../components/Navigation/CombinedNavigation";
import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import HubspotForm from "react-hubspot-form";

function Contact() {

  const contactInfo = [
    {
      method: "Chat",
      description: "We'd love to talk about how we can work together",
      slug: "/contact/#hs-chat-open",
      icon: "/images/chat.svg",
      buttonName: "Start Chat"
    },
    {
      method: "Email",
      description: "We'd love to talk about how we can work together",
      slug: "mailto:solutions@alkalidesigns.com",
      icon: "/images/email.svg",
      buttonName: "Send Email"
    },
    {
      method: "Phone",
      description: "We'd love to talk about how we can work together",
      slug: "tel:2819445711",
      icon: "/images/phone.svg",
      buttonName: "Start Call"
    }
  ]

  return (
    <div>
      <div className="bg-alkaligrey-200">
        <CombinedNavigation headerBackground="bg-alkaligrey-200" />
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
              <img
                className="-mt-24 shadow-2xl rounded-full p-5 mx-auto bg-white z-30"
                src={item.icon}
              />
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
                  <FontAwesomeIcon
                    className="text-4xl text-alkali-500 transition duration-300"
                    icon={faSpinner}
                  />
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
