import React, { useState, useEffect, useRef } from "react";
import HubspotForm from "react-hubspot-form";
import { Portal } from "@headlessui/react";
import { faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CalendlyCalendar from "./CalendlyCalendar";

const AuditFormPopup = (props) => {
  const {
    portalId = "8864686",
    formId = "709807a1-6f13-43d7-8f14-657988818e27",
    firstPromptDelay = 15000, // How many milliseconds after the user stays on the page that the popup should open
    timeoutBetweenPrompts = 300, // How many milliseconds since the last time the popup was closed it can be reopened
  } = props;

  const [show, setShow] = useState(false);
  const [showCalendy, setShowCalendy] = useState(false);
  const hasMouseOut = useRef(false);
  const showModalRef = useRef(false);

  const handleToggle = (evt) => {
    evt.stopPropagation();
    setShowCalendy((prev) => !prev);
  };

  const localStorageKey = `__hs-form-popup-last-closed-at-${formId}`;

  function closePopup() {
    localStorage.setItem(localStorageKey, `${new Date().getTime()}`);
    setShow(false);
    setShowCalendy(false);
    showModalRef.current = false;
  }

  function openPopup() {
    if (showModalRef.current) return;

    const formLastClosedTime = localStorage.getItem(localStorageKey);

    if (formLastClosedTime && isFinite(Number(formLastClosedTime))) {
      const currentTime = new Date().getTime();

      if (currentTime - Number(formLastClosedTime) < timeoutBetweenPrompts)
        return;
    }

    showModalRef.current = true;
    setShow(true);
  }

  function mouseOutOpenPopup() {
    if (hasMouseOut.current) return;
    if (showModalRef.current) return;

    hasMouseOut.current = true;
    openPopup();
  }

  useEffect(() => {
    setTimeout(openPopup, firstPromptDelay);
    document.body.addEventListener("mouseleave", mouseOutOpenPopup);
    return () => {
      document.body.removeEventListener("mouseleave", mouseOutOpenPopup);
    };
  }, []);

  return show ? (
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
                onClick={closePopup}
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
                {showCalendy ? (
                  <CalendlyCalendar />
                ) : (
                  <div style={{ minHeight: 600 }}>
                    {/* Hubspot Form */}
                    <HubspotForm
                      portalId={portalId}
                      formId={formId}
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
                )}

                {/* Calendy/Form Toggle Button */}
                <button
                  className="text-white bg-alkali-500 hover:bg-alkali-700 p-3 px-6 font-semibold shadow-2xl rounded-md"
                  onClick={handleToggle}
                >
                  {showCalendy
                    ? "Fill Out Audit Form"
                    : "Schedule a Call Instead"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="meeting-pop-up-opacity opacity-25 fixed inset-0 z-40 bg-black ml-0" />
    </Portal>
  ) : null;
};

export default AuditFormPopup;
