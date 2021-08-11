import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'

const digitalMarketingLinks = [
  {
    name: 'SEO',
    href: '/services/digital-marketing/search-engine-optimization',
  },
  {
    name: 'Local SEO',
    href: '/services/digital-marketing/local-search-engine-optimization',
  },
  {
    name: 'PPC & Retargeting',
    href: '/services/digital-marketing/pay-per-click-advertising',
  },
  {
    name: 'Content Marketing',
    href: '/services/digital-marketing/content-marketing',
  },
  {
    name: 'Social Media Marketing',
    href: '/services/digital-marketing/social-media-marketing',
  },
  {
    name: 'Reputation Management',
    href: '/services/digital-marketing/reputation-management',
  }
]

const webDevelopmentLinks = [
  {
    name: 'WordPress Websites',
    href: '/services/web-development/wordpress-website-development',
  },
  {
    name: 'E-commerce Websites',
    href: '/services/web-development/ecommerce-website-development',
  },
  {
    name: 'Custom Websites',
    href: '/services/web-development/custom-website-development',
  }
]

const webDesignLinks = [
  {
    name: 'Logo Design',
    href: '/services/web-design/logo-design',
  },
  {
    name: 'Pre-Development Mockups',
    href: '/services/web-design/pre-development-mockups',
  }
]

export default function SolutionsDropdown(props) {
  const dropdownTextColor = () => {
    return `${props.headerColor === "white" ? 'text-white hover:text-alkaligrey-700' : 'hover:text-alkali-500'} text-md font-bold uppercase`
}   

const dropdownTextColorOpen = () => {
  return `${props.headerColor === "white" ? 'text-alkaligrey-700' : 'text-alkali-500'}`
}   

  return (
    <div className="">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : ''}
                ${dropdownTextColor()} duration-500 uppercase group bg-orange-700 rounded-md inline-flex items-center text-base font-bold text-md hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className={`${open ? `${dropdownTextColorOpen()}` : ''}`}>Solutions</span>
              <ChevronDownIcon
                className={`${open ? `transform -rotate-90 text-white ${dropdownTextColorOpen()}` : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
              <Popover.Panel className="absolute z-50 w-screen max-w-sm mt-3 transform -translate-x-1/4 mt-10 ml-14 sm:px-0 lg:max-w-4xl">
                <div className="overflow-hidden rounded-lg p-7 bg-white shadow-2xl ring-1 ring-black ring-opacity-5 grid grid-cols-3">
                  <div className="relative p-7">
                    <div className="font-bold text-lg pb-4">Digital Marketing</div>
                    {digitalMarketingLinks.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center py-3 transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="">
                          <p className="text-md hover:text-alkali-500 duration-500 font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="relative bg-white p-7">
                  <div className="font-bold text-lg pb-4">Web Development</div>
                    {webDevelopmentLinks.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center py-3 transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="">
                          <p className="text-md font-medium hover:text-alkali-500 duration-500 text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="relative bg-white p-7">
                  <div className="font-bold text-lg pb-4">Web Design</div>
                    {webDesignLinks.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center py-3 transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="">
                          <p className="text-md font-medium hover:text-alkali-500 duration-500 text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  )
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}
