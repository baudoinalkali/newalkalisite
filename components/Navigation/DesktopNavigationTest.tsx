import Modal from '../../components/Modal'
import SiteMap from '../../content/siteMap'
import SiteMapContainer from '../../components/SiteMapContainer'
import Image from 'next/image'
import SolutionsDropdown from './SolutionsDropdown'
import AboutDropdown from './AboutDropdown'

const DesktopNavigationDropDown = (props) => {

    const headerLogoColor = () => {
        return `${props.headerColor === "white" ? '/images/alkali-logo-white.svg' : '/images/alkali-logo-blue.svg'}`
    }
    const headerCTAColor = () => {
        return `${props.headerColor === "white" ? 'text-alkaligrey-800 bg-white hover:bg-alkaligrey-700' : 'text-white bg-alkali-500 hover:bg-alkali-700'} p-3 px-6 font-semibold shadow-2xl rounded-md`
    }
    const headerTopLevelColor = () => {
        return `${props.headerColor === "white" ? 'text-white hover:text-alkaligrey-700' : 'text-alkali-black hover:text-alkali-500'} text-md font-bold uppercase`
    }

    return (
        <div className="py-10">
            <div className="max-w-7xl m-auto flex justify-between px-7 items-center">
                <a href="/"><img width="160" src={`${headerLogoColor()}`} /></a>
                <div>
                    <ul className={`flex justify-between gap-x-14 text-md font-bold`}>
                        <li>
                            <SolutionsDropdown
                                headerColor={props.headerColor}
                            />
                        </li>
                        <a href="/clients"><li className={`duration-500 uppercase ${headerTopLevelColor()}`}>Clients</li></a>
                        <li>
                            <AboutDropdown
                                headerColor={props.headerColor}
                            />
                        </li>
                        <a href="/contact"><li className={`duration-500 uppercase ${headerTopLevelColor()}`}>Contact</li></a>
                    </ul>
                </div>
                <div>
                    <Modal
                        style={`${headerCTAColor()}`}
                        text="Schedule a Call"
                    />
                </div>
            </div>
        </div>
    )
}

export default DesktopNavigationDropDown