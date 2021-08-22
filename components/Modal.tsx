import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import CalendlyCalendar from "../components/CalendlyCalendar";
import { Portal } from "@headlessui/react";

export default function MeetingPopUp(props) {
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
              <div className="hubspot-meeting-container w-full relative my-6 mx-auto">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none" style={{ background: "#f5f8fa" }}>
                  {/*header*/}
                  <button
                    className="pt-5 pr-7 ml-auto border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none relative z-50"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block outline-none focus:outline-none z-50">
                      <svg className="w-10 h-10 text-black hover:text-alkali-500 duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </span>
                  </button>
                  <div
                    className="flex items-start justify-between p-5 pb-0 md:mb-0 md:pb-5 rounded-t z-50"
                    style={{ marginBottom: "-66px" }}
                  >
                  </div>

                  {/*body*/}
                  <div className="relative flex-auto">
                    <div className="max-w-7xl m-auto py-14 mx-5">
                      <CalendlyCalendar />
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
