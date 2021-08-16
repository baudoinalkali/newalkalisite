import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const FAQDropdown = (props) => {
    return (
        <Disclosure as="div" className="mt-2">
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex px-3 items-center hover:bg-alkaligrey-200 justify-between w-full py-5 text-lg font-medium text-left text-black rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>{props.question}</span>
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className={`${open ? "transform rotate-90 transition duration-300" : ""
                                } w-4 h-4 text-alkali-500 pl ml-4`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-alkaligrey-400">
                    <div dangerouslySetInnerHTML={{ __html: props.answer }}>

                    </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default FAQDropdown