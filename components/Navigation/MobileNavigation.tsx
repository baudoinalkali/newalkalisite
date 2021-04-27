/*  ./components/Navbar.jsx     */
import { useState } from 'react';
import SiteMap from '../../content/siteMap'
import Image from 'next/image'
import Modal from '../Modal';

const Group = (props) => {
    return (
        <div className="relative group">
            <button>{props.group.title}</button>
            {props.group.links.map(link =>
                <li className="pb-3">
                    <a className="hover:text-white" href={`/services/${link.slug}`}>{link.name}</a>
                </li>)}
        </div>
    )
}

export const MobileNavigation = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    const [toggleSubDigitalMarketing, setSubToggleDigitalMarketing] = useState(false);

    const handleSubDigitalMarketing = () => {
        setSubToggleDigitalMarketing(!toggleSubDigitalMarketing);
    };

    const [toggleSubWebDevelopment, setSubToggleWebDevelopment] = useState(false);

    const handleSubWebDevelopment = () => {
        setSubToggleWebDevelopment(!toggleSubWebDevelopment);
    };

    const [toggleSubWebDesign, setSubToggleWebDesign] = useState(false);

    const handleSubWebDesign = () => {
        setSubToggleWebDesign(!toggleSubWebDesign);
    };

    const digitalMarketingLinks = SiteMap.digitalMarketing
    const webDevelopmentLinks = SiteMap.webDevelopment
    const webDesignLinks = SiteMap.webDesign
    const marketingLinks = [digitalMarketingLinks]
    const developmentLinks = [webDevelopmentLinks]
    const designLinks = [webDesignLinks]


    return (
        <>
            <div className="">
                <nav className='flex items-center flex-wrap p-7 max-w-7xl m-auto'>
                    <a className='inline-flex items-center p-2 mr-4 ' style={{ fontSize: '0' }}>
                        <Image
                            src="/images/alkali-logo-blue.png"
                            width={160}
                            height={34}
                            alt=""
                        />
                    </a>
                    <button
                        className='group inline-flex p-3 hover:bg-alkali-500 lg:hidden text-white ml-auto hover:text-white outline-none'
                        onClick={handleClick}
                    >
                        <svg
                            className='w-6 h-6 text-alkali-500 group-hover:text-white'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </button>

                    <div className={`${active ? '' : 'hidden'} mt-3 justif-center w-full lg:inline-flex lg:flex-grow lg:w-auto bg-white`}>
                        <div className='pl-3 py-10 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                            <ul className="">
                                <li>
                                    <a className='lg:inline-flex lg:w-auto w-full uppercase text-xl py-2 font-bold hover:text-alkali-500'>
                                        Solutions
                                    </a>
                                </li>
                                <li className="pt-5">
                                    <button
                                        className='lg:inline-flex rounded font-bold uppercase text-lg items-center justify-center pl-4 hover:text-alkali-500'
                                        onClick={handleSubDigitalMarketing}
                                    >
                                        Digital Marketing
                                    </button>
                                    <ul className={`${toggleSubDigitalMarketing ? '' : 'hidden text-alkali-500'} -mt-5 uppercase text-md text-alkaligrey-400 lg:inline-flex lg:w-auto font-bold pl-10 pt-3`}>
                                        {marketingLinks.map(group => <Group group={group} />)}
                                    </ul>
                                </li>
                                <li className="py-3">
                                    <button
                                        className='lg:inline-flex rounded font-bold uppercase text-lg items-center justify-center pl-4 hover:text-alkali-500'
                                        onClick={handleSubWebDevelopment}
                                    >
                                        Web Development
                                    </button>
                                    <ul className={`${toggleSubWebDevelopment ? '' : 'hidden text-alkali-500'} -mt-5 uppercase text-md text-alkaligrey-400 lg:inline-flex lg:w-auto font-bold pl-10 pt-3`}>
                                        {developmentLinks.map(group => <Group group={group} />)}
                                    </ul>
                                </li>
                                <li className="pb-4">
                                    <button
                                        className='lg:inline-flex rounded font-bold uppercase text-lg items-center justify-center pl-4 hover:text-alkali-500'
                                        onClick={handleSubWebDesign}
                                    >
                                        Web Design
                                    </button>
                                    <ul className={`${toggleSubWebDesign ? '' : 'hidden text-alkali-500'} -mt-5 uppercase text-md text-alkaligrey-400 lg:inline-flex lg:w-auto font-bold pl-10 pt-3`}>
                                        {designLinks.map(group => <Group group={group} />)}
                                    </ul>
                                </li>
                                <li className="py-3">
                                    <a className='lg:inline-flex lg:w-auto w-full uppercase text-2xl py-2 font-bold hover:text-alkali-500'>
                                        Clients
                                    </a>
                                </li>
                                <li className="py-3">
                                    <a className='lg:inline-flex lg:w-auto w-full uppercase text-2xl py-2 font-bold hover:text-alkali-500'>
                                        About
                                    </a>
                                </li>
                                <li className="py-3">
                                    <a className='lg:inline-flex lg:w-auto w-full uppercase text-2xl py-2 font-bold hover:text-alkali-500'>
                                        Contact
                                    </a>
                                </li>
                            </ul>

                        </div>
                        <div className="max-w-full relative text-center py-2">
                            <Modal
                                style="text-center p-4 px-6 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700"
                                text="Schedule a Discovery Call"
                            />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default MobileNavigation