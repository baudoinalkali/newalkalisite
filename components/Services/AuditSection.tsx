import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Image from 'next/image'
import AuditForm from "../AuditForm";

const AuditSection = (props) => {
    return (
        <div className={`py-24 ${props.backgroundColor}`}>
            <div className="flex flex-col lg:flex-row gap-x-20 justify-between items-center max-w-7xl m-auto mx-3 xl:mx-auto">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image
                        src="/images/free-audit.svg"
                        width={600}
                        height={450}
                    />
                </div>
                <div className="w-full lg:w-1/2 px-7">
                    <h3 className="text-4xl md:text-5xl font-bold max-w-sm md:max-w-md leading-normal mb:10 lg:mb-0 mx-auto lg:mx-0 text-center lg:text-left">
                        {props.serviceName}
                    </h3>
                    <div className="max-w-xl mx-auto lg:mx-0 text-lg py-14 text-center lg:text-left text-alkaligrey-400">
                        {props.serviceDescription}
                    </div>
                    <div>
                        <AuditForm
                            style="flex mx-auto lg:mx-0 p-4 px-10 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700"
                            text="Request Free Audit"
                            portalId={props.portalId}
                            serviceName={props.serviceName}
                            formId={props.formId}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuditSection