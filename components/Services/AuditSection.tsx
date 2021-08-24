import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Image from 'next/image'
import AuditForm from "../AuditForm";

const AuditSection = (props) => {
    return (
        <div className="p-4 py-24 md:py-36">
            <div className="flex flex-col lg:flex-row gap-x-20 justify-between items-center max-w-7xl m-auto mx-3 xl:mx-auto">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image
                        src="/images/free-audit.svg"
                        width={600}
                        height={450}
                    />
                </div>
                <div className="w-full lg:w-1/2">
                    <h3 className="text-4xl md:text-5xl font-bold max-w-2xl leading-normal mb:10 lg:mb-0 mx-auto lg:mx-0 text-center lg:text-left">
                        Get a Complimentary {props.serviceName} Audit
                    </h3>
                    <div className="max-w-xl pt-14 lg:pt-14 mx-auto lg:mx-0 text-lg">
                    Every successful engagement begins with an audit. Allow us to provide you a comprehensive 
                    audit completely free of charge. Our digital marketing experts will examine your business's 
                    website and provide you with actionable insights. Main areas covered include:
                        <ul className="list-disc ml-5 mt-5 space-y-3 text-lg">
                            <li>Full website weview (content, CRO, performance)</li>
                            <li>SEO: Comprehensive on-page audit</li>
                            <li>Digital marketing/reputation management</li>
                        </ul>
                    </div>
                    <div>
                        <AuditForm
                            style="flex mx-auto lg:mx-0 mt-14 p-4 px-10 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700"
                            text="Request Free Audit"
                            portalId={props.portalId}
                            formId={props.formId}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuditSection