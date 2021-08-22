import React from "react";
import { faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import CalendlyCalendar from "../components/CalendlyCalendar";
import { Portal } from "@headlessui/react";
import HubspotForm from "react-hubspot-form";


export default function AuditForm(props) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className={props.style}
                type="button"
                onClick={() => setShowModal(true)}
            >
                {props.text}
            </button>

            {showModal ? (
                <>
                    <Portal>
                        <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none flex items-center justify-center">
                            <div className="hs-form-popup-container relative my-6 mx-auto px-5">
                                <div className="hs-form-popup-container--inner border-0 md:px-10 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div
                                        className="flex items-start justify-between p-5 pb-0 md:mb-0 md:pb-5 rounded-t z-50"
                                        style={{ marginBottom: -60 }}
                                    >
                                        <button
                                            className="p-1 ml-auto border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none relative z-50"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="block outline-none focus:outline-none z-50">
                                                <FontAwesomeIcon
                                                    className="text-4xl text-black hover:text-alkali-500 transition duration-300"
                                                    icon={faTimes}
                                                ></FontAwesomeIcon>
                                            </span>
                                        </button>
                                    </div>

                                    <div className="relative p-0 md:p-6 flex-auto">
                                        <div className="max-w-7xl m-auto py-10 px-5 md:px-0">
                                            <div style={{ minHeight: 600 }}>
                                                {/* Hubspot Form */}
                                                <HubspotForm
                                                    portalId= "20442125"
                                                        formId= "0b0a2ef2-726c-4d98-a8ae-23108c2c922a"
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="meeting-pop-up-opacity opacity-25 fixed inset-0 z-40 bg-black ml-0"></div>
                    </Portal>
                </>
            ) : null}
        </>
    );
}